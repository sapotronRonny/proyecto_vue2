<template>
    <div class="cuadro" ALIGN="CENTER">
        <section class="formulario" ALIGN="CENTER">
            <h2 style="color: #00aff0; text-shadow: 1px 1px 2px black;">SIGN IN</h2><br>
            <form id="miformulario" @submit.prevent="usuariologin" style="font-family: 'Raleway', sans-serif;" method="post" onsubmit="return validarFormulario()">
                <label for="correo">Correo:</label><br>
                <input type="email" id="correo" v-model="usuario.correo" required>
                <br><br>
    
                <label for="contrasena">Contraseña:</label><br>
                <input type="password" id="contrasena" v-model="usuario.contrasena" required>
                <br><br>
                
                <!-- <RouterLink class="link" :to="{ name:'miscursos' }" > -->
                <input type="submit">
                <!-- </RouterLink> -->
            </form>
        </section>
    </div>
</template>


<script setup>

import {ref} from 'vue';

const usuario = ref({
  correo: '',
  contrasena: '',
});

const usuariosGuardados = localStorage.getItem('usuarios');

console.log(usuariosGuardados)

const usuariologin = () => {
  // Validar el formulario antes de comparar con datos almacenados
  if (!usuario.value.correo || !usuario.value.contrasena) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  // Buscar el usuario en los datos almacenados
  const usuarioEncontrado = usuariosGuardados.find(
    (u) => u.correo === usuario.value.correo && u.contrasena === usuario.value.contrasena
  );

  if (usuarioEncontrado) {
    alert('Inicio de sesión exitoso');
    // Puedes redirigir o realizar otras acciones después de un inicio de sesión exitoso
  } else {
    alert('Correo o contraseña incorrectos');
  }
};
</script>


<style>



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