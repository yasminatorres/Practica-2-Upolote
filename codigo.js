let oUpolote = new Upolote();

ocultarFormularios();
function ocultarFormularios(){
  botones.style.display = "none";
  botones1.style.display = "none";
	oFormularios = document.querySelectorAll("form");

    for (let i = 0; i < oFormularios.length; i++) {
        oFormularios[i].style.display = "none";

}
}

//Gestion de form 
document.getElementById("rbtTipoPersona-C").addEventListener("click", monstrarCliente, false);

document.getElementById("rbtTipoPersona-R").addEventListener("click", monstrarRepartidor, false);

function monstrarCliente(){
  botones.style.display = "block";
  botones1.style.display = "none";
}

function monstrarRepartidor(){
  botones1.style.display = "block";
  botones.style.display = "none";
}


// Gestión de formularios
function gestionFormularios(sFormularioVisible) {
    ocultarFormularios();
  
    // Hacemos visible el formulario que llega como parámetro
    switch (sFormularioVisible) {
      case "frmAltaProducto":
        listados.innerHTML="";
        frmAltaProducto.style.display = "block";
        break;
      case "frmAltaPersona":
        listados.innerHTML="";
        frmAltaPersona.style.display = "block";
        break;
      case "frmAltaPedido":
        listados.innerHTML="";
        frmAltaPedido.style.display = "block";
      case "listadoPr":
          listadoProductos();
        break;
      case "listadoPe":
          listadoPersonas();
        break;
      case "listadoPedidos":
        listados.innerHTML="";
        frmListadoPedidos.style.display = "block";
        break;
    }
  }

  document.getElementById("btnAceptarAltaProducto").addEventListener("click", validarFormularioAltaProducto, false);

  //Validacion Formulario AltaProducto
  function validarFormularioAltaProducto() {

    let sErrores = "";
    let bValido = true; // en principio el formulario es válido

    // Validación tipoAlcohol
    let sTipoAlcohol = frmAltaProducto.txtTipoAlcohol.value.trim();
    oExpReg = /^[a-zA-Z\s]{2,20}$/;

    if (oExpReg.test(sTipoAlcohol) == false) {

    	if (bValido == true) { // ==> Primer error detectado en este campo
			frmAltaProducto.txtTipoAlcohol.focus();
	        bValido = false;
	    }

        frmAltaProducto.txtTipoAlcohol.classList.add("error");
        sErrores += "El Tipo de Alcohol debe contener letras mayúsculas y/o minúsculas y tener entre 2 y 20 caracteres\n";
    }

        // Validación Nombre
        let sNombre = frmAltaProducto.txtNombre.value.trim();
        oExpReg = /^[A-Z\s]{1}[a-zA-Z\s]{1,20}$/;
    
        if (oExpReg.test(sNombre) == false) {
    
            if (bValido == true) { // ==> Primer error detectado en este campo
                frmAltaProducto.txtNombre.focus();
                bValido = false;
            }
    
            frmAltaProducto.txtNombre.classList.add("error");
            sErrores += "El nombre debe contener la primera letra mayuscula y tener entre 2 y 20 caracteres\n";
        }
      
        // Validación Precio
        let iPrecio = frmAltaProducto.txtPrecio.value.trim();
        oExpReg = /^[1-9\s]{1,2}$/;
    
        if (oExpReg.test(iPrecio) == false) {
    
            if (bValido == true) { // ==> Primer error detectado en este campo
                frmAltaProducto.txtPrecio.focus();
                bValido = false;
            }
    
            frmAltaProducto.txtPrecio.classList.add("error");
            sErrores += "El precio debe contener solo números hasta 2 cifras\n";
        }
        
    // Validación Refresco
    let sRefresco = frmAltaProducto.txtRefresco.value.trim();
    oExpReg = /^[a-zA-Z\s]{2,20}$/;

    if (oExpReg.test(sRefresco) == false) {

    	if (bValido == true) { // ==> Primer error detectado en este campo
			frmAltaProducto.txtRefresco.focus();
	        bValido = false;
	    }

        frmAltaProducto.txtRefresco.classList.add("error");
        sErrores += "El Refresco debe contener letras mayúsculas y/o minúsculas y tener entre 2 y 20 caracteres\n";
    }        

    // --------------------------------------------------------------
    // COMPROBACIÓN FINAL
    if (bValido) { // Si todo OK
        let oProducto;
        let bHielo= true;
        oProducto = new Producto(sTipoAlcohol, sNombre, bHielo, iPrecio,sRefresco);
        if (oUpolote.altaProducto(oProducto)){
        alert("El formulario se ha rellenado correctamente");
        frmAltaProducto.reset(); // Vaciamos los campos del formulario
        frmAltaProducto.style.display = "none"; 
        //AñadirProducto;
    }
        else{
            alert("Producto registrada previamente");
        
        }
    } else {
        //generamos el alert -------
        alert(sErrores);
    }

}

