<template>
<body class="bodycursos">
<div class="tituloprincipal">
    <h1 style="text-align: center;">Cursos</h1>
    <section class="botoncito">
        <button class="agregarCurso">Agregar Curso</button>
    </section>
</div>

<div id="modal" class="modal">
    <div class="modal-content">
        <span class="close" id="cerrarModal">&times;</span>
        <h2>Agregar Curso</h2>
        <input style="padding: 10px; margin: 5px; border-radius: 50px;" type="text" id="nuevoTitulo" placeholder="Título del Curso">
        <input type="file" id="imagenInput" accept="image/*">
        <br>
        <button id="agregarCurso" style="border-radius: 50px; padding: 10px; background-color: #00AFF0; border: none; margin: 5px; font-family: 'Montserrat Alternates', sans-serif;">Agregar Curso</button>
    </div>
</div>

<div class="contenedor" id="contenedor">
    <!-- Primer bloque -->
    <div class="bloque">
        <RouterLink class="link" :to="{ name:'vistaprevia1' }" >
        <img class="imagen" src="src/assets/elementos-de-lenguaje-de-programacion-java-portada.jpg" alt="Imagen 1">
    </RouterLink>
        <div class="titulo">
            <h2>LOGICA DE PROGRAMACION</h2>
            <button class="boton">VER MAS</button>
        </div>
    </div>

    <!-- Segundo bloque -->
    <div class="bloque">
        <RouterLink class="link" :to="{ name:'vistaprevia2' }" >
        <img class="imagen" src="src/assets/JavaScript_logo.png" alt="Imagen 2">
        </RouterLink>
        <div class="titulo">
            <h2>JAVASCRIPT SCENTIALS</h2>
            <button class="boton">VER MAS</button>
        </div>
    </div>

    <!-- Tercer bloque -->
    <div class="bloque">
        <RouterLink class="link" :to="{ name:'vistaprevia3' }" >
        <img class="imagen" src="src/assets/android.jpg" alt="Imagen 3">
        </RouterLink>
        <div class="titulo">
            <h2>DESARROLLO ANDROID</h2>
            <button class="boton">VER MAS</button>
        </div>
    </div>

    <div class="bloque">
        <RouterLink class="link" :to="{ name:'vistaprevia4' }" >
        <img class="imagen" src="src/assets/edicion vi.jpg" alt="Imagen 3">
        </RouterLink>
        <div class="titulo">
            <h2>EDICION CON ADOBE PREMIERE</h2>
            <button class="boton">VER MAS</button>
        </div>
    </div>

    <div class="bloque">
        <RouterLink class="link" :to="{ name:'vistaprevia5' }" >
        <img class="imagen" src="src/assets/pintura.jpeg" alt="Imagen 3">
        </RouterLink>
        <div class="titulo">
            <h2>PINTRUA ORIENTADA A REALISMO</h2>
            <button class="boton">VER MAS</button>
        </div>
    </div>

    <div class="bloque">
        <RouterLink class="link" :to="{ name:'vistaprevia6' }" >
        <img class="imagen" src="src/assets/CSS3.jpg" alt="Imagen 3">
        </RouterLink>
        <div class="titulo">
            <h2>CSS INTERMEDIO</h2>
            <button class="boton">Ver más</button>
        </div>
    </div>

    <!-- Repite los bloques para obtener la formación 3x3 -->
</div>
</body>
</template>

<style>
*{
    padding: 0;
    margin: 0;
}

.bodycursos{
    height: auto;
    background-color: rgb(236, 236, 236);
}

.tituloprincipal{
    background-color: rgb(236, 236, 236);
    box-shadow: none;
    padding: 1%;
    color: #054258;
    font-family: 'Fira Code', monospace;
}
.botoncito{
    padding-left: 5vw;
    
}

.agregarCurso{
    border-radius: 50px;
    background-color: #007bff; /* Color de fondo del botón */
    color: #fff; /* Color del texto del botón */
    padding: 10px 20px; /* Espaciado interno del botón */
    border: none; /* Borde del botón */
    cursor: pointer;
}


.contenedor {
    background-color: #fff;
    padding: 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
}

.bloque {
    width: calc(33.33% - 10px);
    background-color: #f1f1f1;
    border: 0px solid #ccc;
    padding: 10px;
}

.imagen {
    max-width: 100%;
    max-height: auto;
    display: block;
    transition: filter 0.3s;
}

.imagen:hover {
    filter: brightness(70%);
}

.titulo {
    margin-top: 10px;
    text-align: center;
    font-family: 'Fira Code', monospace;
}

.contenedor .boton {
    display: none;
    background-color: #00AFF0;
    color: #fff;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    border-radius: 50px;
    font-family: 'Fira Code', monospace;
}

.imagen:hover + .titulo .boton {
    display: block;
}




.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
}

.modal-content {
    background-color: #fff;
    margin: 20% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 60%;
    max-width: 600px;
    position: relative;
    border-radius: 30px;
    font-family: 'Montserrat Alternates', sans-serif;
}

.close {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 30px;
    cursor: pointer;
}

.close:hover {
    color: red;
}
</style>