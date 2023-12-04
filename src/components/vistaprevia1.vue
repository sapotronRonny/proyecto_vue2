<template>
    <body class="vistaprevia">
    <div class="columna izquierda">
        <div class="superior">
            <h2>LOGICA DE PROGRAMACIÓN</h2>
            <img src="src/assets/logicadeprogramacion.jpeg" alt="Imagen">
        </div>
        <div class="inferior">
            <p>Adentrate en el mundo del desarrollo conocimiento la logica de programacion de 0 a 100. 
            Mediante este curso que desarrollara tu lógica a la vez que expandes tus conocimientos de computacion. A que estas esperando.
            </p>
        </div>
    </div>

    <div class="columna derecha">
        <h2>Unidad 1</h2>
        <ul>
            <li>Fundamentos de programación</li>
            <li>Tipos de datos</li>
            <li>Algoritmos básicos</li>
        </ul>

        <h2>Unidad 2</h2>
        <ul>
            <li></li>
            <li>Estructura booleanas</li>
            <li>Diagrama de flujo xd</li>
            <li>Algoritmos básicos xd</li>
        </ul>

        <h2>Unidad 3</h2>
        <ul>
            <li></li>
            <li>Estructura de datos</li>
            <li>Estructura de datos estaticos</li>
            <li>Estructura de datos dinamicos</li>
        </ul>

        <!-- Agrega más listas según sea necesario -->

        <a href="https://www.youtube.com/watch?v=_Sp8pwd0LOs&list=PLDLnmbUDWFUtFTqLf_lS99z2gmYU5ouRv">
        <button class="iracurso">COMENZAR</button>
        </a>


    </div>
</body>
</template>

<style>
        .vistaprevia {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-image: url('src/assets/logicadeprogramacion.jpeg');
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