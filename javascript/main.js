//Comentar codigo en java script
/*
Variables tipos de datos:

let Nombrevariable = "contenido"


funciones
prompt : para solicitar escrbir algo en el navegador es como el input de python pero en el navegador, pero este siempre trae es un string si se quiere un numero se requiere convertir ej:
let numero = number(prompt("ingrese numero"))

*/
//let userAge = prompt("ingrese su edad por favor")
//let cumpleaños = 2024 - userAge

//document.write(`tu edad es de ${userAge} años y naciste en el año ${cumpleaños}`) // sacar el bastich AltG y 96, para hacer concatenacion

//OPERADORES ARITMETICOS
// let operador1 = 5;
// let operador2 = 7;

// let resultado;
// resultado  = operador1 + operador2;
// resultado  = operador1 - operador2;
// resultado  = operador1 * operador2;
// resultado  = operador1 / operador2; // divicion
// resultado  = operador1 % operador2; //modulo
// resultado  = operador1 ** operador2; //exponente
// resultado = operador1++; //incremento
// resultado = operador1--; //decremento

// console.log(resultado)

//OPERADOR DE ASIGNACION
// let resultado = 5;

// resultado += 2;
// resultado -= 2
// resultado /= 2
// resultado %= 2

//OPERADORES DE COMPARACION

// console.log(3 < 3) //menor que
// console.log(3 > 3) // mayor que
// console.log(3 <= 3) //menor o igual que
// console.log(3 >= 3) //mayor o igual que
// console.log(3 == 3) //igual que
// console.log(3 === 3) // si el tipo de datos es igual ejemplo si 2 tipos de datos son enteros
// console.log(3 != 3) //diferente que
// console.log(3 !== 3) //si el tipo de datos es diferente ejemplo si 2 tipos de datos no son enteros

//++++++OPERADORES LOGICOS+++++++++

// let operador1 = true;
// let operador2 = false

// console.log(operador1 && operador2) //and en python && en java script
// console.log(operador1 || operador2) //or en python || en javascript

// resultado = (20 == 20) ? 'si es igual': 'no es igual'; // es un condicional simple
// console.log(resultado)

//++++++++CONDICIONALES IF - ELSE+++++++++

// let edad = prompt("ingrese su edad")

// if (edad >= 18){
//     document.write("Ustes es todo un voludo mayor edaaad🙌🙌")
// }
// else if (edad < 18 && edad >= 12){
//     document.write("Usted es un adolecente pajeroo 🔥")
// }
// else{
//     document.write("Abrease pelado culicagado 👶")
// }

//++++++++SENTENCiAS SWITCH+++++++++++
// let numeroDia = prompt("ingres dia de la semana");

// switch(numeroDia){
//     case '1':
//         document.write('<h1> El dia de hoy es <br>LUNES</h1>');
//         break

//     case '2':
//         document.write('<h1> El dia de hoy es <br>MARTES</h1>');
//         break

//     case '3':
//         document.write('<h1> El dia de hoy es <br>MIERCOLES</h1>');
//         break

//     case '4':
//         document.write('<h1> El dia de hoy es <br>JUEVES</h1>');
//         break

//     case '5':
//         document.write('<h1> El dia de hoy es <br>VIERNES</h1>');
//         break

//     case '6':
//         document.write('<h1> El dia de hoy es <br>SABADO</h1>');
//         break

//     case '7':
//         document.write('<h1> El dia de hoy es <br>DOMINGO</h1>');
//         break

//     default:
//         document.write('<h1> Dia Desconocido</h1>')
// }

//++++++++CICLO WHILE++++++++
// let cont = 1;

// while (cont <= 50){
//     document.write(cont + ", ");
//     cont++;//contador
// }

//+++++++Do WHILE+++++
// con este el do ejecuta una vez el codigo antes que se cumpla el while principal
// do{
//     document.write(cont + ", ")
//     cont++
// }while(cont <= 0);

