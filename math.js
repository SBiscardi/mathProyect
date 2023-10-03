console.group("cuadrado");

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = Math.pow(ladoCuadrado,2); 

function calcularCuadrado(lado){
    return{
        perimetro: lado*4,
        area: lado*lado,
    };
    
}

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
})

console.groupEnd("cuadrado");



console.group("triangulo");

const ladoTriangulo1 =6;
const ladoTriangulo2 =5;
const ladoTrianguloBase =7;
const alturaTriangulo = 3;

const perimetroTriagulo = ladoTriangulo1+ladoTriangulo2+ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase*alturaTriangulo) / 2;

function calcularTriangulo(lado1,lado2,base,altura){
    return{
        perimetro: lado1+lado2+base,
        area: (base*altura)/2,
    };
    
}


function calcularAlturaTriangulo(base,lados){
    if(lados == base){
        console.warn("este no es un triangulo isoceles");
    }else{
        //h = raizcuadrada (lado1**2 - (b**2)/4)
        return Math.sqrt((lados**2)-((base**2))/4);
    }

}

console.log({
    perimetroTriagulo,
    areaTriangulo,
});

console.groupEnd("triangulo");


console.group("Circulo");

const radioCirculo = 3
const diametroCirculo = radioCirculo*2;
const PI = 3.14;

const perimetroCirculo = 2*PI *(radioCirculo/2);
const areaCirculo = PI*(radioCirculo**2);

//para poner una potencia se puede usar math.pow o 2 veces * (1**2)

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    perimetroCirculo,
    areaCirculo,
    
});

function calcularCirculo(diametroCirculo,radioCirculo,PI){
    return{
        perimetro: 2*Math.PI.toFixed(2) *(radioCirculo/2),
        area: PI*(radioCirculo**2),
    };
    
}

console.groupEnd("Circulo");


console.group("AlturaEscaleno");

const lado1 = 7;
const lado2 = 8;
const base = 6;

function calcularALturaEscaleno(lado1,lado2,base){

    const semiperimetro = (lado1+lado2+base)/2;
    return{
    area: Math.sqrt(semiperimetro*(semiperimetro-lado1)*(semiperimetro-lado2)*(semiperimetro-base))


    }
}

console.groupEnd("AlturaEscaleno");

