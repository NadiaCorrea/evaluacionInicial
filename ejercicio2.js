window.onload = function iniciar(){
    document.getElementById("insert").onclick = insertar;
    document.getElementById ("delete").onclick = borrar;
    document.getElementById ("modify").onclick = modificar;
}
/*Insertar nuevos empleados en la tabla. Deberá crear la función javascript
correspondiente que permita insertar nuevos empleados. En el caso de insertar
un nuevo empleado deberá actualizarse el número total de empleados. En el
caso de ya existir el empleado deberá mostrarse una alerta indicando que ya
existe el empleado. El DNI será el identificador del empleado.
*/
let total = 3;
let arrayEmpleados = ["77332344K","23445677J","12345678H"];

function insertar(){
    let tabla = document.getElementById("miTabla");
    let columnas = document.getElementsByTagName("td");
   

    let dni = prompt("Introduce el DNI: ");

    if(arrayEmpleados.indexOf(dni) != -1){
        alert("El empleado ya existe.");
    } else {
        
        let nombre = prompt("Introduce el nombre: ");
        let apellidos = prompt("Introduce los apellidos: ");

        let nuevaRow = document.createElement("tr");
        let colUno = document.createElement("td");
        let colDos = document.createElement("td");
        let coltres = document.createElement("td");
        let colcua = document.createElement("td");

        total = total +1;
        arrayEmpleados.push(dni);

        let orden = document.createTextNode(total);
        let nom = document.createTextNode(nombre);
        let ape = document.createTextNode(apellidos);
        let id = document.createTextNode(dni);

        colUno.appendChild(orden);
        colDos.appendChild(id);
        coltres.appendChild(nom);
        colcua.appendChild(ape);

        nuevaRow.appendChild(colUno);
        nuevaRow.appendChild(colDos);
        nuevaRow.appendChild(coltres);
        nuevaRow.appendChild(colcua);

        tabla.appendChild(nuevaRow)
    }

    //console.log(tabla);
   
    //console.log(columnas);
    //console.log("inserta");

}


/*
Borrar un empleado de la tabla. Deberá crear la función javascript
correspondiente que permita borrar un empleado. Para borrar un empleado
deberá introducirse el DNI del empleado que se desea borrar. En el caso de
borrar un empleado deberá actualizarse el número total de empleados. En el
caso de que no exista el empleado deberá mostrarse una alerta.
*/

 function borrar(){
    console.log("borra");


 }

/*
Modificar un empleado de la tabla. Deberá crear la función javascript
correspondiente. En el caso de que no exista el empleado a modificar deberá
mostrar una alerta indicando que el empleado a modificar no existe
*/

  function modificar(){
    console.log("modifica");
  }


  function searchDni(){

  }