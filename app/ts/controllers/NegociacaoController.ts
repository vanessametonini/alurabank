import { MensagemView, NegociacoesView } from "../views/index";
import { Negociacoes, Negociacao } from '../models/index'
import { logarTempoDeExecucao } from "../helpers/decorators/index";

export class NegociacaoController {

  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _negociacoes: Negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this._inputData = <HTMLInputElement>document.querySelector('#data');
    this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
    this._inputValor = <HTMLInputElement>document.querySelector('#valor');
    this._negociacoesView.update(this._negociacoes);
  }

  @logarTempoDeExecucao()
  adiciona(event: Event) {

    event.preventDefault();

    let data = new Date(this._inputData.value.replace(/-/g,'/'));


    if(data.getDay() == DiaDoSemana.Domingo || data.getDay() == DiaDoSemana.Sabado ){
      this._mensagemView.update('Somente negociações em dias úteis por favor');
      return
    }

    const negociacao = new Negociacao(
      data,
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );


    this._negociacoes.adiciona(negociacao);
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update('Negociação adicionada com sucesso');
    
  }
}

enum DiaDoSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado
}