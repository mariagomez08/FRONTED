<template>
  <div class="contenedor">
    <!--Formulario-->
    <v-form ref="form" v-model="valid" lazy-validation>
      <br />
      <br />
      <span class="titulos"><b>Buscar mascotas</b></span>
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
      <!--PRUEBA CARTAsrc="https://cdn.vuetifyjs.com/images/cards/docks.jpg"-->
          <div v-for="datos in datos"  :key="datos.id" id="inspire">
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="white--text align-end"
                height="200px"
                v-bind:src="`${datos.foto}`" 
              >
                <v-card-title >{{datos.nombremascota}}
                </v-card-title>
              </v-img>
              <v-card-actions>
                <v-btn color="orange" text> Ver mas </v-btn>
              </v-card-actions>
            </v-card>
          </div>
      <br />
      <br />
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validar"
        >Validar</v-btn
      >
      <v-btn color="error" class="mr-4" @click="limpiar"
        >Limpiar formulario</v-btn
      >
      <v-btn color="primary" class="mr-4" @click="buscar">Buscar</v-btn>
      <br />
      <br />
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
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
    datos :  []
  }),

  methods: {
    validar() {
      this.$refs.form.validate();
    },
    limpiar() {
      this.$refs.form.reset();
    },
    buscar() {
      this.peticion = this.ciudad + "&" + this.genero + "&" + this.especie;
      axios
        .get("http://localhost:3000/api/busqueda/tipo/" + this.peticion)
        .then((result) => {
          //Dentro de la variable result hay información sobre la petición y para recuperar el resultado tenemos que acceder al campo data.
          this.result = result.data; //guarda el resultado de la API
          this.datos= result.data;
          console.log(result.data)
          console.log(this.datos)
        });
      this.$refs.form.reset();
    },
  },
};
</script>

<style>
.contenedor {
  border: rgb(149, 235, 185) ;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  height: flex;
  margin-right: 200px;
  margin-left: 200px;
}
.titulos {
  font-size: 25px;
  text-align: center;
}
</style>