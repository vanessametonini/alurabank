import { MensagemView, NegociacoesView } from "../views/index";
import { Negociacoes, Negociacao } from '../models/index'
import { logarTempoDeExecucao, domInject } from "../helpers/decorators/index";

export class NegociacaoController {

  @domInject('#data')
  private _inputData: HTMLInputElement;
  @domInject('#quantidade')
  private _inputQuantidade: HTMLInputElement;
  @domInject('#valor')
  private _inputValor: HTMLInputElement;
  private _negociacoes: Negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');

  constructor() {
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