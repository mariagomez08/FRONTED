<template>
  <v-app>
    <Menu/>
    <v-main>
      <router-view/>
    </v-main>
    <br /> <!-- salto de linea-->
    <br /> <!-- salto de linea-->
    <br /> <!-- salto de linea-->
    <Footer/>
  </v-app>
</template>

<script>
import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),

  components:{
    Footer,
    Menu,
  }
};
</script>

<style>
  
</style>
