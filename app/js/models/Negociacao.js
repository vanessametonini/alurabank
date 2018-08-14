System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, quantidade, valor) {
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                    if (!data) {
                        throw Error('Uma data precisa ser definida');
                    }
                    if (!quantidade) {
                        throw Error('Uma quantidade precisa ser definida');
                    }
                    if (!valor) {
                        throw Error('Um valor precisa ser definida');
                    }
                }
                get volume() {
                    return this.valor * this.quantidade;
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