document.getElementById("btnAceptarAltaPersona").addEventListener("click", validarFormularioAltaPersona, false);

function listadoProductos(){
    listados.innerHTML="";
    let arrayProductos = oUpolote.listarProductos();
    let insertar = document.getElementById('listados');

    var tbThead = document.createElement("thead");
    let trEncabezado = document.createElement("tr");

    let thEncabezadoTipoAlcohol = document.createElement("th");
    let thEncabezadoNombreAlcohol = document.createElement("th");
    let thEncabezadoPrecio = document.createElement("th");
    let thEncabezadoRefresco = document.createElement("th");
    let thEncabezadoHielo = document.createElement("th");

    var textoEncabezadoTipoAlcohol = document.createTextNode("Tipo de alcohol");
    var textoEncabezadoNombreAlcohol = document.createTextNode("Nombre"); 
    var textoEncabezadoPrecio = document.createTextNode("Precio"); 
    var textoEncabezadoRefresco= document.createTextNode("Refresco"); 
    var textoEncabezadoHielo= document.createTextNode("Hielo"); 

    thEncabezadoTipoAlcohol.appendChild(textoEncabezadoTipoAlcohol);
    thEncabezadoNombreAlcohol.appendChild(textoEncabezadoNombreAlcohol);
    thEncabezadoPrecio.appendChild(textoEncabezadoPrecio);
    thEncabezadoRefresco.appendChild(textoEncabezadoRefresco);
    thEncabezadoHielo.appendChild(textoEncabezadoHielo);

    trEncabezado.appendChild(thEncabezadoTipoAlcohol);
    trEncabezado.appendChild(thEncabezadoNombreAlcohol);
    trEncabezado.appendChild(thEncabezadoPrecio);
    trEncabezado.appendChild(thEncabezadoRefresco);
    trEncabezado.appendChild(thEncabezadoHielo);
  
    var oTabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    oTabla.appendChild(tblBody);

    tbThead.appendChild(trEncabezado);
    oTabla.appendChild(tbThead);

    if (arrayProductos.length > 0) {

        arrayProductos.forEach(element => {

          let tr = document.createElement("tr");

          var celda1 = document.createElement("td"); 
          var celda2 = document.createElement("td"); 
          var celda3 = document.createElement("td"); 
          var celda4 = document.createElement("td"); 
          var celda5 = document.createElement("td");

          var textoCeldaTipoAlcohol = document.createTextNode(element.getTipoAlcohol());
          var textoCeldaNombreAlcohol = document.createTextNode(element.getNombreAlcohol()); 
          var textoCeldaPrecio = document.createTextNode(element.getPrecio()); 
          var textoCeldaRefresco = document.createTextNode(element.getRefresco()); 
          var textoCeldaHielo = document.createTextNode(element.getHielos()); 

          celda1.appendChild(textoCeldaTipoAlcohol);
          celda2.appendChild(textoCeldaNombreAlcohol);
          celda3.appendChild(textoCeldaPrecio);
          celda4.appendChild(textoCeldaRefresco);
          celda5.appendChild(textoCeldaHielo);

          tr.appendChild(celda1);
          tr.appendChild(celda2);
          tr.appendChild(celda3);
          tr.appendChild(celda4);
          tr.appendChild(celda5);

          tblBody.appendChild(tr);

      });

      oTabla.appendChild(tblBody);
      insertar.appendChild(oTabla);
      oTabla.setAttribute("border", "2");
  }

  return oTabla;
}

