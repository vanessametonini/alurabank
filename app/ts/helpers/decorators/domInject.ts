export function domInject(seletor: string) {
    return function (target: any, key: string) {
        let elemento: Element;

        const getter = function(){
            if(!elemento){
                
                elemento = document.querySelector(seletor) as Element
                console.log(`meee ${elemento}`);
            }
            return elemento
        }

        Object.defineProperty(target, key, {
            get: getter 
        })

    }
}