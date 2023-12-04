<template>
    <div class="footer">
    <img class="logotipo" src="src/assets/LOGO-ULEAM-HORIZONTAL.png" alt="Logotipo Grande">
    <img class="imagenes-pequenas" src="src/assets/face.png" alt="Imagen Pequeña 1">
    <img class="imagenes-pequenas" src="src/assets/tiktok.png" alt="Imagen Pequeña 2">
    <img class="imagenes-pequenas" src="src/assets/insta.png" alt="Imagen Pequeña 3">
    <img class="imagenes-pequenas" src="src/assets/youtubes.png" alt="Imagen Pequeña 4">
    <div class="clear"></div>
</div>
</template>


<style>
.footer {
    height: 300px;
    background-color: #00AFF0; /* Color de fondo del footer */
    padding: 10px;
    border-radius: 0%;
}

.logotipo {
    float: left;
    width: 19%; /* Tamaño del logotipo grande */
    padding: 10px; /* Espaciado alrededor del logotipo */
}

.imagenes-pequenas {
    float: right;
    width: 2%; /* Tamaño de cada imagen pequeña */
    margin-right: 2%; /* Espacio entre las imágenes pequeñas */
}

.clear {
    clear: both; /* Limpia los flotantes */
}
</style>