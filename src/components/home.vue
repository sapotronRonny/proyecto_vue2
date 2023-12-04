<template> 
<body class="cuerpo">
    <div class="imagen_1">


        <div class="containerslide">

        <div class="slider">

        <input type="radio" name="slider" id="slideOne" checked>
        <input type="radio" name="slider" id="slideTwo">
        <input type="radio" name="slider" id="slideThree">

        <div class="buttons">
        <label for="slideOne"></label>
        <label for="slideTwo"></label>
        <label for="slideThree"></label>
        </div>

        <div class="content">
        <div class="firstslide"><h1></h1></div>
        <div class="secondslide"><H1>JAVASCRIPT</H1></div>
        <div class="thirdslide"><H1></H1></div>
        </div>

        </div>

        </div>

        <RouterLink class="link" :to="{ name:'registro' }" >
        <button id="inscribetete" class="boton-sobre-imagen">INSCRIBETE</button>
        </RouterLink>

        <div class="texto-sobre-boton"><strong>EXPANDE TU CONOCIMIENTO, MEJORA TU APRENDIZAJE</strong></div>
        <div class="rectangulo-izquierdo"></div>
        <div class="rectangulo-derecho"></div>
    </div>

    <div class="cuadro-post-imagen">
        <RouterLink class="link" :to="{ name:'cursos' }" ><div class="boton-izquierdo">Mas cursos</div></RouterLink>
        <RouterLink class="link" :to="{ name:'contacto' }" ><div class="boton-derecho">Contactanos</div></RouterLink>
    </div>
<br><br><br>


    <div class="quienes-somos">
        <div class="columna-izquierda">
            <div class="contenedor-superior">
                <div class="titulo">DESTACA EN LO QUE TE GUSTA</div>
                <div class="texto">Encuentra cursos de todo tipo en este repositorio de la ULEAM<br> 
                desde campos tecnologicos hasta artisticos.</div>
                <RouterLink class="link" :to="{ name:'cursos'}"><button id="botonete" class="boton">MAS CURSOS</button></RouterLink>
            </div>
            <div class="contenedor-inferior">
            <div class="imagen"></div><!-- Contenido de la columna izquierda -->
            </div>
        </div>
        <div class="columna-derecha">
            <div class="imagen"></div>
        </div>
    </div>
<br><br>


    <div class="mas-cursos">
        <div class="columna-izquierda2">
            <div class="imagen2"></div>
        </div>

        <div class="columna-derecha2">
            <div class="imagen2"></div>
        </div>
    </div>
<br><br>


   
</body>
</template>


<style>
*{
    padding: 0;
    margin: 0;
}

.containerslide{
    position: relative;
    width: 100%;
    height: 44.5VW;
    background-color: black;
}

.slider input{
    visibility: hidden;
    display: none;
}

.buttons{
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    bottom: 50px;
    gap: 10px;
}

.buttons label{
    width: 20px;
    height: 20px;
    background-color: white;
    opacity: 0.5;
    cursor: pointer;
    z-index: 1;
    transition:  300ms ease-in-out;
}

.buttons label:hover{
    scale: 1.2;
    opacity: 1;
}

.slider input:nth-child(1):checked ~ .buttons label:nth-child(1),
.slider input:nth-child(2):checked ~ .buttons label:nth-child(2),
.slider input:nth-child(3):checked ~ .buttons label:nth-child(3)
{
    opacity: 1;
    scroll-margin: 1.2;
    width: 40px;
}

.content{
    position: relative;
    width: 300vw;
    display: flex;
    transition: 400ms ease-in-out;
}

.firstslide,.secondslide,.thirdslide{
    position: relative;
    width: 100vw;
    height: 44.5vW;
    display: flex;
    justify-content: center;
    align-items: center;
}

.firstslide{
    background-color: rgb(0, 123, 82);
    background-image: url('src/assets/pintura.jpeg');
    background-size: cover; 
    background-repeat: no-repeat;
}

.secondslide{
    background-color: brown;
    background-image: url('src/assets/JavaScript_logo.png');
    background-size: cover; 
    background-repeat: no-repeat;
    object-position: center;
}

.thirdslide{
    background-color: green;
    background-image: url('src/assets/edicion vi.jpg');
    object-fit: cover; /* Ajusta la imagen al contenedor sin distorsión */
}

.slider input:nth-child(1):checked ~ .content{
    left: 0;
}

.slider input:nth-child(2):checked ~ .content{
    left: -100vw;
}

.slider input:nth-child(3):checked ~ .content{
    left: -200vw;
}

h1{
    font-size: 5rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}

.cuerpo{
    height: auto;
    background-color: white;
}

