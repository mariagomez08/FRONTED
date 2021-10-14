<template>
  <div>
    <FormularioRegistro/>
  </div>
</template>

<script>
import FormularioRegistro from "../components/FormularioRegistro.vue";
export default {
  name: "Registro",

  data: () => ({

  }),
  components: {
    FormularioRegistro,
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.formulario {
  border: rgb(149, 235, 185) 5px inset;
  justify-content: space-around;
  text-align: center;
  height: auto;
}
</style>