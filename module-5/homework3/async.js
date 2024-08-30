
export const esperarSegundos = (segundos) => {
    setTimeout(() => {
      console.log('funcion asincrona completa, se espero: ', segundos, 'milisegundos');
      setTimeout(() => {
            console.log('este mensaje aparece despues de 10 segundos');
      }, 10000);
    }, segundos);
  };
  

