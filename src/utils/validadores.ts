export function obligatorio ( target: any, key:string){
    let valor = target[key];
    const getter = () => valor;

    const setter = (nuevoValor: string) =>{
        if(!nuevoValor){
            throw new Error(`La propiedad "${key}" es obligatoria`);
        }
        valor = nuevoValor;
    };
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    })

}


export function role ( target: any, key:string){
    let valor = target[key];
    const getter = () => valor;

    const setter = (nuevoValor: string) =>{
        if(!nuevoValor){
            throw new Error(`La propiedad "${key}" es obligatoria`);
        }
        valor = nuevoValor;
    };
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    })

}