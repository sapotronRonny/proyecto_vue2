<template>
    <div class="registro">
      <div class="container">
        <br>
        <form @submit.prevent="validarFormulario">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required pattern="[A-Za-záéíóúüñÁÉÍÓÚÜÑ ]+" v-model="usuario.nombre">

            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required pattern="[A-Za-záéíóúüñÁÉÍÓÚÜÑ ]+" v-model="usuario.apellido">

            <label for="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena" required v-model="usuario.contraseña">

            <label for="cedula">Cédula:</label>
            <input type="text" id="cedula" name="cedula" required pattern="[0-9]{10}" v-model="usuario.cedula">

            <label for="telefono">Teléfono:</label>
            <input type="text" id="telefono" name="telefono" required pattern="09[0-9]{8}" v-model="usuario.telefono">
            
            <label for="correo">Correo electronico:</label>
            <input type="text" id="correo" name="correo" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" v-model="usuario.correo">

            <label for="nacimiento">fecha de nacimiento:</label>
            <input type="date" id="nacimiento" name="nacimiento" required v-model="usuario.nacimiento">

            <label for="ciudad">ciudad:</label>
            <input type="text" id="ciudad" name="ciudad" required v-model="usuario.ciudad">

            <label for="direccion">direccion:</label>
            <input type="text" id="direccion" name="direccion" required v-model="usuario.direccion">

            <label for="estado">Estado civil:</label>
            <select v-model="usuario.estadoCivil" id="estado" name="estado" required onchange="mostrarCamposAdicionales()">
                <option value="defecto">escoja una opcion</option>
                <option value="soltero">Soltero</option>
                <option value="casado">Casado</option>
                <option value="viudo">Viudo</option>
                <option value="divorciado">Divorciado</option>
            </select>
  
          <div v-if="usuario.estadoCivil === 'casado'">
            <!-- Campos adicionales que se mostrarán cuando se seleccione "casado" -->
            <label for="conyuge">Nombre del cónyuge:</label><br>
            <input type="text" id="conyuge" name="conyuge" v-model="usuario.conyuge">
            <br><br>
  
            <label for="hijos">Número de hijos:</label><br>
            <input type="number" id="hijos" name="hijos" v-model="usuario.hijos">
            <br><br>
          </div>
  
          <p v-if="mensajeError" style="color: red;">SELECCIONE UNA OPCION VÁLIDA</p><br>
  
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        mensajeError:"",
        mostrarCamposAdicionales:false,
        usuario:{
        nombre: "",
        apellido: "",
        contraseña: "",
        cedula: "",
        telefono: "",
        correo: "",
        nacimiento:"",
        ciudad: "",
        direccion: "",
        estadoCivil: "defecto",
        mensajeError: false,
        mostrarCamposAdicionales: false,
        conyuge: "",
        hijos: 0
        }
      };
    },

    methods: {

      addusuario() {
      
      // Si hay un mensaje de error, no guardes el usuario en el localStorage
      if (this.mensajeError) {
        return;
      }

      // Obtener la lista actual de usuarios del localStorage (si existe)
      const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

      // Agregar el nuevo usuario a la lista
      usuariosGuardados.push(this.usuario);
      console.log(usuariosGuardados);
      // Guardar la lista actualizada de usuarios en el localStorage
      localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

      // Limpiar el formulario después de guardar el usuario
      this.usuario = {
        nombre: "",
        apellido: "",
        contraseña: "",
        cedula: "",
        telefono: "",
        correo: "",
        nacimiento:"",
        ciudad: "",
        direccion: "",
        estadoCivil: "defecto",
        mensajeError: false,
        mostrarCamposAdicionales: false,
        conyuge: "",
        hijos: 0
      };

      // Puedes agregar un mensaje de éxito si lo deseas
      alert('Usuario registrado con éxito');
    },


      validateCedula(){ 
        const cedula = this.usuario.cedula.trim();

        if (!/^[0-9]{10}$/.test(cedula)) {
            return 'La cédula debe contener exactamente 10 dígitos';
        }

        const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2, 1];
        let suma = 0;

        for (let i = 0; i < 10; i++) {
            let digito = parseInt(cedula[i], 10);
            digito *= coeficientes[i];
            suma += (digito > 9) ? digito - 9 : digito;
        }

        if (suma % 10 !== 0) {
            return 'La cédula no es válida';
        }

        return null; // La cédula es válida
      },


      validarFormulario() {
        // Lógica de validación aquí
        // Puedes acceder a los datos con this.nombre, this.apellido, etc.
  
        // Ejemplo de validación de nombre y apellido (solo letras)
        const nombreRegex = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ ]+$/;
        if (!nombreRegex.test(this.usuario.nombre) || !nombreRegex.test(this.usuario.apellido)) {
          alert("Nombre y apellido solo deben contener letras.");
          return;
        }

        const cedulaError = this.validateCedula();
        console.log(cedulaError)
        if (cedulaError) {
            alert('cedula no valida');
            return;
        }

  
        // Ejemplo de validación de cédula (solo números hasta 10 caracteres)
        //const cedulaRegex = /^[0-9]{9}$/;
        // if (!cedulaRegex.test(this.usuario.cedula)) {
        // alert("Cédula debe contener solo números y tener hasta 10 caracteres.");
        //  return;
        //}
  
        // Otras validaciones...
  
        // Validar que la opción seleccionada no sea "defecto"
        if (this.usuario.estadoCivil === "defecto") {
          this.usuario.mensajeError = true;
          return;
        }
        
        this.addusuario(); 
        // Otras validaciones...
  
        // Si pasa todas las validaciones, puedes enviar el formulario o realizar otras acciones
        //this.$emit('submit', { /* datos del formulario */ });
      },
      
    }

    

  };


  </script>
  
  <style>
  .registro {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        justify-content: center;
        display: flex;
        
    }
    
    .registro .container {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    
    form {
        display: flex;
        flex-direction: column;
    }
    
    label {
        margin-bottom: 8px;
    }
    
    input,
    select {
        padding: 8px;
        margin-bottom: 16px;
    }
    
    button {
        padding: 10px;
        background-color: #4caf50;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    
    button:hover {
        background-color: #45a049;
    }
  </style>