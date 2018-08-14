System.register(["./controllers/NegociacaoController"], function (exports_1, context_1) {
    "use strict";
    var NegociacaoController_1, controller, formulario;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (NegociacaoController_1_1) {
                NegociacaoController_1 = NegociacaoController_1_1;
            }
        ],
        execute: function () {
            controller = new NegociacaoController_1.NegociacaoController();
            formulario = document.querySelector('form');
            formulario.addEventListener('submit', event => controller.adiciona(event));
        }
    };
});
