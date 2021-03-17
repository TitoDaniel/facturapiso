const buttonGuardar= document.querySelector('#button-guardar');
const buttonLimpiar= document.querySelector('#button-limpiar');
const consumomes1= document.querySelector('#consumomes1');
const consumomes2 = document.querySelector('#consumomes2');
const logica = document.querySelector('#logica');

/*Box NUMERO 1*/ 

const totalFinal = document.querySelector("#totalxmes");
let totalxmes = 0;
let logicalet = 0;

const createNewProduct = (valor) => {
    const ionCard = document.createElement('ion-card');
    const NewProductItem = document.createElement('ion-card-content');
    NewProductItem.textContent = +valor;
    productList.appendChild(ionCard);
}

const clearInputs = () => {
    consumomes1.value = '';
}

const presetnAlert =() => {
    const alert = document.createElement('ion-alert')
    alert.header  = 'Datos No Validos';
    alert.message = 'Por favor, ingresa los valores correctos';
    alert.buttons = ['Voy a volver a intentar!'];

    document.body.appendChild(alert)
    return alert.present();
}

buttonGuardar.addEventListener('click', () => {
    const valor = consumomes1.value;
    console.log(valor)

    if(valor <= 0 ) {
        presetnAlert();
        return;
    }

    createNewProduct(valor)
    totalxmes = valor;
    totalFinal.textContent = totalxmes;
})

buttonLimpiar.addEventListener('click', clearInputs);


/*Box NUMERO 2*/

const totalFinal2 = document.querySelector("#totalxmes2");
let totalxmes2 = 0;

const createNewProduct2 = (valor2) => {
    const ionCard = document.createElement('ion-card');
    const NewProductItem2 = document.createElement('ion-card-content');
    NewProductItem2.textContent = +valor2;
    productList.appendChild(ionCard);
}

const createNewProduct3 = (final) => {
    const ionCard = document.createElement('ion-card');
    const NewProductItem3 = document.createElement('ion-card-content');
    NewProductItem3.textContent = final;
    productList.appendChild(ionCard);
}

const clearInputs2 = () => {
    consumomes2.value = '';
}

buttonGuardar.addEventListener('click', () => {
    const valor2 = consumomes2.value;
    console.log(valor2)

    if(valor2 <= 0 ) {
        presetnAlert();
        return;
    }
    createNewProduct2(valor2)
    totalxmes2 = valor2;
    totalFinal2.textContent = totalxmes2;

    
    const final = totalxmes - totalxmes2;
    console.log(final)

    createNewProduct3(final)
    logicalet = final;
    logica.textContent = logicalet;

})

buttonLimpiar.addEventListener('click', clearInputs2);


/* FACTURA / KILOBYTE */

const valorfacturainput = document.querySelector("#valorfactura");
const valorfacturaout = document.querySelector("#kilobytevalor");
const buttonfactura = document.querySelector('#button-factura');
const buttonlimpiarfac = document.querySelector('#buttonlimpiarfac');
let facturalet = 0;
let kbporlet = 0;

const NewProductItem4 = (facturacionCreate) => {
    const ionCard = document.createElement('ion-card');
    const NewProductItem4 = document.createElement('ion-card-content');
    NewProductItem4.textContent = facturacionCreate;
    productList.appendChild(ionCard);
}

/* VALOR KB * CONSUMO */
const createNewProduct5 = (kbpor) => {
    const ionCard = document.createElement('ion-card');
    const NewProductItem5 = document.createElement('ion-card-content');
    NewProductItem5.textContent = kbpor;
    productList.appendChild(ionCard);
}

const clearInputsFAC = () => {
    valorfacturainput.value = '';
}


buttonfactura.addEventListener('click', () => {
    const facturacionCreate = valorfacturainput.value;
    console.log(facturacionCreate)

    if(facturacionCreate <= 0 ) {
        presetnAlert();
        return;
    }

    NewProductItem4(facturacionCreate)
    facturalet = facturacionCreate;
    valorfacturaout.textContent = facturalet;

    const porout = document.querySelector('#kbpor');
    const kbpor = logicalet * facturalet;
    console.log(kbpor)

    createNewProduct5(kbpor)
    kbporlet = kbpor;
    porout.textContent = kbporlet;
    
})

buttonlimpiarfac.addEventListener('click', clearInputsFAC);



/* SUBSIDIO */

const subsidioinput = document.querySelector("#valorsubsidio");
const subsidoioaout = document.querySelector("#subsidiout");
const buttonsubsidio = document.querySelector('#button-subsidio');
const buttonlimpiarsubsidio = document.querySelector('#button-limpiarsubsidio');
let subsidolet = 0;

