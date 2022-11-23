let nombre = prompt("Escribe tu nombre");
alert("Tu nombre es: " + nombre);

let num1 = parseInt(prompt("Escribe un número"));
let num2 = parseInt(prompt("Escribe otro número"));
let suma = num1 + num2;
alert(`El resultado de la suma de ${num1} y ${num2} es ${suma}`);

if (num1 && num2) {
    alert(`${num1} y ${num2} son mayores o iguales a 1`);
} else if (num1 || num2) {
    alert(`${num1} o ${num2} es mayor o igual a 1`);
} else if (!num2) {    
    alert(`${num2} es igual a 0`);
}


if (suma >= 1 && suma <= 10) {
    alert(`El número ${suma} se encuentra entre 1 y 10`)
} else  {
    alert(`El número ${suma} no se encuentra entre 1 y 10`)
}


let randNum = Math.floor(Math.random() * 10) + 1;
let guess = parseInt(prompt("Adivina un número del 1 al 10: "));

if (guess == randNum) {	
    alert(`¡Felicidades! El número era ${randNum}`);
} else {
    alert(`Lo siento, el número era ${randNum}`);
}
