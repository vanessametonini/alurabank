export class Negociacao {

    constructor( private _data: Date
                , private _quantidade: number
                , private _valor: number){

        if(!_data){
            throw Error('Uma data precisa ser definida')
        }

        if(!_quantidade){
            throw Error('Uma quantidade precisa ser definida')
        }

        if(!_valor){
            throw Error('Um valor precisa ser definida')
        }
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