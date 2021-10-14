<template>
  <div class="contenedor">
    <!--Formulario-->
    <v-form ref="form" v-model="valid" lazy-validation>
      <br />
      <br />
      <span class="titulos"><b>INFORMACIÓN DE LA MASCOTA</b></span>
      <br />
      <br />
      <!---Fila 1-->
      <v-row>
        <!---Columna 1-->
        <v-col cols="6" sm="6" md="6">
          <!---Nombre mascota-->
          <v-text-field
            v-model="NameMascota"
            :rules="NameMascotaRules"
            label="Nombre Mascota"
            required
            outlined
          ></v-text-field>
        </v-col>
        <!---Columna 2-->
        <v-col cols="6" sm="6" md="6">
          <!---Edad Macota-->
          <v-text-field
            v-model="Edad"
            :counter="2"
            :rules="EdadRules"
            label="Edad Mascota (Años)"
            required
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <!---Fila 2-->
      <v-row>
        <!---Columna 1-->
        <v-col cols="6" sm="6" md="6">
          <!---Especie Mascota-->
          <v-select
            class="SeleccionarEspecie"
            v-model="especie"
            :items="especies"
            :rules="[(v) => !!v || 'Este elemeto es necesario']"
            label="Especie"
            required
            outlined
          ></v-select>
        </v-col>
        <!---Columna 2-->
        <v-col cols="6" sm="6" md="6">
          <!---Cuidad-->
          <v-select
            class="SeleccionarCiudad"
            v-model="ciudad"
            :items="ciudades"
            :rules="[(v) => !!v || 'Este elemeto es necesario']"
            label="Ciudad"
            required
            outlined
          ></v-select>
        </v-col>
        <!---Columna 2-->
        <v-col cols="6" sm="6" md="6">
          <!---Cuidad-->
          <v-select
            class="SeleccionarGenero"
            v-model="genero"
            :items="Genero"
            :rules="[(v) => !!v || 'Este elemeto es necesario']"
            label="Género"
            required
            outlined
          ></v-select>
        </v-col>
      </v-row>
      <!---Fila 3-->
      <v-row>
        <!---Columna 1-->
        <v-col>
          <p>Ingrese una imagen de la mascota</p>
          <!---Archivo imagen-->
          <v-file-input
            type="file"
            v-model="imagen"
            class="Imagen"
            :rules="ImagenRules"
            label="Añadir una imagen"
            outlined
            dense
          ></v-file-input>
        </v-col>
      </v-row>
      <br />
      <br />
      <span class="titulos"><b>INFORMACIÓN DE CONTACTO</b></span>
      <br />
      <br />
      <!---Fila 4-->
      <v-row>
        <!---Columna 1-->
        <v-col cols="6" sm="6" md="6">
          <!---Nombre dueño-->
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Nombre dueño"
            required
            outlined
          ></v-text-field>
        </v-col>
        <!---Columna 2-->
        <v-col cols="6" sm="6" md="6">
          <!--número dueño-->
          <v-text-field
            v-model="Telefono"
            :counter="10"
            :rules="TelefonoRules"
            label="Número de teléfono"
            required
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <!---Fila 2-->
      <v-row>
        <!-- salto de linea-->
        <!---Columna 1-->
        <v-col cols="6" sm="6" md="6">
          <!---correo-->
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            outlined
          ></v-text-field>
        </v-col>
        <!---Columna 2-->
        <v-col cols="6" sm="6" md="6">
          <!---check box-->
          <v-checkbox
            v-model="checkbox"
            :rules="[
              (v) => !!v || 'Debes aceptar nuestras politicas para continuar!',
            ]"
            label="¿Aceptas nuestras politicas?"
            required
          ></v-checkbox>
        </v-col>
      </v-row>
      <br />
      <br />
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validar">Validar</v-btn>
      <v-btn color="error" class="mr-4" @click="limpiar">Limpiar formulario</v-btn>
      <v-btn color="warning" class="mr-4" @click="revalidar">Validar nuevamente</v-btn>
      <v-btn color="primary" class="mr-4" @click="Guardar">Guardar</v-btn>
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
    name: "",
    nameRules: [(v) => !!v || "Este elemento es necesario"],
    NameMascota: "",
    NameMascotaRules: [(v) => !!v || "Este elemento es necesario"],
    Edad: "",
    EdadRules: [
      (v) => !!v || "Este elemento es necesario",
      (v) => v.lenght <= 2 || "la edad no debe tener más 2 elementos",
    ],
    Telefono: "",
    TelefonoRules: [
      (v) => !!v || "Este elemento es necesario",
      (v) => v.lenght <= 10 || "El teléfono no debe tener más 10 elementos",
    ],
    imagen: "",
    ImagenRules: [(v) => !!v || "Este elemento es necesario"],

    email: "",
    emailRules: [
      (v) => !!v || "E-mail es necesario",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
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
    ciudad: "",
    genero: "",
    especie: "",
  }),

  methods: {
    validar() {
      this.$refs.form.validate();
    },
    limpiar() {
      this.$refs.form.reset();
    },
    revalidar() {
      this.$refs.form.resetValidation();
    },
    Guardar() {
      const formData = new FormData(); //tipo de dato para guadar información y archivos juntos.
      formData.append("nombredueño", this.name);
      formData.append("nombremascota", this.NameMascota);
      formData.append("edadmascota", this.Edad);
      formData.append("telefonodueño", this.Telefono);
      formData.append("listaciudad", this.ciudad);
      formData.append("genero", this.genero);
      formData.append("especie", this.especie);
      formData.append("correodueño", this.email);
      formData.append("foto", this.imagen);
      axios
        .post("http://localhost:3000/api/nueva-registro", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((result) => {
          this.result = result.data;
          console.log(result.data);
        });
    },
  },
};
</script>

<style>
.contenedor {
  border: rgb(149, 235, 185) 5px inset;
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