let imagenes=['imagenes/boca 1.jpg','imagenes/boca 2.jpg','imagenes/boca 3.jpg','imagenes/boca 4.jpg','imagenes/boca 5.jpg','imagenes/boca 7.jpg','imagenes/boca 8.jpg','imagenes/boca 9.jpg','imagenes/boca 10.jpg','imagenes/boca 11.jpg','imagenes/boca 12.jpg','imagenes/boca 13.jpg','imagenes/boca 14.jpg','imagenes/boca 15.jpg'];
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