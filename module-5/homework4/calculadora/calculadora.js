const numero1 = parseInt(process.argv[2]) 
const operador = process.argv[3]
const numero2 = parseInt(process.argv[4]) 

const calculadora = (num1, operador, num2) => {
    switch (operador) {
        case "+":
            return (num1 + num2);

        case "-":
            return (num1 - num2); 

        case "/":
            return (num1 / num2); 

        case "*":
            return (num1 * num2); 

        default:
            return ("operador no reconocido"); 
    }
}

console.log(calculadora(numero1, operador, numero2));
