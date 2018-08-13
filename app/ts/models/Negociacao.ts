export class Negociacao {

    constructor( readonly _data: Date
                , readonly _quantidade: number
                , readonly _valor: number){

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


    get volume(){
        return this._valor * this._quantidade
    }
}