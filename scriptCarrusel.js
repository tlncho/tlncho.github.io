let imagenes=['imagenes/boca1.jpg','imagenes/boca2.jpg','imagenes/boca3.jpg','imagenes/boca4.jpg','imagenes/boca5.jpg','imagenes/boca7.jpg','imagenes/boca8.jpg','imagenes/boca9.jpg','imagenes/boca10.jpg','imagenes/boca11.jpg','imagenes/boca12.jpg','imagenes/boca13.jpg','imagenes/boca14.jpg','imagenes/boca15.jpg'];
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