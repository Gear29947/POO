
var global = "Global";
let local = "Local";
const constante = "Constante";

console.log("Variables: Global:" + global + " - Local:" + local + " - Constante:" + constante);

let num = 4;
let numeroDecimal = 3.1416;
let string = "Texto";
let booleano = true;

console.log("Variables: Numero Decimal:" + numeroDecimal + " - Cadena de Texto :" + string + " - Booleano:" + booleano)

let array=["Perro",20, "Gato",32]; 
let objeto={edad: 20,
    nombre: "benjamin",
    telefono: "921611681" 
}; 
let indefinida;
let nula=null;

function  sumar(num1, num2) {
    return num1 + num2;
};
console.log("Variables:\nEntero: " + num +"n\numeroDecimal: " + numeroDecimal + "\nstring: "+ string + "\nbooleano: "+ booleano +"\narray: "+ array +"\nobjeto: "+ JSON.stringify(objeto) +"\nindefinida: " + indefinida + "\nula: "+ nula + "\nResultado de función : " + sumar );
console.log(sumar(10,5));
