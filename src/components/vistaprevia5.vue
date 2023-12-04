<template>
    <body class="vistaprevia5">
    <div class="columna izquierda">
        <div class="superior">
            <h2>Pintura realista</h2>
            <img src="src/assets/pintura.jpeg" alt="Imagen">
        </div>
        <div class="inferior">
            <p>Lo tuyo es pintar, quieres potenciar tu sentido hacia la vida y mundano dirigir tus pensamientos del dia a dia,
                comienza gratis este curso que te ayudaran a tener los enfoques claros a la hora de realizar una obra realista,
                conoce trazado, sombreado, perspectiva, iluminacion, anatomia orientada al dibujo y mas, comienza ahora.
            </p>
        </div>
    </div>

    <div class="columna derecha">
        <h2>Unidad 1</h2>
        <ul>
            <li>Trazado y bocetos</li>
            <li>Dibujo estilizado</li>
            <li>Enfoque de direccion de arte</li>
        </ul>

        <h2>Unidad 2</h2>
        <ul>
            <li></li>
            <li>Antatomia en dibujo</li>
            <li>Pintado, bases y tecnicas</li>
            <li>Pintado y perspectiva de colores</li>
        </ul>

        <h2>Unidad 3</h2>
        <ul>
            <li></li>
            <li>Sombreado, tecnicas</li>
            <li>Dibujo practica</li>
            <li>Captura de la realidad</li>
        </ul>

        <!-- Agrega más listas según sea necesario -->

        <a href="https://www.youtube.com/watch?v=Voh3HEpCjP0&list=PLfiWwW9oKN_eKfIQXjA8qHsEV1t7iP7z4">
        <button class="iracurso">COMENZAR</button>
        </a>


    </div>
</body>
</template>

<style>
        .vistaprevia5 {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-image: url('src/assets/pintura.jpeg');
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