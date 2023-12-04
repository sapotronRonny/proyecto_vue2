<template>
    <body class="vistaprevia6">
    <div class="columna izquierda">
        <div class="superior">
            <h2>CSS INTERMEDIO</h2>
            <img src="src/assets/CSS3.jpg" alt="Imagen">
        </div>
        <div class="inferior">
            <p>Curso pensado para los artistas digitales, cuando ya llevas tiempo usando estilos css,
                 es momento de pasar al siguiente nivel, si te ves capaz, comienza este curso gratis.
            </p>
        </div>
    </div>

    <div class="columna derecha">
        <h2>Unidad 1</h2>
        <ul>
            <li>Diseño responsivo</li>
            <li>Tipos de medidas</li>
            <li>Buenas practicas de jerarquia</li>
        </ul>

        <h2>Unidad 2</h2>
        <ul>
            <li></li>
            <li>Custom propierties</li>
            <li>Box model en CSS</li>
            <li>buenas practicas de contenedores</li>
        </ul>

        <h2>Unidad 3</h2>
        <ul>
            <li></li>
            <li>Herencia</li>
            <li>Metodologia BEM</li>
            <li>CSS grid</li>
        </ul>

        <!-- Agrega más listas según sea necesario -->

        <a href="https://www.youtube.com/watch?v=OWKXEJN67FE&t=5244s">
        <button class="iracurso">COMENZAR</button>
        </a>

    </div>
</body>
</template>

<style>
        .vistaprevia6 {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-image: url('src/assets/CSS3.jpg');
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