function listadoPersonas(){
    listados.innerHTML="";
    let arrayPersonas = oUpolote.listarPersonas();
    let insertar = document.getElementById('listados');

    var tbThead = document.createElement("thead");
    let trEncabezado = document.createElement("tr");

    let thEncabezadoNombre = document.createElement("th");
    let thEncabezadoApellido = document.createElement("th");
    let thEncabezadoTelefono = document.createElement("th");

    var textoEncabezadoNombre = document.createTextNode("Nombre");
    var textoEncabezadoApellido = document.createTextNode("Apellido"); 
    var textoEncabezadoTelefono = document.createTextNode("Telefono"); 

    thEncabezadoNombre.appendChild(textoEncabezadoNombre);
    thEncabezadoApellido.appendChild(textoEncabezadoApellido);
    thEncabezadoTelefono.appendChild(textoEncabezadoTelefono);

    trEncabezado.appendChild(thEncabezadoNombre);
    trEncabezado.appendChild(thEncabezadoApellido);
    trEncabezado.appendChild(thEncabezadoTelefono);
  
    var oTabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    oTabla.appendChild(tblBody);

    tbThead.appendChild(trEncabezado);
    oTabla.appendChild(tbThead);

    if (arrayPersonas.length > 0) {

        arrayPersonas.forEach(element => {

          let tr = document.createElement("tr");

          var celda1 = document.createElement("td"); 
          var celda2 = document.createElement("td"); 
          var celda3 = document.createElement("td"); 

          var textoCeldaNombre = document.createTextNode(element.getNombre());
          var textoCeldaApellido = document.createTextNode(element.getApellido()); 
          var textoCeldaTelefono = document.createTextNode(element.getTelefono()); 

          celda1.appendChild(textoCeldaNombre);
          celda2.appendChild(textoCeldaApellido);
          celda3.appendChild(textoCeldaTelefono);

          tr.appendChild(celda1);
          tr.appendChild(celda2);
          tr.appendChild(celda3);

          tblBody.appendChild(tr);

      });

      oTabla.appendChild(tblBody);
      insertar.appendChild(oTabla);
      oTabla.setAttribute("border", "2");
  }

  return oTabla;
};

//Validacion Formulario AltaProducto
function validarFormularioAltaPersona() {

  let sErrores = "";
  let bValido = true; // en principio el formulario es válido

  // Validación Nombre
  let sNombre = frmAltaPersona.txtNombre.value.trim();
  oExpReg = /^[A-Z\s]{1}[a-zA-Z\s]{1,20}$/;

  if (oExpReg.test(sNombre) == false) {

      if (bValido == true) { // ==> Primer error detectado en este campo
        frmAltaPersona.txtNombre.focus();
          bValido = false;
      }

      frmAltaPersona.txtNombre.classList.add("error");
      sErrores += "El nombre debe contener la primera letra mayuscula y tener entre 2 y 20 caracteres\n";
  }

        // Validación Apellido
    let sApellido = frmAltaPersona.txtApellido.value.trim();
    oExpReg = /^[A-Z\s]{1}[a-zA-Z\s]{1,20}$/;
  
    if (oExpReg.test(sApellido) == false) {
  
        if (bValido == true) { // ==> Primer error detectado en este campo
          frmAltaPersona.txtApellido.focus();
            bValido = false;
        }
  
        frmAltaPersona.txtApellido.classList.add("error");
        sErrores += "El apellido debe contener la primera letra mayuscula y tener entre 2 y 20 caracteres\n";
    }
   
    // Validación Telefono
    let iTelefono = frmAltaPersona.txtTelefono.value.trim();
    oExpReg = /^[6\s]{1}[0-9\s]{8}$/;
  
    if (oExpReg.test(iTelefono) == false) {
  
        if (bValido == true) { // ==> Primer error detectado en este campo
          frmAltaPersona.txtTelefono.focus();
            bValido = false;
        }
  
        frmAltaPersona.txtTelefono.classList.add("error");
        sErrores += "El telefono debe tener 9 numeros y empezar por 6\n";
    }    

 //Validar checkbox
 var bCheck = false;
 for(let i = 0; i < frmAltaPersona.rbtTipoPersona.length; i++)
 {
     if(frmAltaPersona.rbtTipoPersona[i].checked)
         bCheck = true;
 }
 console.log(bCheck);
 if(bCheck == false)
 {
     bValido = false;
     frmAltaPersona.rbtTipoPersona[0].focus();
     document.querySelector(".radio").parentNode.classList.add("error");
     sErrores += "Debe marcar una opción en Tipo de Persona\n";
 }

 //Validar medio seleccionado
 var radioCliente = document.getElementById("rbtTipoPersona-C");
 var radioRepartidor = document.getElementById("rbtTipoPersona-R");
 

 if(radioCliente.checked)
 {
     //Validar IdCliente
     var iIdCliente = frmAltaPersona.txtIdCliente.value.trim();
     oExpReg = /^[0-9]{3}$/;
     if (oExpReg.test(iIdCliente) == false) {

         if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaPersona.txtIdCliente.focus();
             bValido = false;
         }

         frmAltaPersona.txtIdCliente.classList.add("error");
         sErrores += "El Id Cliente deben ser 3 numeros\n";
     }
 }
 else if(radioRepartidor.checked)
 {
     //Validar Repartidor
     var iIdRepartidor = frmAltaPersona.txtIdRepartidor.value.trim();
     oExpReg = /^[0-9]{3}$/;

     if (oExpReg.test(iIdRepartidor) == false) {

         if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaPersona.txtIdRepartidor.focus();
             bValido = false;
         }

         frmAltaPersona.txtIdRepartidor.classList.add("error");
         sErrores += "El Id Repartidor deben ser 3 numeros\n";
     }
 }

  // --------------------------------------------------------------
  // COMPROBACIÓN FINAL
  if (bValido) { // Si todo OK

    if(radioCliente.checked){
    oPersona = new Cliente(sNombre, sApellido, iTelefono, iIdCliente);
    }
    else{
    oPersona = new Repartidor(sNombre, sApellido, iTelefono, iIdRepartidor);
    }

    if (oUpolote.altaPersona(oPersona)){
    alert("El formulario se ha rellenado correctamente");
      frmAltaPersona.reset(); // Vaciamos los campos del formulario
      frmAltaPersona.style.display = "none";
      //AñadirPersona;
  } 

  else{
    alert("Persona registrada previamente");
   }
  
 } else {
      //generamos el alert -------
      alert(sErrores);
  }

}

