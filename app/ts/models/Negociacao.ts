export class Negociacao {

    constructor( readonly data: Date
                , readonly quantidade: number
                , readonly valor: number){

        if(!data){
            throw Error('Uma data precisa ser definida')
        }

        if(!quantidade){
            throw Error('Uma quantidade precisa ser definida')
        }

        if(!valor){
            throw Error('Um valor precisa ser definida')
        }
    }


    get volume(){
        return this.valor * this.quantidade
    }
}