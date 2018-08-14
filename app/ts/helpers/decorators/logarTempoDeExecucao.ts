export function logarTempoDeExecucao(){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){

        //lógica do método que foi decorado
        const metodoOriginal = descriptor.value;

        // 
        descriptor.value = function(...args: any[]){
            //apply chama o método original com determinados parametros
            const retorno = metodoOriginal.apply(this, args);
            return retorno;
            
        }

        return descriptor;

    }
}