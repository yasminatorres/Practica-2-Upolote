"use strict";

// Clase Producto

class Producto {

    constructor(sTipoAlcohol,sNombre,bHielos,iPrecio,sRefrescos) {
        this.tipoAlcohol = sTipoAlcohol;
        this.nombre = sNombre;
        this.hielos = bHielos;
        this.precio = iPrecio;
        this.refresco = sRefrescos;
    }

    setTipoAlcohol(sTipoAlcohol){
        this.tipoAlcohol=sTipoAlcohol;
    }

    getTipoAlcohol(){
        return this.tipoAlcohol;
    }

    setNombreAlcohol(sNombre){
        this.nombre=sNombre;
    }

    getNombreAlcohol()
    {
        return this.nombre;
    }

    setHielos(bHielos){
        this.hielos=bHielos;
    }

    getHielos(){
        return this.hielos;
    }
    
    setPrecio(iPrecio){
        this.precio=iPrecio;
    }

    getPrecio(){
        return this.precio;
    }
    
    setRefresco(sRefrescos){
        this.refresco=sRefrescos;
    }

    getRefresco()
    {
        return this.refresco;
    }

    toHTMLRow() {
    let sFila = "<tr>";
    sFila += "<td>" + this.tipoAlcohol + "</td>";
    sFila += "<td>" + this.nombre + "</td>";
    sFila += "<td>" + (this.hielos?"SI":"NO") + "</td>";
    sFila += "<td>" + this.precio + "</td>";
    sFila += "<td>" + this.refresco + "</td></tr>";

    return sFila;
}
}

// Clase Persona

class Persona {

    constructor(sNombre,sApellido,iTelefonos) {
        this.nombre = sNombre;
        this.apellido = sApellido;
        this.telefono = iTelefonos;
    }

    setNombre(){
        this.nombre = sNombre;
    }

    getNombre(){
        return this.nombre;
    }

    setApellido(){
        this.apellido = sApellido;
    }

    getApellido(){
        return this.apellido;
    }

    setTelefono(){
        this.telefono = iTelefono;
    }

    getTelefono(){
        return this.telefono;
    }

    toHTMLRow() {
        let sFila = "<tr>";
        sFila += "<td>" + this.nombre + "</td>";
        sFila += "<td>" + this.apellido + "</td>";
        sFila += "<td>" + this.telefono + "</td></tr>";
    
        return sFila;
    }
}

// Clase Cliente

class Cliente extends Persona {
    constructor(sNombre,sApellido,iTelefonos,iIdCliente) {
      super(sNombre,sApellido,iTelefonos);
      this.idCliente = iIdCliente;
    }

    setIdCliente(){
        this.idCliente = iIdCliente;
    }

    getIdCliente(){
        return this.idCliente;
    }

    toHTMLRow() {
        let sFila = "<tr>";
        sFila += "<td>" + this.nombre + "</td>";
        sFila += "<td>" + this.apellido + "</td>";
        sFila += "<td>" + this.telefono + "</td>";
        sFila += "<td>" + this.idCliente + "</td></tr>";
    
        return sFila;
}
}

// Clase Repartidor

class Repartidor extends Persona {
    constructor(sNombre,sApellido,iTelefonos,iIdRepartidor) {
      super(sNombre,sApellido,iTelefonos);
      this.idRepartidor = iIdRepartidor;
    }

    setIdRepartidor(){
        this.idRepartidor = iIdRepartidor;
    }

    getIdRepartidor(){
        return this.idRepartidor;
    }

    toHTMLRow() {
        let sFila = "<tr>";
        sFila += "<td>" + this.nombre + "</td>";
        sFila += "<td>" + this.apellido + "</td>";
        sFila += "<td>" + this.telefono + "</td>";
        sFila += "<td>" + this.idRepartidor + "</td></tr>";
    
        return sFila;
}
}

// Clase Pedido

class Pedido {

    constructor(oProducto,oRepartidor,oCliente,iIdPedido,iTotal,dFecha) {
        this.producto = oProducto;
        this.repartidor = oRepartidor;
        this.cliente = oCliente;
        this.idPedido = iIdPedido;
        this.total = iTotal;
        this.fecha = dFecha;
    }

    toHTMLRow() {
        let sFila = "<tr>";
        sFila += "<td>" + this.producto + "</td>";
        sFila += "<td>" + this.repartidor + "</td>";
        sFila += "<td>" + this.cliente + "</td>";
        sFila += "<td>" + this.idPedido + "</td>";
        sFila += "<td>" + this.total + "</td>";
        sFila += "<td>" + this.fecha.toLocaleDateString() + "</td>";
}
}

// Clase UPOLOTE

class Upolote {
    
    constructor(){
        this.productos = [];
        this.personas = [];
        this.pedidos = [];     
    }

altaProducto(oProducto){
    let bEncontrado = false;
    let bInsertado;

    for(let i=0; i < this.productos.length && !bEncontrado; i++){
        if(this.productos[i].nombre == oProducto.nombre){
            bEncontrado = true;
        }
    }

    if(bEncontrado){ // dado de alta previamente
        bInsertado = false;
    } else {
        bInsertado = true;
        this.productos.push(oProducto);
    }

    return bInsertado;
}

altaPersona(oPersona){
    let bEncontrado = false;
    let bInsertado;

    for(let i=0; i < this.personas.length && !bEncontrado; i++){
        if(this.personas[i].idCliente == oPersona.idCliente){
            bEncontrado = true;
        }
    }

    for(let i=0; i < this.personas.length && !bEncontrado; i++){
        if(this.personas[i].idRepartidor == oPersona.idRepartidor){
            bEncontrado = true;
        }
    }

    if(bEncontrado){ // dado de alta previamente
        bInsertado = false;
    } else {
        bInsertado = true;
        this.personas.push(oPersona);
    }

    return bInsertado;
}

//altaPedido(){}

listarProductos(){ //Listar todos los productos
    if (oUpolote.productos.length > 0)
        return this.productos;
    else
        alert("No hay productos");
}

listarPersonas(){ //Listar todas las personas
    if (oUpolote.personas.length > 0)
        return this.personas;
    else
        alert("No hay personas");
}
}

//listadoPedidos(){}


