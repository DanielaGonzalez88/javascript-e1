//ENTREGA 1 JAVASCRIPT
//Ejercicio 1
const paridad = (numero) => {
  if (numero % 2 === 0) {
    console.log(`El numero ${numero} es par`);
  } else {
    console.log(`El numero ${numero} es impar`);
  }
};
// prueba
paridad(8);

//Ejercicio 2
const esMayor = (num1, num2) => {
  if (num1 > num2) {
    console.log(`El numero ${num1} es mayor que el numero ${num2}`);
  } else if (num2 > num1) {
    console.log(`El numero ${num2} es mayor que el numero ${num1}`);
  } else {
    console.log("Ambos numeros son iguales");
  }
};
//prueba
esMayor(10, 20);

//Ejercicio 3
const multiplo = (num) => {
  if (num % 5 === 0) {
    console.log(`El numero ${num} es multiplo de 5`);
  } else {
    console.log(`El numero ${num} no es multiplo de 5`);
  }
};
//prueba
multiplo(12);

//Ejercicio 4
const recorrer = (num) => {
  for (i = 0; i <= num; i++) {
    console.log(i);
  }
};
//prueba
recorrer(3);

//Ejercicio 5
const repeat = (palabra, num) => {
  for (i = 0; i < num; i++) {
    console.log(palabra);
  }
};
//prueba
repeat("Esto es una prueba", 5);

//Ejercicio 6
const recorrerArray = (array) => {
  for (i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};
//prueba
recorrerArray([2, "hola", true, 4, "bye"]);

//Ejercicio 7
const imprimirArray = (array) => {
  for (i = 0; i < array.length; i++) {
    if (i === 4) {
      continue;
    }
    console.log(array[i]);
  }
};
//prueba
let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imprimirArray(miArray);

//Ejercicio 8
const multiplicarArray = (array, num) => {
  for (i = 0; i < array.length; i++) {
    console.log(array[i] * num);
  }
};
//prueba
multiplicarArray(miArray, 3);
