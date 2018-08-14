System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, NegociacaoController, DiaDoSemana;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._inputData = document.querySelector('#data');
                    this._inputQuantidade = document.querySelector('#quantidade');
                    this._inputValor = document.querySelector('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let data = new Date(this._inputData.value.replace(/-/g, '/'));
                    if (data.getDay() == DiaDoSemana.Domingo || data.getDay() == DiaDoSemana.Sabado) {
                        this._mensagemView.update('Somente negociações em dias úteis por favor');
                        return;
                    }
                    const negociacao = new index_2.Negociacao(data, parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso');
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaDoSemana) {
                DiaDoSemana[DiaDoSemana["Domingo"] = 0] = "Domingo";
                DiaDoSemana[DiaDoSemana["Segunda"] = 1] = "Segunda";
                DiaDoSemana[DiaDoSemana["Terca"] = 2] = "Terca";
                DiaDoSemana[DiaDoSemana["Quarta"] = 3] = "Quarta";
                DiaDoSemana[DiaDoSemana["Quinta"] = 4] = "Quinta";
                DiaDoSemana[DiaDoSemana["Sexta"] = 5] = "Sexta";
                DiaDoSemana[DiaDoSemana["Sabado"] = 6] = "Sabado";
            })(DiaDoSemana || (DiaDoSemana = {}));
        }
    };
});
