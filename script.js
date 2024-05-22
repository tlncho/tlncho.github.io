//Ocultar div de datos
document.getElementById('contenido').style.display="none";

function limpiarErrores(event){
const inputActual= event.target;
const siguienteTag=inputActual.nextSibling;
if(siguienteTag.nodeName=='SPAN'){
  siguienteTag.remove();
}

}
function validar(){
  const expRegNombre=/^[a-zA-Z]+$/;
  const expRegCorreo=/\S+@\S+\.\S+/;
  const expRegCelular=/^[1-9][0-9]{9}$/;
  const nombre= document.getElementById('nombre').value;
  const apellido=document.getElementById('apellido').value;
  const correo= document.getElementById('correo').value;
  const celular= document.getElementById('telefono').value;

  let bandera=false;
 
  if(nombre=='' || nombre.length < 5 || !expRegNombre.test(nombre) ){
    console.log('Entró');
    const spanError=document.createElement('span');
    if(nombre==''){
      spanError.textContent='*No puede dejar el campo vacio';
    }else if(nombre.length<6){
      spanError.textContent='*El nombre debe ser mayor a 4 caracteres';
    }else if(!expRegNombre.test(nombre)){
      spanError.textContent='*No puede contener números';
    }
   
    document.getElementById('nombre').insertAdjacentElement('afterend',spanError);
    spanError.className='colorRojo';
    
    
    bandera=true
  }
  if(apellido=='' || apellido.length<6 || !expRegNombre.test(apellido) ){
    const spanError=document.createElement('span');
    spanError.textContent='*No puede dejar el campo vacio';
    if(nombre==''){
      spanError.textContent='*No puede dejar el campo vacio';
    }else if(nombre.length<6){
      spanError.textContent='*El nombre debe ser mayor a 4 caracteres';
    }else if(!expRegNombre.test(nombre)){
      spanError.textContent='*El nombre no puede contener números';
    }
    document.getElementById('apellido').insertAdjacentElement('afterend',spanError);
    spanError.className='colorRojo';
    
    
    bandera=true
  }
 if(correo=='' || !expRegCorreo.test(correo)){
  const spanError=document.createElement('span');
  if(correo==''){
    spanError.textContent='*No puede dejar este campo vacío';
  }else if(!expRegCorreo.test(correo)){
    spanError.textContent='*Ingrese un mail válido';
  }
  
  document.getElementById('correo').insertAdjacentElement('afterend',spanError);
  spanError.className='colorRojo';
 
bandera=true
}
 if(celular && !expRegCelular.test(celular)){
  const spanError=document.createElement('span');
spanError.textContent='*Ingrese un número válido';
document.getElementById('telefono').insertAdjacentElement('afterend',spanError);
spanError.className='colorRojo';
bandera=true;
 }
 if(!bandera){
  
let texto;
if(celular){
texto=`Hola ${nombre }, te comunicaremos al número '${celular}' los pasos a seguir para ser socio`;

}else{
  texto=`Hola ${nombre }, te comunicaremos al correo electronico los pasos a seguir para ser socio`;
}
const li=document.createElement('li');
li.textContent=texto;
document.getElementById('datos').appendChild(li);
document.getElementById('nombre').value = "";
document.getElementById('apellido').value = "";
document.getElementById('correo').value = "";
document.getElementById('telefono').value = "";

//Mostrar div oculto de datos
document.getElementById('contenido').style.display="flex";


 }

    return false ;
}