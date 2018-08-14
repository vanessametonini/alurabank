System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(seletor, escapar = false) {
                    this._elemento = document.querySelector(seletor);
                }
                update(model) {
                    let template = this.template(model);
                    template = template.replace(/<script>[\s\S]*?<\/script>/, '');
                    this._elemento.innerHTML = this.template(model);
                }
            };
            exports_1("View", View);
        }
    };
});