document.getElementById("btnAceptarPedido").addEventListener("click", validarFormularioAltaPedido, false);

//Validacion Formulario AltaProducto
function validarFormularioAltaPedido() {

  let sErrores = "";
  let bValido = true; // en principio el formulario es válido

  // Validación Id Producto
  let sNombreProducto = frmAltaPedido.txtNombreProducto.value.trim();
  oExpReg = /^[A-Z\s]{1}[a-zA-Z\s]{1,20}$/;

  if (oExpReg.test(sNombreProducto) == false) {

      if (bValido == true) { // ==> Primer error detectado en este campo
        frmAltaPedido.txtNombreProducto.focus();
          bValido = false;
      }

      frmAltaPedido.txtNombreProducto.classList.add("error");
      sErrores += "El nombre debe contener la primera letra mayuscula y tener entre 2 y 20 caracteres\n";
  }

     //Validar Repartidor
     var iIdRepartidor = frmAltaPedido.txtIdRepartidor.value.trim();
     oExpReg = /^[0-9]{3}$/;

     if (oExpReg.test(iIdRepartidor) == false) {

         if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaPedido.txtIdRepartidor.focus();
             bValido = false;
         }

         frmAltaPedido.txtIdRepartidor.classList.add("error");
         sErrores += "El Id Repartidor deben ser 3 numeros\n";
     }  

     //Validar IdCliente
     var iIdCliente = frmAltaPedido.txtIdCliente.value.trim();
     oExpReg = /^[0-9]{3}$/;
     if (oExpReg.test(iIdCliente) == false) {

         if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaPedido.txtIdCliente.focus();
             bValido = false;
         }

         frmAltaPedido.txtIdCliente.classList.add("error");
         sErrores += "El Id Cliente deben ser 3 numeros\n";
     } 
     
     //Validar idPedido
     var iIdPedido = frmAltaPedido.txtIdPedido.value.trim();
     oExpReg = /^[0-9]{3}$/;
     if (oExpReg.test(iIdPedido) == false) {

         if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaPedido.txtIdPedido.focus();
             bValido = false;
         }

         frmAltaPedido.txtIdPedido.classList.add("error");
         sErrores += "El Id Pedido deben ser 3 numeros\n";
     }    
     
     //Validar idPedido
     var dtFecha = frmAltaPedido.txtFechaPedido.value.trim();
     let validaFecha = Date.parse(dtFecha);
     if  (isNaN(validaFecha)) {

         if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaPedido.txtFechaPedido.focus();
             bValido = false;
         }

         frmAltaPedido.txtFechaPedido.classList.add("error");
         sErrores += "Debe seleccionar una fecha\n";
     }            

     

  // --------------------------------------------------------------
  // COMPROBACIÓN FINAL
  if (bValido) { // Si todo OK
      alert("El formulario se ha rellenado correctamente");
      //altaPedido();
      frmAltaPedido.reset(); // Vaciamos los campos del formulario
      frmAltaPedido.style.display = "none";
      //AñadirProducto;
  } else {
      //generamos el alert -------
      alert(sErrores);
  }

}
