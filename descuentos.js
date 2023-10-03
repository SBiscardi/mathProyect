const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon")
const btn = document.querySelector("#calcular");
const presult = document.querySelector("#result");

btn.addEventListener("click", calcularPrecioConDescuento);

// const  cuponesobj = {
//     "PLATZI": 15,
//     "AMERICA":20,
//     "FRANCIA":50,
//     "URIBE":99,
// };

const couponsList = [];

couponsList.push({
    name: "FRANCIA",
    discount: 30,
});
couponsList.push({
    name: "PEDRO",
    discount: 40,
});
couponsList.push({
    name: "PEDRO2",
    discount: 50,
});


// function descuentoConCupones (){
//     let total;
//     const discountOnNumber = discounts[discount.value];

//     if (!discountOnNumber) return presult.innerText = "Discount cannoy be fount"
    
//     total = Number((price*(100-discountOnNumber))/100);

//     }


function calcularPrecioConDescuento(){
    // (P*(100-D)/100)
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if (!price ||!coupon){
        presult.innerText = "Porfavor llenar el formulario";
        return;
    }

    let discount;
// este e el codigo que se genero para los cupones con ARRAYS


    function buscarCupon (couponElement){
        return couponElement.name == coupon;

    }
    const couponInArray = couponsList.find(buscarCupon);

    if (couponInArray){
        discount = couponInArray.discount;
    }else{
        presult.innerText = "El cupon no es valido";
        return;
    }


// este e el codigo que se genero para los cupones con OBJETOS
    // if (cuponesobj[coupon]){
    //     discount = cuponesobj[coupon];
    // }else{
    //     presult.innerText = "El cupon no es valido";
    // }

    // switch (coupon){
    //     case "JuanDC_es_Batman":
    //         discount = 30;
    //         break;

    //     case "ud_sola":
    //         discount = 20;
    //         break;
    //     case "JuanDC_es_Batman_negro":
    //         discount = 99;
    //         break;
    //     default:
    //         presult.innerText = "El cupon no es valido";
    //         return;
    // }

    // if(coupon == "JuanDC_es_Batman"){
    //     discount = 30;

    // }else if(coupon == "ud_sola"){
    //     discount = 25;
    // }else{
    //     presult.innerText = "El cupon no es valido";
    //     return;
    // }

    const newPrice = (price*(100-discount))/100;

    presult.innerText = "El nuevo precio con descuento es $" + newPrice;

    
}





let arraySalarios = [1,2,3,4,6];

let sumaElementos = 0;
let promedio;

function sumarElementoss (){

for(let i = 0; i < arraySalarios.length; i++){

    sumaElementos += arraySalarios[i];
    
}

promedio = sumaElementos/arraySalarios.length;
}
sumarElementoss();

console.log(promedio);
console.log (sumaElementos);