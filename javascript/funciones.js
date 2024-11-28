//formas de exportar funciones
const pi = 3.14;

function area (radio){
    return pi*radio*2
}
//para exportar algo y que desde otro archivo se pueda importar se hace asi:
export{area}

// o 2 se puede poner export antes de la funcion

export function suma(num1, num2){
    return num1 + num2
}

//exportar clases
export class Pokemon{
    static vida = 100
    constructor(TipoPokemon, edad, color) {
        this._tipoPokemon = TipoPokemon
        this._edad = edad
        this._color = color
    }

    ataque(){
        return `El pokemon ${this._tipoPokemon} de color ${this._color} ataca`
    }
}