//++++++ CICLO FOR ++++++
// for(let conteo = 0; conteo<=50; conteo++){
//     document.write(conteo + ", ")
// }


// let palabra = prompt("Ingrese una palabra a repertir")
// let VecesRepetir = Number(prompt("numero de veces a repetir"))

// for(conteo = 1; conteo <= VecesRepetir; conteo++){
//     if(conteo == 8){
//         continue;//continue lo que hace es saltarse el numero
//     }
//     document.write(conteo + ", ")
// }

//+++++ARREGLOS O ARRAY EN JAVASCRIPT ES IGUAL A LISTA EN PYTHON.+++
/*
let arreglo = []; nueva forma de declararlo
let arreglo =new Array(); vieja forma de declararlo
*/
//el conteo de los indices es desde cero igual a python y se llama igual arreglo[0]

// let arreglo = ['manzana', 'pera', 'piña', 'guayaba'];
// console.log(arreglo[0])

// // remplzar elemento
// arreglo[1] = 'mora' // para remplazar un valor es como en el diccionario en python
// console.log(arreglo)

// //Obtener longitud del arreglo
// console.log(`numero de elementos es: ${arreglo.length}`)

// // metodo pop, push, shift, unshift
// //Push = te agrea un elemento al final
// //pop = elimina el ultimo elemento y no es necesario especificarlo
// //unshift = agrega un elemento al principio
// //shift = lo elimina
// // splice = elimina el elemento splice(indice, cantidad): Elimina una cantidad de elementos a partir del índice especificado.

// let numeros = ["uno", "dos", "tres"];

// //push - pop
// numeros.push("cuatro")
// console.log(numeros)
// numeros.pop()
// console.log(numeros)

// //unshift - shift
// numeros.unshift("cero")
// console.log(numeros)
// numeros.shift()
// console.log(numeros)

// //splice
// let lista = ["uno", "Dos", "tres", "cuatro"]
// // // splice(indice, cantidad) te elimina en el indice 2 1 solo elemento
// lista.splice(2, 1)
// console.log(lista)


// for (let elemento of lista){
//     console.log(elemento)
// }

// +++++++++++++FUNCIONES+++++++++++++++
// function saludo(name){
//     document.write(`hola como estas ${name} <br>`)
// }
// saludo("jesus");
// //
// function sumaNumeros(num1, num2){
//     let suma = num1 + num2
//     document.write(suma + "<br>")
// }
// sumaNumeros(5, 5)

// //tambien se utiliza return en java script que devuelve el resulado en consola llamando la funcion desde la consola
// function MultiplicacionNumeros(num1, num2){
//     let Multi = num1 * num2
//     return(Multi);

// }
// document.write(MultiplicacionNumeros(5, 5)); // o llamando la funcion desde document.write

//++++++++OBJETOS EN JAVASCRIPT es casi igual a diccionario en python+++++++++
// pero los objetos son diferentes en python que en javascript en java script son mas acesibles en teoria no es lo misma

// let frutas = {
//     familia: 'citricos',
//     cantidad: 20,
//     tipo: ['limon', 'naranja', 'mandarina']
// }
// //par imprimir el valor de la valor es con el nombre del objeto mas e punto mas la clave ej: frutas.cantidad
// // tambien se puede utilizar como en python
// console.log(frutas.cantidad)
// console.log(frutas['cantidad'])

// //agregar mas propiedades
// frutas.semilla = "corazon"
// //o tambien asi
// frutas['nombre'] = "Grey"
// console.log(frutas)

// // eliminar propiedades
// delete frutas.tipo;
// // o tambien asi se elimina
// delete frutas['nombre']
// console.log(frutas)

// // consulta si exites una propiedad devuelve un booleano
// console.log(frutas.hasOwnProperty('nombre'))

// CONTRUCTOR EN JAVASCRIPT SE PUEDEN CREAR SIN CLASES asi se crea:
// function Disco(artis, album, year){
//     this.artis = artis //this en vez de self.artis en python
//     this.album = album
//     this.year = year
// }

