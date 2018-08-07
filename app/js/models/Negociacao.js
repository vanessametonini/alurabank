export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
        if (!_data) {
            throw Error('Uma data precisa ser definida');
        }
        if (!_quantidade) {
            throw Error('Uma quantidade precisa ser definida');
        }
        if (!_valor) {
            throw Error('Um valor precisa ser definida');
        }
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._valor * this._quantidade;
    }
}
