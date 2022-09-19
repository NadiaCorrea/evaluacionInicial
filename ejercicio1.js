window.onload = function iniciar(){
    document.getElementById("inicializar").onclick = inicializar;
}

/*
solicitará 5 nombres mediante cuadros de diálogo que deberán ir apareciendo
de uno en uno. Deberá crearse un array vacío al que se irán añadiendo de uno en uno
cada uno de los nombres introducidos. Deberá controlarse que no se pueden introducir
en el array nombres repetidos. Si el nombre ya existe en el array deberá mostrarse una
alerta indicando que ya existe y que debe introducir otro nombre.
*/

function inicializar(){
    let array = [];
    let i = 1;

    while (i <= 5){
        let nombre = prompt("Introduce un nombre: ");
        while(array.find(Element => Element == nombre)){
            alert("El nombre ya existe. Vuelve a introducir otro.");
            nombre = prompt("Introduce un nombre: ");
        }
        array.push(nombre);
        i = i +1;
        
    }
    /*
    Una vez introducidos los 5 nombres deberá mostrarse por consola la primera letra en mayúscula de cada uno
    de los nombres introducidos en el array ordenadas por orden alfabético.*/

    let arrayLetras= [];
    let elemento;
    let letra;

   for (let i= 0; i < array.length; i = i +1){
       elemento = array[i];
       letra = elemento.charAt(0);
       arrayLetras.push(letra.toUpperCase());
   }

    console.log(arrayLetras.sort());
}