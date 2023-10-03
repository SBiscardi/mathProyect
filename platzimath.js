const PlatziMath = {
    
};

function esPar(lista){
    
// if (lista.length % 2){

//     return false;

// }else{
//     return true;
// }
return !(lista.length % 2);
}
function esImPar(lista){
    return lista.length % 2;
}

function calcularModa(lista){
    const listaCount = {};

    for (let i = 0; i< lista.length; i++){
        const elemento = lista[i];

        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        }else{
            listaCount[elemento] = 1;
        }
    }
    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray,1);
    const listaOrdenadaMaxNumber = listaOrdenada[listaOrdenada.length-1]
    // console.log({listaCount,listaArray,listaOrdenada, listaOrdenadaMaxNumber});

    console.log("la moda es; " + listaOrdenadaMaxNumber[0]);
    const moda = listaOrdenadaMaxNumber[0];
    return moda;
}

function calcularMediana(lista){
    const listaEsPar = esPar(lista);

    if (listaEsPar){
        
        // const indexMitadAltaListaPar = lista.length / 2;
        // const indexMitadBajaListaPar = (lista.length / 2)-1;
        const mitadAltaListaPar = lista[lista.length / 2];
        const mitadBajaListaPar = lista[(lista.length / 2)-1];
        
        const listaMitades = [mitadAltaListaPar, mitadBajaListaPar]; 
        // calcularPromedio([lista[indexMitadAltaListaPar],lista[indexMitadBajaListaPar]]);
        const medianaListaPar = calcularPromedio(listaMitades);
        return medianaListaPar;
    }else{
        const indexMitadListaImpar = Math.floor(lista.length / 2); //math.floor aproxima al numero mas bajo siempre
        //math.round() aproxima al numero mas cercano 
        //math.ceil() aproxima al numero mas alto siempre
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(medianaListaImpar);
        console.log(indexMitadListaImpar);
        return medianaListaImpar
    }
}

function calcularPromedio(lista){
    // let sumaLista = 0;
    
    // for (let i = 0; i< lista.length; i++){
    //     sumaLista = sumaLista+ lista[i];
    // }

    // function sumarTodosElementos(valorAcumulado, nuevoValor){
    //     return valorAcumulado + nuevoValor;

    // }
    // () =>{} esto es una arroy function
    // const sumarTodosElementos = (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;

    // const sumaLista = lista.reduce(sumarTodosElementos);//el metodo reduce hace que todos los elementos de la lsita se compirman en uno solo 
    const sumaLista = lista.reduce((a,b)=>a+b);

    const promedio = sumaLista / lista.length;
    console.log (promedio);
    return promedio;
}

function ordenarListaBidimensional(listaDesordenada,i){
    function ordenarListaSort(valorAcumulado, nuevoValor){
        // if(valorAcumulado> nuevoValor){
        //     return 1;
        // }else if (valorAcumulado == nuevoValor){
        //     return 0;
        // }else if(valorAcumulado<nuevoValor){
        //     return -1;
        // }
        return valorAcumulado[i] - nuevoValor[i];
    }

    const lista = listaDesordenada.sort(ordenarListaSort);

    return lista;
}




