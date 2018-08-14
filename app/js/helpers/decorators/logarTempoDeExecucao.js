System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoDeExecucao() {
        return function (target, propertyKey, descriptor) {
            //lógica do método que foi decorado
            const metodoOriginal = descriptor.value;
            // 
            descriptor.value = function (...args) {
                //apply chama o método original com determinados parametros
                const retorno = metodoOriginal.apply(this, args);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoDeExecucao", logarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
