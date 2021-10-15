<template>
  <div>
    <FormularioBusqueda/>
  </div>
</template>

<script>
import FormularioBusqueda from '../components/FormularioBusqueda.vue';

export default {
  name: 'Buscar',

  data: () => ({
    //
  }),
  components:{
    FormularioBusqueda
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>