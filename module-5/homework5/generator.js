import { writeFile } from 'fs'

// const stream = createReadStream('numeros') // aca uso lal ibreria fs

const generadorNumeros = () => { //aqui genero un array del numero 1 al numero 1000
    let array = []
    const limite = 1000
    for (let index = 1; index <= limite; index++) {  
        array.push(index)
    }
    return array
    
}

const numerosComoCadena = generadorNumeros().join('\n') //aca separo cada elemento por una coma ',' usando .join()

writeFile('numeros.txt', numerosComoCadena, (err) =>{
    if(err) {
        console.error('error en el archivo', err);
    }else{
        console.log('archivo creado y datos escritos de manera correcta');
    }
})


 