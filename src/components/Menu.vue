<template>
        <div class="header-container">
            <div class="site-title">
                <h1>良さ - yosa</h1>
            </div>

            <!-- Inicio menú navegación -->
            <nav class="site-nav">
                <a href="/">Inicio</a>
                <a href="/registro">Registro</a>
                <a href="/buscar">Buscar</a>
            </nav>
                <!-- Fin menú navegación -->

            <div class="logo-container">
                <v-img :src="require('../components/logoabc.png')" class="logo-container__site-logo"/>
            </div>
        </div>
</template>

<script>
export default {
    
}
</script>

<style>
    * {
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    

    .header-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        text-align: center;
    }

    .site-title {
        width: 40%;
        background-color: rgb(171, 235, 198);
        color: #0c0b0b;
        display: flex;
        align-items: center;
        justify-content: center;
        }

    .site-nav {
        width: 40%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        }

    .site-nav>a {
        color: inherit;
        text-decoration: none;
        color: #0c0b0b;
        }

    .site-nav>a:hover {
        text-decoration: underline;
        font-weight: bold;
    }

    .logo-container {
        width: 20%;
    }

    .logo-container__site-logo {
        height: 150px;
    }
</style>