// let dicografia = new Disco('Diomedes', 'pidiendo via', 2003) //asi se crea el objeto con un new adealante
// console.log(dicografia) // devulve un objeto o diccionario

//+++++++++++++++CLASES EN JAVASCRIPT+++++++++++++++++

// class Player{
//     constructor(nombre, colorSombrero){
//         this._nombre = nombre;
//         this._colorSombrero = colorSombrero;
//     }
//     //Metodos
//     //los metodos no se declaran como con function como en python
//     saltar(){
//         return  `hola mi nombre es ${this._nombre} y estoy saltando`
//     }
//     correr(){}
//     saludar(){
//         return `hola mi nombre es ${this._nombre} y mi sombrero es ${this._colorSombrero}`
//     }

//     //obtener atributo 
//     get nombre(){
//         return this._nombre;
//     }
//     // cambiar atributo es como el setter en python
//     set nombre(NuevoNombre){
//         this._nombre =NuevoNombre
//     }
// }

// //crear objeto
// let player1 = new Player('Mario', "Rojo")
// let player2 = new Player('Luigi', "Verde")

// console.log(player1.saludar())
// console.log(player2.saludar())

// //GET: muestra un el el atributo de la clase
// console.log(player1.nombre)

// //SET: cambia un atributo de una clase
// player1.nombre = 'Alberto'
// console.log(player1.nombre)

// //+++++++++++SUBCLASE++++++++++++++++

// // se declara la clase hija y con extendeds se llama a la clase padre
// //En super indica los atributos que se van a heredar de la clase padre
// class Mascota  extends Player{
//     constructor(nombre, colorSombrero, colorPiel){
//         super(nombre, colorSombrero);
//         this._colorPiel =colorPiel;
//     }
//     get colorPiel(){
//         return this._colorPiel
//     }
//     set colorPiel(nuevoAtributo){
//         this._colorPiel = nuevoAtributo
//     }
//     //se puede concatenar el metodo de la clase padre con la hija ej:
//     saltar(){
//         return super.saltar() + ` con el sombrero ${this._colorSombrero} en la mano`
//     }

// }

// let pet1 = new Mascota("yoshi", "invisible", "verde")

// console.log(pet1)
// //GET
// console.log(pet1.colorPiel)
// //SET
// pet1._nombre = "rufus"
// console.log(pet1.nombre)
// //saludo eredado de la clase padre
// console.log(pet1.saludar())
// //concatenar metodos
// console.log(pet1.saltar())

//+++atributo y metodos estaticos+++

class Mascota{
    //atributo estatico se crea con static y son mas comunes para contador
    static cola = "larga"
    static contadorMascota = 0

    constructor(nombre, edad) {
        this._nombre = nombre
        this._edad = edad
        this._numero = ++Mascota.contadorMascota // cada vez que se cree un objeto se agrega 1 al contador mascota
    }
    //Metodos estaticos
    static saludo(){
        return 'mover cola'
    }
}

let mascota1 = new Mascota("perro", 5)
let mascota2 = new Mascota("gato", 3)
let mascota3 = new Mascota("lobo", 2)

// para llamar el atributo statico se llama con el nombre de la clase no con el objeto punto nombreDelAtributo
console.log(Mascota.cola) 
console.log(Mascota.contadorMascota)

// para llamar el METODO statico se llama con el nombre de la clase no con el objeto punto nombreDelMetodo
console.log(Mascota.saludo())

//herencia de atributos y metotos estaticos
class Firulais extends Mascota{
    constructor(nombre, edad, raza) {
        super(nombre, edad);
        this._raza = raza        
    }
    get raza (){
        return this._raza
    }
}

MyDog = new Firulais("osi", 4, "chandita")
//El contados aumenta si se crea metodo en la clase hija
//Se recuerda que los metodo y areibutos estaticos se llaman  primero con la clase.nombreDelMetodo o tributo
console.log(Firulais.contadorMascota)
//metodo no estatico
console.log(MyDog.raza)