const NewProductItem5 = (subsidioCreate) => {
    const ionCard = document.createElement('ion-card');
    const NewProductItem5 = document.createElement('ion-card-content');
    NewProductItem5.textContent = subsidioCreate;
    productList.appendChild(ionCard);
}

const createNewProduct6 = (div) => {
    const ionCard = document.createElement('ion-card');
    const NewProductItem6 = document.createElement('ion-card-content');
    NewProductItem6.textContent = div;
    productList.appendChild(ionCard);
}

const clearInputsSUB = () => {
    subsidioinput.value = '';
}


buttonsubsidio.addEventListener('click', () => {
    const subsidioCreate = subsidioinput.value;
    console.log(subsidioCreate)

    if(subsidioCreate <= 0 ) {
        presetnAlert();
        return;
    }

    NewProductItem5(subsidioCreate)
    subsidiolet = subsidioCreate;
    subsidoioaout.textContent = subsidiolet;

    const divout = document.querySelector('#div');
    const div = subsidiolet / 2;

    console.log(div)

    createNewProduct5(div)
    divlet = div;
    divout.textContent = divlet;
})
buttonlimpiarsubsidio.addEventListener('click', clearInputsSUB);



const botonresultados = document.querySelector("#buttonmostrar");
const buttonlimpiarfactotal = document.querySelector('#button-limpiartotalfactura');
const ellospaganout = document.querySelector("#ellospaganout");
const ustedpagaout = document.querySelector("#ustedpagaout");
const consumieronout = document.querySelector("#ellosconsumieronout");
let ustedpagalet = 0;
let consumieronlet = 0;

const NewProductItem7 = (ellospaganCreate) => {
    const ionCard = document.createElement('ion-card');
    const NewProductItem7 = document.createElement('ion-card-content');
    NewProductItem7.textContent = ellospaganCreate;
    productList.appendChild(ionCard);
}

const NewProductItem8 = (ustedpagaCreate) => {
    const ionCard = document.createElement('ion-card');
    const NewProductItem8 = document.createElement('ion-card-content');
    NewProductItem8.textContent = ustedpagaCreate;
    productList.appendChild(ionCard);
}

const NewProductItem10 = (consumieronCreate) => {
    const ionCard = document.createElement('ion-card');
    const NewProductItem10 = document.createElement('ion-card-content');
    NewProductItem10.textContent = consumieronCreate;
    productList.appendChild(ionCard);
}

botonresultados.addEventListener('click', () => {
    
    let resultadoslet = 0;

    const ellospaganCreate = kbporlet - divlet; 
    console.log(ellospaganCreate)

    NewProductItem7(ellospaganCreate)
    resultadoslet = ellospaganCreate;
    ellospaganout.textContent = resultadoslet;

    const ustedpagaCreate = valortotalfacturalet - resultadoslet;
    console.log(ustedpagaCreate)

    NewProductItem8(ustedpagaCreate)
    ustedpagalet = ustedpagaCreate;
    ustedpagaout.textContent = ustedpagalet;

    const consumieronCreate = logicalet;
    console.log(consumieronCreate)

    NewProductItem10(consumieronCreate)
    consumieronlet = consumieronCreate;
    consumieronout.textContent = consumieronlet;
})


const valortotalfacturainput = document.querySelector("#valorfactotalinput");
const valortotalfacturaout = document.querySelector("#valorfactotalout");
const buttontotalfactura = document.querySelector('#button-facturatotal');
const buttonlimpiartotalfactura = document.querySelector('#button-limpiartotalfactura');
let valortotalfacturalet = 0;

const NewProductItem9 = (valortotalfacturaCreate) => {
    const ionCard = document.createElement('ion-card');
    const NewProductItem9 = document.createElement('ion-card-content');
    NewProductItem9.textContent = valortotalfacturaCreate;
    productList.appendChild(ionCard);
}

const clearInputsValorTotal = () => {
    valortotalfacturainput.value = '';
}

buttontotalfactura.addEventListener('click', () => {
    const valortotalfacturaCreate = valortotalfacturainput.value;
    console.log(valortotalfacturaCreate)
    

    if(valortotalfacturaCreate <= 0 ) {
        presetnAlert();
        return;
    }

    NewProductItem9(valortotalfacturaCreate)
    valortotalfacturalet = valortotalfacturaCreate;
    valortotalfacturaout.textContent = valortotalfacturalet;
})

buttonlimpiartotalfactura.addEventListener('click', clearInputsValorTotal);