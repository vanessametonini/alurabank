class View {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        // erro de compilação
        this._elemento.innerHTML = this.template(model);
    }
}