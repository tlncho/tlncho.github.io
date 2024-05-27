let imagenes=['Imagenes/boca1.jpg','Imagenes/boca2.jpg','Imagenes/boca3.jpg','Imagenes/boca4.jpg','Imagenes/boca5.jpg','Imagenes/boca7.jpg','Imagenes/boca8.jpg','Imagenes/boca9.jpg','Imagenes/boca10.jpg','Imagenes/boca11.jpg','Imagenes/boca12.jpg','Imagenes/boca13.jpg','Imagenes/boca14.jpg','Imagenes/boca15.jpg'];
let cont=0;
function carrousel(carrusel) {
  carrusel.addEventListener('click', e=>{
let atras=carrusel.querySelector('.boton_atras');
let adelante=carrusel.querySelector('.boton_adelante');
let img=carrusel.querySelector('img');
let tgt=e.target;
if(tgt==atras){
if(cont >0){

img.src=imagenes[cont-1];
cont--;
}else{
    img.src=imagenes[imagenes.length-1];
    cont=imagenes.length-1;
}
}else if(tgt==adelante){
if(cont < imagenes.length -1){
    img.src=imagenes[cont+1];
    cont++;
}else{
    img.src=imagenes[0];
    cont=0;
}
}
  });
}
document.addEventListener("DOMContentLoaded",()=>{
let contenedor=document.querySelector('.carrusel');
carrousel(contenedor);
});