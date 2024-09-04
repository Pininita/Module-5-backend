# Explication On Homework 4

In this homework we will make a calculator on node.js but sending parameters over the console or terminal.

I started creating a file call "calculadora" and started a new project Node.js using **npm init** with necesary files, like **calculadora.js**, **package.json** and **README.md**.

### Starting to code:

1. we create a function where we will calculates operation:

```javascript
const calculadora = (num1, operador, num2) => {
  switch (operador) {
    case "+":
    // code
    case "-":
    // code
    case "/":
    // code
    case "*":
    // code
    default:
      return "operador no reconocido";
  }
};
```

2. Now we create 3 variables, first one for first number that we will send, second one for operator (+, -, /, \*) and third one for last number that we will send.

**Remember**: You will have to ask for those arguments that we will send over the terminal, so we have to use "process.argv" on those variables, when we use console.log() on this variables, it will return an array element on string data, we have to change it to number data

- what we get:

```shell
PS C:\Users\Daniel\Desktop\Module-5-backend\module-5\homework4\calculadora> node calculadora.js 5 + 3
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\Daniel\\Desktop\\Module-5-backend\\module-5\\homework4\\calculadora\\calculadora.js',
  '5'
  '+'
  '2'
]
```

- how we transform them:

```javascript
const numero1 = parseInt(process.argv[2]);
const operador = process.argv[3];
const numero2 = parseInt(process.argv[4]);
```

3. We finish, we have to organized this code and make a console.log() of the function that we created

```javascript
console.log(calculadora(numero1, operador, numero2));
```

4. We open the terminal to send the arguments and get the result:

```bash
node calculadora.js 5 + 3
```
