<template>
    <header>
        <RouterLink class="link" :to="{name:'casita'}">
        <div class="logo">
            <a href="index.html">
                <img src="src/assets/LOGO-ULEAM-HORIZONTAL.png" alt="Logo de la empresa">
            </a>
        </div>
        </RouterLink>

        <div class="botones">

            <RouterLink class="link" :to="{ name:'miscursos' }" >
            <button id="miscursos" class="boton">MIS CURSOS</button>
            </RouterLink>

            <RouterLink class="link" :to="{ name:'cursos' }" >
            <button id="cursos" class="boton">CURSOS</button>
            </RouterLink>

            <RouterLink class="link" :to="{ name:'registro' }" >
                <button id="registro" class="boton">SIGN UP</button>
            </RouterLink>

            <RouterLink class="link" :to="{ name:'login' }" >
            <button id="login" class="boton">SIGN IN</button>
            </RouterLink>
        </div>
    </header>
</template>


<script lang="ts">
    
</script>


<style>
*{
    padding: 0;
    margin: 0;
}

body{
    height: auto;
}
header {
    background-color: #00AFF0; /* Color de fondo del encabezado */
    color: #fff; /* Color del texto */
    padding: 10px; /* Espaciado interno del encabezado */
    display: flex; /* Mostrar elementos en línea */
    justify-content: space-between; /* Alinear elementos en el encabezado */
    height: 3vw;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra debajo del botón */
}

/* Estilos para el logotipo */
.logo {
    display: flex;
    align-items: center;
}

.logo img {
    width: 100px; /* Ancho de la imagen del logotipo */
    height: auto; /* Altura automática para mantener la proporción */
    margin-right: 10px; /* Espaciado a la derecha de la imagen */
    cursor: pointer; /* Cambiar el cursor al hacer clic en la imagen */
}

/* Estilos para los botones */
.botones {
    display: flex; /* Mostrar botones en línea */
    align-items: center; /* Alinear botones verticalmente al centro */
    
}

.boton {
    background-color: #00AFF0; /* Color de fondo del botón */
    color: #ffffff; /* Color del texto del botón */
    border: none;
    padding: 10px 20px; /* Espaciado interno del botón */
    margin-left: 10px; /* Espaciado entre botones */
    cursor: pointer;
    font-family: 'Fira Code', monospace;
}

.boton + .boton {
    border-left: 1px solid #fff; /* Línea entre botones */
}

.link + .link {
    border-left: 1px solid #fff; /* Línea entre botones */
}


.formulario {
    width: 50vh;
    margin: 4vh;
    border: 0.5vh solid #00000000;
    padding: 2vh;
    text-align: center;
    padding-bottom: 2vh;
    border-radius: 2vh;
    background-color: rgba(255, 255, 255, 0.66);
    font-family: 'Raleway', sans-serif;
    
}



img{
    width: 100%;
    height: auto;
    border-radius: 1.5vh;
}

body{
    background-image: url(multi/sisas.jpg);
    background-repeat: no-repeat; 
    background-size: cover; 
    background-position: center center; 
    background-color: #00aff0;
    height: 950px;
}

.formulario input{
    color: #000000;
    background-color: rgba(251, 251, 251, 0.848);
    border-radius: 1.5vh;
    padding: 1vh;
    width: 45vh;
    border-color: rgba(0, 0, 0, 0);
    text-align: center;
}

.enviar{
    color: #000000;
}

input[type="submit"]{
    max-width: 10vw;
    background-color:#00b0f09d;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
}


input[type="submit"]:hover {
    background-color: #d4a53d; 
    color: #fff7f7; 
    border: 2px solid #d4a53d; /* Cambia el borde en el hover */
    cursor: pointer; /* Cambia el cursor en el hover (opcional) */
    max-width: 10vw;
    
}
</style>