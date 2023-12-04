<template>
    <div class="generalcursos">
        
        <div class="cuadro_blanco">
            <section class="encabezado">
                <h1 class="cuenta" style="font-family: 'Raleway', sans-serif; margin-bottom: -15px;color: #00aff0;">
                    MI CUENTA
                </h1><br>
                <h1 style="font-size: 15px;">
                    <h3 style="display: inline;color: #0a8bcb;">Nombre: </h3> Ronny Fabian Choez Lopez<br><br>
                </h1>
            </section>
            <section class="cualidades">
                <br>
                <h2 style="font-size: 1VW; color: rgb(255, 255, 255);text-align: center; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    MIS CURSOS
                </h2>
                <ul>
                    <div class="contenedorCURSOS">
                        <div class="bloque">
                            <img src="src/assets/elementos-de-lenguaje-de-programacion-java-portada.jpg" alt="Imagen 1">
                            <p>Logica de programacion</p>
                        </div>
                        <div class="bloque">
                            <img src="src/assets/JavaScript_logo.png" alt="Imagen 2">
                            <p>JavaScript scentials</p>
                        </div>
                        <div class="bloque">
                            <img src="src/assets/android.jpg" alt="Imagen 3">
                            <p>Desarrollo Android</p>
                        </div>
                        <div class="bloque">
                            <RouterLink class="link" :to="{ name:'cursos' }" >
                            <button ID="butoncito" style="padding: 20PX 30PX;border-radius: 50px;border-color: #0a8bcb; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                            MAS CURSOS
                            </button>
                            </RouterLink>
                    </div>
                </div>
                </ul>
            </section>

        </div><br>
        
        <div class="cuadro_verde" ALIGN="LEFT">
            <section class="foto" ALIGN="CENTER">
                <img src="src/assets/21W (3).jpg" style="background-color: #00b0f03c; padding: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            </section>
            <section class="datos"><br>
                <h2>Datos personales</h2>
                
                <ul><br>
                    <li><h4 style="display: inline;">Nacionalidad: </h4>ecuatoriana</li>
                    <li><h4 style="display: inline;">Fecha de nacimiento: </h4>06 de junio del 2003</li>
                    <li><h4 style="display: inline;">Cedula de ciudadania: </h4>135057995-7</li>
                    <li><h4 style="display: inline;">Edad: </h4>20 años</li>
                    <li><h4 style="display: inline;">Carrera: </h4>Tecnologías de la información</li>
                    <li><h4 style="display: inline;">Telefono: </h4>0993645818</li>
                    <li><h4 style="display: inline;">E-mail: </h4>ronnychoez23@gmail.com</li>
                    <li><h4 style="display: inline;">Domicilio: </h4>cdla. Los bosques de Urbirrios <br>en Calle 308 Av 239.</li>
                </ul>

                <h1>actualizar datos</h1>
                <form>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>

        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" required>

        <label for="contrasena">Contraseña:</label>
        <input type="password" id="contrasena" name="contrasena" required>

        <label for="cedula">Cédula:</label>
        <input type="text" id="cedula" name="cedula" required>

        <label for="telefono">Teléfono:</label>
        <input type="text" id="telefono" name="telefono" required>

        <label for="correo">Correo electrónico:</label>
        <input type="text" id="correo" name="correo" required>

        <label for="nacimiento">Fecha de nacimiento:</label>
        <input type="date" id="nacimiento" name="nacimiento" required>

        <label for="ciudad">Ciudad:</label>
        <input type="text" id="ciudad" name="ciudad" required>

        <label for="direccion">Dirección:</label>
        <input type="text" id="direccion" name="direccion" required>

        <button type="submit">Actualizar</button>
        </form>
            </section>
            <section class="perfil">
                
            </section>

            <section class="cualidades">
                
            </section>
            
            <section>
                
            </section>
        </div>
    </div>
</template>

<style>
.generalcursos {
    width: 210mm; /* Ancho de una hoja A4 */
    height: auto; /* Alto de una hoja A4 */
    margin: 20px auto; /* Margen exterior para centrar la página en la pantalla */
    border: 0px solid #000; /* Borde de 1 píxel para simular un borde de página */
    padding: 2.54cm; /* Relleno interior para simular el espacio de Word */
    background-color: white; /* Color de fondo blanco */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Sombra para simular profundidad */
     /* Fuente predeterminada */
    display: flex;
    column-gap: 16px;
    font-family: 'Lato', sans-serif;
}



.generalcursos img{
    width: 6.72cm;
    height: 6.72cm;
}



.cuadro_blanco{
    flex: 1;
    padding: 30px;
}



.cuadro_verde{
    flex: 1;
    background-color: #0a8bcb;
    padding: 46px;
    
}




.cuadro_blanco h2 {
    background-color: #0a8bcb; /* Color de fondo del cuadro */
    width: 8.5cm;
    height: 0.7cm;
    padding: 10px 20px; /* Relleno para el espacio dentro del cuadro */
    border-radius: 6vw; /* Borde redondeado para las esquinas */
    color: #000000; /* Color del texto */
    margin: 0; /* Elimina el margen predeterminado del título */
}

.cuadro_verde h2 {
    border: 2px solid rgb(255, 255, 255); /* Establece un borde sólido de 2 píxeles de grosor en color negro */
    padding: 10px; /* Añade un espacio de 10 píxeles alrededor del contenido del título */
    display: inline-block; /* Hace que los títulos se comporten como elementos en línea para que el borde los rodee completamente */
    border-radius: 6VW;
    width: 8.5cm;
    background-color: transparent; /* Establece el fondo como transparente para que no haya relleno */
}

table {
    border-collapse: collapse; /* Combina los bordes de las celdas adyacentes */
    width: 100%;
}

th, td {
    border: 1px solid #dddddd; /* Establece el borde de 1 píxel sólido */
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #f2f2f2; /* Agrega un fondo de color a las filas pares */
}

.contenedorCURSOS {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.contenedorCURSOS .bloque {
    margin: 20px;
}

.contenedorCURSOS .bloque img {
    width: 200px;
    height: 200px;
    border-radius: 50px;
}

</style>