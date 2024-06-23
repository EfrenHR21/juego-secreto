/*Crea una función que calcule el índice de masa corporal (IMC) de 
una persona a partir de su altura en metros y peso en kilogramos, 
que se recibirán como parámetros. */
function imc(p,a){
    masa = p/(a*a);
}
imc(70,1.70);
console.log(masa);

/*Crea una función que calcule el valor del factorial de un número 
pasado como parámetro. */

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`); 
  


/*Crea una función que convierta un valor en dólares, pasado como 
parámetro, y devuelva el valor equivalente en reales(moneda brasileña,
si deseas puedes hacerlo con el valor del dólar en tu país). Para esto,
considera la cotización del dólar igual a R$4,80. */
function conversion(m){
    let soles = 3.80 ;
    let equivalente = m*soles;
    console.log(equivalente);
}
conversion(5);


/* Crea una función que muestre en pantalla el área y el perímetro de una
sala rectangular, utilizando la altura y la anchura que se proporcionarán
como parámetros.*/
function rectangulo(b,a){
    let area = b*a;
    let perimetro = 2*b+2*a;
    console.log(area);
    console.log(perimetro);
}
rectangulo(5,2);


/*Crea una función que muestre en pantalla el área y el perímetro de una 
sala circular, utilizando su radio que se proporcionará como parámetro. 
Considera Pi = 3,14. */
function circular(r){
    let pi = 3.14;
    let area = pi*(r*r);
    let perimetro = 2*pi*r;
    console.log(area);
    console.log(perimetro);
}
circular(2);


/*Crea una función que muestre en pantalla la tabla de multiplicar de un 
número dado como parámetro. */
function tabla(n){
    for (let cont = 0; cont <= 12; cont++) {
        resultado = cont*n;      
        console.log(`${n} * ${cont} es ${resultado}`);  
    }
}
tabla(3);