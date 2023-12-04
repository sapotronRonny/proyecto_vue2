<template>
    <body class="vistaprevia2">
    <div class="columna izquierda">
        <div class="superior">
            <h2>JAVASCRIPT SCENTIALS</h2>
            <img src="src/assets/JavaScript_logo.png" alt="Imagen">
        </div>
        <div class="inferior">
            <p>El lenguaje orientado a programacion front end web esta aqui, conoce todas sus virtudes
                , sintaxis y mas. Dale lujo de interactividad y detalle a tus proyectos web, empieza ya.
            </p>
        </div>
    </div>

    <div class="columna derecha">
        <h2>Unidad 1</h2>
        <ul>
            <li>Que es javascript</li>
            <li>Sintaxis básica de salida</li>
            <li>Tipos de datos en JS</li>
        </ul>

        <h2>Unidad 2</h2>
        <ul>
            <li></li>
            <li>Estructura booleanas</li>
            <li>Funciones puras</li>
            <li>First class objects</li>
        </ul>

        <h2>Unidad 3</h2>
        <ul>
            <li></li>
            <li>Arreglos</li>
            <li>Objetos y json</li>
            <li>Prototipos</li>
        </ul>

        <!-- Agrega más listas según sea necesario -->

        <a href="https://www.youtube.com/watch?v=z95mZVUcJ-E&t=3007s">
        <button class="iracurso">COMENZAR</button>
        </a>
        
    </div>
</body>
</template>

<style>
        .vistaprevia2 {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-image: url('src/assets/JavaScript_logo.png');
        }

        .columna {
            width: 50vh;
            height: 100vh;
            overflow: auto;
            border: 1px solid #ccc;
        }

        .izquierda {
            background-color: #f2f2f2;
            padding: 20px;
            box-sizing: border-box;
        }

        .derecha {
            padding: 20px;
            box-sizing: border-box;
            background-color: rgba(255, 255, 255, 0.75);
        }

        h2 {
            color: #333;
        }

        

        p {
            margin-top: 10px;
        }

        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        li {
            margin-bottom: 8px;
        }
    </style>