.imagen_1{
    width: 100%;
    height: 44.5vw;
    position: relative;
    display: inline-block;
    font-family: 'Montserrat Alternates', sans-serif;
}

.imagen_1 img {
    display: block;
    width: 100%;
    height: 100vh;
}

.capa-de-oscurecimiento {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    background: rgba(255, 255, 255, 0); /* Color de fondo semitransparente */
}

.boton-sobre-imagen {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 175, 240, 100);
    color: #fff;
    padding: 20px 30px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-family: 'Montserrat Alternates', sans-serif;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra debajo del botón */
}

.texto-sobre-boton {
    position: absolute;
    top: 35%; /* Ajusta la posición vertical según tus necesidades */
    max-width: 485px;
    left: 50%;
    transform: translateX(-50%);
    color: #ffffff; /* Color del texto */
    font-size: 24px; /* Tamaño de fuente */
    font-family: 'Montserrat Alternates', sans-serif;
    text-align: center;

}




.rectangulo-izquierdo:hover, .rectangulo-derecho:hover {
    background-color: #00b0f01f; 
    color: #fff; 
}


/*css del siguiente div ////////////////////////////////////////////////////////////////////////////*/

.cuadro-post-imagen{
    background-color: #F3F3F3;
    height: 10vw;
    display: flex;
    justify-content: space-between; /* Espacio entre los elementos flexibles */
    align-items: center; /* Alineación vertical al centro */
}

.boton-izquierdo,
.boton-derecho {
    padding: 20px 30px;
    background-color: #00AFF0;
    color: #fff;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    margin: 10vw;
    font-family: 'Montserrat Alternates', sans-serif;
    width: 20vw;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra debajo del botón */
}

.quienes-somos {
    display: flex;
    justify-content: center;
    font-family: 'Montserrat Alternates', sans-serif;
}

.columna-izquierda {
    max-width: 649px; /* Ancho máximo permitido para la columna izquierda */
    width: 100%;
    background-color: #ffffff; /* Color de fondo (opcional) */
    display: flex;
    flex-direction: column;
}

.columna-derecha {
    max-width: 494px;
    width: 100%;
    background-image: url('src/assets/edicion vi.jpg');
    background-size: cover;
    background-position: center;
    margin-left: 31px;
    border-radius: 1vw;
}

.columna-izquierda .contenedor-superior {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    text-align: right;
    padding: 20px; /* Añade espaciado alrededor del contenido */
}

.columna-izquierda .titulo {
    font-size: 24px;
    font-weight: bold;
}

.columna-izquierda .texto {
    margin-top: 10px;
}

.contenedor-superior .boton {
    margin-top: 10px;
    background-color: #00AFF0;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
}

.columna-izquierda .imagen {
    height: 520px;
    width: 100%;
    background-image: url('src/assets/pintura.jpeg');
    background-size: cover;
    background-position: center;
    margin-right: 31px;
    border-radius: 1vw;
}


.columna-derecha .imagen{
    background-image: url('src/assets/edicion vi.jpg');
    background-size: cover;
    background-position: center;
    margin-right: 31px;
    border-radius: 1vw;
    width: 100%;
}

/*columna dos///////////////////////////////////////////////////////*/
.mas-cursos {
    display: flex;
    justify-content: center;
    font-family: 'Fira Code', monospace;
}

.mas-cursos .columna-izquierda2 {
    max-width: 494px; /* Ancho máximo permitido para la columna izquierda */
    width: 100%;
    background-color: #ffffff; /* Color de fondo (opcional) */
    display: flex;
    flex-direction: column;
}

.mas-cursos .columna-derecha2{
    max-width: 649px;
    width: 100%;
    background-size: cover;
    background-position: center;
    margin-left: 31px;
    border-radius: 1vw;
}

.mas-cursos .columna-izquierda2 .imagen2{
    height: 740px;
    width: 100%;
    background-image: url('src/assets/android.jpg');
    background-size: cover;
    background-position: center;
    margin-right: 31px;
    border-radius: 1vw;
}

.mas-cursos .columna-derecha2 .imagen2{
    height: 520px;
    width: 100%;
    background-image: url('src/assets/JavaScript_logo.png');
    background-size: cover;
    background-position: center;
    margin-right: 31px;
    border-radius: 1vw;
}


.contenedor-inferior:hover .imagen {
    filter: brightness(50%); /* Oscurece la imagen en hover */
}

.columna-izquierda2:hover .imagen2 {
    filter: brightness(50%); /* Oscurece la imagen en hover */
}

.columna-derecha2:hover .imagen2 {
    filter: brightness(50%); /* Oscurece la imagen en hover */
}

</style>