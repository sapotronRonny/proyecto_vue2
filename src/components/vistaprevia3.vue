<template>
    <body class="vistaprevia3">
    <div class="columna izquierda">
        <div class="superior">
            <h2>DESARROLLO ANDROID</h2>
            <img src="src/assets/android.jpg" alt="Imagen">
        </div>
        <div class="inferior">
            <p>El sistema operativo por excelencia del dispositivos móviles, descubre el gran mundo
                del desarrollo movil con android.
            </p>
        </div>
    </div>

    <div class="columna derecha">
        <h2>Unidad 1</h2>
        <ul>
            <li>Android y la importancia en la industria</li>
            <li>Android estudio</li>
            <li>librerias ntivas del sistema</li>
        </ul>

        <h2>Unidad 2</h2>
        <ul>
            <li></li>
            <li>Programacion Kotlin</li>
            <li>Tipos y varaibles en kotlin</li>
            <li>Tipos nulos en kotlin</li>
        </ul>

        <h2>Unidad 3</h2>
        <ul>
            <li></li>
            <li>Componentes estructurales estandar</li>
            <li>Elementos de android wearable</li>
            <li>Estructura de datos dinamicos</li>
        </ul>

        <!-- Agrega más listas según sea necesario -->
        <a href="https://www.youtube.com/watch?v=vJapzH_46a8&list=PL8ie04dqq7_OcBYDpvHrcSFVoggLi3cm_">
        <button class="iracurso">COMENZAR</button>
        </a>
    </div>
</body>
</template>

<style>
        .vistaprevia3 {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-image: url('src/assets/android.jpg');
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