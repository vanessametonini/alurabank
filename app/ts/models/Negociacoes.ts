import { Negociacao } from "./Negociacao";
import { logarTempoDeExecucao } from "../helpers/decorators/index";

export class Negociacoes {
    private _negociacoes: Negociacao[] = [];

    @logarTempoDeExecucao(true)
    adiciona(negociacao: Negociacao){
        this._negociacoes.push(negociacao);
    }
 
    get listar(): Negociacao[] {

        return ([] as Negociacao[]).concat(this._negociacoes) 
    }
}
