class Negociacao {

    private _data;
    private _quantidade;
    private _valor;

    constructor(data, quantidade, valor){

        if(!data){
            throw Error('Uma data precisa ser definida')
        }

        if(!quantidade){
            throw Error('Uma quantidade precisa ser definida')
        }

        if(!valor){
            throw Error('Um valor precisa ser definida')
        }
        
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(){
        return this._data
    }

    get quantidade(){
        return this._quantidade
    }

    get valor(){
        return this._valor
    }

    get volume(){
        return this._valor * this._quantidade
    }
}