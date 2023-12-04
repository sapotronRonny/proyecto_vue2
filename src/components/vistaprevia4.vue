<template>
    <body class="vistaprevia4">
    <div class="columna izquierda">
        <div class="superior">
            <h2>Edicion con adobe premiere</h2>
            <img src="src/assets/edicion vi.jpg" alt="Imagen">
        </div>
        <div class="inferior">
            <p>Popular, eficaz, completo, todos atributos que describen y presentan bien a este software de edición de video
                que en la actulidad se han ganado un espacio en millones de editores, casas productoras y hogares del mundo.
                Ques esperas para conocerlo.
            </p>
        </div>
    </div>

    <div class="columna derecha">
        <h2>Unidad 1</h2>
        <ul>
            <li>Lo básico de premiere pro</li>
            <li>Estilos</li>
            <li>Titulos y gráficos</li>
        </ul>

        <h2>Unidad 2</h2>
        <ul>
            <li></li>
            <li>Correccion de color y grading</li>
            <li>Efectos de video</li>
            <li>Exportar tus videos</li>
        </ul>

        <h2>Unidad 3</h2>
        <ul>
            <li></li>
            <li>Curvas lumetri</li>
            <li>Correccion de color gráfico</li>
            <li>Presets de audios</li>
        </ul>

        <!-- Agrega más listas según sea necesario -->

        <a href="https://www.youtube.com/watch?v=e--xb9bgMWk&list=PL1EtVnEJg9_POpNqDcfoHhaG2tiCpakhF">
        <button class="iracurso">COMENZAR</button>
        </a>


    </div>
</body>
</template>

<style>
        .vistaprevia4 {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-image: url('src/assets/edicion vi.jpg');
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