<template>
  <div class="contenedor">
    <!--Formulario-->
    <v-form ref="form" v-model="valid" lazy-validation>
      <br />
      <br />
      <span class="titulos"><b>BUSCAR MASCOTAS</b></span>
      <br />
      <br />
      <!---Fila 1-->
      <v-row>
        <!---Columna 1-->
        <v-col cols="6" sm="6" md="6">
          <!---Especie-->
          <v-select
            class="SeleccionarEspecie"
            v-model="especie"
            :items="especies"
            :rules="[(v) => !!v || 'Este elemento es necesario']"
            label="Especie"
            required
            outlined
          ></v-select>
        </v-col>
        <!---Columna 2-->
        <v-col cols="6" sm="6" md="6">
          <!---Ciudad-->
          <v-select
            class="SeleccionarCiudad"
            v-model="ciudad"
            :items="ciudades"
            :rules="[(v) => !!v || 'Este elemento es necesario']"
            label="Ciudad"
            required
            outlined
          ></v-select>
        </v-col>
        <!---Columna 3-->
        <v-col cols="6" sm="6" md="6">
          <!---Género-->
          <v-select
            class="SeleccionarGenero"
            v-model="genero"
            :items="Genero"
            :rules="[(v) => !!v || 'Este elemento es necesario']"
            label="Género"
            required
            outlined
          ></v-select>
        </v-col>
      </v-row>
      <br />
      <br />
      <!--<v-btn :disabled="!valid" color="success" class="mr-4" @click="validar" 
        >Validar</v-btn
      >-->
      <v-btn color="error" class="mr-4" @click="limpiar"
        >Limpiar formulario</v-btn
      >
      <v-btn color="primary" class="mr-4" @click="buscar">Buscar</v-btn>
      <br />
      <br />
      <!--PRUEBA CARTA"-->
       <div
        class="Cards_imagen"
        v-for="datos in datos"
        :key="datos.id"
        id="inspire"
      >
    <v-card
      class="mx-auto"
      max-width="500"
    >
      <v-img
            class="white--text align-end"
            height="400px"
            width="500px"
            v-bind:src="`${datos.foto}`"
      ></v-img>
  
  
      <v-card-actions>
         <v-card-title >{{ datos.nombremascota }}</v-card-title>
        <v-spacer></v-spacer>
        <v-btn color="primary" 
          
          @click="show = !show"
        >
        VER MAS
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
           <v-card-text class="titulos"
                ><b>INFORMACIÓN DE LA MASCOTA</b>
                <div>Edad: {{ datos.edadmascota }}</div>
                <div>Ciudad: {{ datos.listaciudad }}</div>
                <div>Genero: {{ datos.genero }}</div>
                <br>
                <b>INFORMACIÓN DE DUEÑO</b>
                <div>Nombre: {{ datos.nombredueño }}</div>
                <div>Numero: {{ datos.telefonodueño }}</div>
                <div>Email: {{ datos.correodueño }}</div>
              </v-card-text>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
</div>


    </v-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    show: false,
    valid: true,
    SeleccionarCiudad: null,
    ciudades: [
      "Armenia",
      "Barrancabermeja",
      "Barranquilla",
      "Bogotá",
      "Bucaramanga",
      "Buga",
      "Cali",
      "Cartagena",
      "Chía",
      "Cúcuta",
      "Duitama",
      "Florencia",
      "Fusagasugá",
      "Girardot",
      "Honda",
      "Ibagué",
      "Ipiales",
      "Jamundí",
      "Leticia",
      "Manizales",
      "Mariquita",
      "Medellín",
      "Monpox",
      "Monteria",
      "Murillo",
      "Neiva",
      "Pamplona",
      "Pasto",
      "Pereira",
      "Popayán",
      "Riohacha",
      "San Andres y Providencia",
      "San Antero",
      "Santa Marta",
      "Santé de Antioquia",
      "Sevilla",
      "Sincelejos",
      "Sogamoso",
      "Tabio",
      "Tocancinpá",
      "Tolú",
      "Tuluá",
      "Tumaco",
      "Tunja",
      "Valledupar",
      "Villavicencio",
      "Yopal",
      "Zipaquirá",
    ],
    SeleccionarEspecie: null,
    especies: ["Perros", "Gatos"],
    SeleccionarGenero: null,
    Genero: ["Hembra", "Macho"],
    checkbox: false,
    especie: "",
    genero: "",
    ciudad: "",
    peticion: "",
    datos: [],
  }),

  methods: {
    limpiar() {
      this.$refs.form.reset();
    },
    buscar() {

      if(this.especie == null)
      {
        alert("Ingrese la especie");
        return;
      }
      else if(this.ciudad == null)
      {
        alert("Ingrese la ciudad");
        return;
      }
      else if(this.genero == null)
      {
        alert("Ingrese el género");
        return;
      }
      this.peticion = this.ciudad + "&" + this.genero + "&" + this.especie;
      axios
        .get("http://localhost:3000/api/busqueda/tipo/" + this.peticion)
        .then((result) => {
          //Dentro de la variable result hay información sobre la petición y para recuperar el resultado tenemos que acceder al campo data.
            //console.log(result);
            for(let i=0; i<result.data.length; i++)
            {
              if(result.data[i].activo == false)
              {
                alert("una de las mascotas ya fue adoptada");
                return;
              }
            }
            this.result = result.data; //guarda el resultado de la API
            this.datos = result.data;
            console.log(result.data);
            console.log(this.datos);
            
        });
        this.$refs.form.reset();
    }
  }
};
</script>

<style>
.contenedor {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  height: flex;
}
.titulos {
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
}
.Cards_imagen {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  margin-top: 10px;
}
</style>