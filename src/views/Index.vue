<template>
  <div>
    <header>
      <v-carousel hide-delimiters height="auto">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </header>
    <br />
    <v-subheader
      ><h1 style="position: absolute; left: 120px; color: black">
        Servicios
      </h1></v-subheader
    >
  <v-container class="grey lighten-5">
    <v-row>
      <v-col
        
        cols="12"
        sm="4"
        
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-img height="250" src="../Images/adoptame.jpg"></v-img>
              <v-card-title>Adopta una mascota</v-card-title>
              <v-card-text>
                <div>
                  Si quieres brindar hogar a un animal y hacerlo parte de tu
                  nucleo familiar, haz click aquí.
                </div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn
                  href="/buscar"
                  style="
                    background: #198754;
                    color: #fff;
                    align: center;
                    position: center;
                    left: 110px;
                  "
                  >Adoptar</v-btn
                >
              </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-img height="250" src="../Images/adoptado.jpg"></v-img>
              <v-card-title>Coloca en adopción</v-card-title>
              <v-card-text>
                <div>
                 Si buscas dar en adopción a un animal para que encuentre un nuevo hogar, haz click aquí.
                </div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn
                  href="/registro"
                  style="
                    background: #198754;
                    color: #fff;
                    align: center;
                    position: center;
                    left: 70px;
                  "
                  >Dar en adopción</v-btn
                >
              </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
      <br />
    <v-subheader
      ><h1 style="position: absolute; left: 120px; color: black">
        Noticias
      </h1></v-subheader
    >
    <v-container class="grey lighten-5">
    <v-row>
      <v-col
        
        cols="12"
        sm="4"
        
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-img height="245" src="../Images/picaso.jpg"></v-img>
              <v-card-title>Picasso, el perro que iba a ser sacrificado por tener una “imperfección” en su rostro.</v-card-title>
              <v-card-text>
                <div>
                  Picasso es un tierno perro no fue adoptado por una “imperfección” en su rostro e iba a 
                  ser sacrificado; sin embargo, alguien salvó su vida y ahora es toda una estrella en redes 
                  sociales..
                </div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn
                  href="https://www.colombia.com/mascotas/noticias/picasso-perro-iba-a-ser-sacrificado-por-imperfeccion-en-rostro-317279"
                  style="
                    background: #198754;
                    color: #fff;
                    align: center;
                    position: center;
                    left: 80px;
                  "
                  >Ver publicación</v-btn
                >
              </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-img height="252" src="../Images/mundial.jpg"></v-img>
              <v-card-title>¿Por qué se celebra el Día Mundial del Perro el 21 de julio?</v-card-title>
              
              <v-card-text style="height:130px">
                <div>
                 Durante esta fecha en distintos países se organizan jornadas de vacunación, 
                 esterilización, atención medica y adopción, campañas que en gran medida son promovidas 
                 por fundaciones protectoras de animales.
                </div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn
                  href="https://www.semana.com/sostenible/tendencias/articulo/dia-mundial-del-perro-por-que-se-celebra-el-21-de-julio/202142/#:~:text=Esta%20efeméride%20fue%20creada%20en,vida%20de%20los%20seres%20humanos.&text=A%20lo%20largo%20de%20la,acompañantes%20y%20servidores%20del%20hombre."
                  style="
                    background: #198754;
                    color: #fff;
                    align: center;
                    position: center;
                    left: 80px;
                  "
                  >Ver publicación</v-btn
                >
              </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-img height="250" src="../Images/pandemia.jpg"></v-img>
              <v-card-title>En pandemia se logró cifra récord de adopción de perros callejeros en Bogotá</v-card-title>
              <v-card-text style="height:100px">
                <div>
                 A pesar de las miles de mascostas que fueron abandonadas en medio de los confinamientos, 
                 muchos hogares de la ciudad se solidarizaron con los peludos de cuatro patas que habitan en las calles.
                </div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn
                  href="https://www.infobae.com/america/colombia/2021/08/20/en-pandemia-se-logro-cifra-record-de-adopcion-de-perros-callejeros-en-bogota/#:~:text=Según%20datos%20del%20Instituto%20de,se%20considera%20una%20cifra%20récord."
                  style="
                    background: #198754;
                    color: #fff;
                    align: center;
                    position: center;
                    left: 80px;
                  "
                  >Ver publicación</v-btn
                >
              </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
        <v-col
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-img height="250" src="../Images/Futbol.jpeg"></v-img>
              <v-card-title>Rumania promueve la adopción de perros callejeros antes de los partidos de futbol</v-card-title>
              <v-card-text style="height:100px">
                <div>
                 ¡Y ya sucedió! Los primeros en hacerlo fueron los jugadores del Dinamo, quienes se enfrentaron 
                 al FCSB. Y aunque perdieron 0-6, con esta acción ganaron nuestros corazones
                </div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn
                  href="https://animal.mx/deportes/rumania-promueve-adopcion-perros-callejeros-en-partidos-de-futbol/"
                  style="
                    background: #198754;
                    color: #fff;
                    align: center;
                    position: center;
                    left: 80px;
                  "
                  >Ver publicación</v-btn
                >
              </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-img height="250" src="../Images/perla.png"></v-img>
              <v-card-title>Medellín habilita WhatsApp Center para adoptar animales de compañía de La Perla</v-card-title>
              <v-card-text style="height:100px">
                <div>
                 El Centro de Bienestar Animal La Perla, dispuso de una línea de atención de WhatsApp 3117963457 
                 para que las personas hagan sus solicitudes de adopción
                </div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn
                  href="https://www.medellin.gov.co/irj/portal/medellin?NavigationTarget=contenido/10691-Medellin-habilita-WhatsApp-Center-para-adoptar-animales-de-compania-de-La-Perla#:~:text=El%20Centro%20de%20Bienestar%20Animal,y%20gatos%20disponibles%20para%20adopción."
                  style="
                    background: #198754;
                    color: #fff;
                    align: center;
                    position: center;
                    left: 80px;
                  "
                  >Ver publicación</v-btn
                >
              </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-img height="250" src="../Images/rescatistas.png"></v-img>
              <v-card-title>Lo que debes saber sobre los perros rescatistas de la CDMX</v-card-title>
              <v-card-text style="height:131px">
                <div>
                 Los perros de rescate se han ganado la admiración de los mexicanos 
                 por haber salvado vidas después del sismo del 19 de septiembre.
                </div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn
                  href="../../public/Buscar.html"
                  style="
                    background: #198754;
                    color: #fff;
                    align: center;
                    position: center;
                    left: 80px;
                  "
                  >Ver publicación</v-btn
                >
              </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <br>
    <v-subheader
      ><h1 style="position: absolute; left: 120px; color: black">
        Equipo
      </h1></v-subheader
    >
    <v-row>
        <v-col
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
        <v-avatar  color="primary"  size="250">
            <v-img height="250" src="../Images/perfil_stefany.jpg"></v-img>
        </v-avatar>
          
              <v-card-title>Stefany Tirado</v-card-title>
              <v-card-text style="height:131px">
                <div>
                    Entusiasta por el mundo de la programación y el análisis de datos, en su tiempo libre le gusta escuchar RAP.
                </div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn
                  href="https://www.linkedin.com/in/stefany-paola-tirado-de-stefano/"
                  style="
                    background: #198754;
                    color: #fff;
                    align: center;
                    position: center;
                    left: 110px;
                  "
                  >Ver más..</v-btn
                >
              </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
        <v-avatar  color="primary"  size="250">
            <v-img height="250" src="../Images/perfil_maria.jpg"></v-img>
        </v-avatar>
          
              <v-card-title>Maria</v-card-title>
              <v-card-text style="height:131px">
                <div>
                    Soy estudiante de ingeniería de sistemas, me gusta la programación, las redes y los gatos.
                </div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn
                  href=""
                  style="
                    background: #198754;
                    color: #fff;
                    align: center;
                    position: center;
                    left: 110px;
                  "
                  >Ver más..</v-btn
                >
              </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
        <v-avatar  color="primary"  size="250">
            <v-img height="250" src="../Images/perfil_michael.jpeg"></v-img>
        </v-avatar>
          
              <v-card-title>Michael Velasquez</v-card-title>
              <v-card-text style="height:131px">
                <div>
                    Apasionado por el desarrollo web, la Tecnología y las largas rutas en bici.
                </div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn
                  href="https://www.linkedin.com/in/michael-velasquez-30563419a/"
                  style="
                    background: #198754;
                    color: #fff;
                    align: center;
                    position: center;
                    left: 110px;
                  "
                  >Ver más..</v-btn
                >
              </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
        <v-col
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
        <v-avatar  color="primary"  size="250">
            <v-img height="250" src="../Images/KevinJimenez.jpeg"></v-img>
        </v-avatar>
          
              <v-card-title>Kevin Alexis Jimenez</v-card-title>
              <v-card-text style="height:131px">
                <div>
                    Soy una persona responsable, honesta y dinámica con deseos de superación; 
                    aprendo con rapidez y me intereso por cumplir de manera adecuada las distintas actividades que realizo.
                </div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn
                  href="https://www.linkedin.com/in/kevin-jimenez-633632205"
                  style="
                    background: #198754;
                    color: #fff;
                    align: center;
                    position: center;
                    left: 110px;
                  "
                  >Ver más..</v-btn
                >
              </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
      <v-card
          class="pa-2"
          outlined
          tile
        >
        <v-avatar  color="primary"  size="250">
            <v-img  height="250" src="../Images/perfil_esteban.jpg"></v-img>
        </v-avatar>
              <v-card-title>Esteban Orduz</v-card-title>
              <v-card-text style="height:131px">
                <div>
                    Soy ingeniero Mecatrónico, me gusta la automatización industrial y programación 
                    de micro controladores, mi pasión es visitar y conocer los nevados de Colombia.
                </div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn 
                  href="https://instagram.com/estebanorduz129?r=nametag"
                  style="
                    background: #198754;
                    color: #fff;
                    align: center;
                    position: center;
                    left: 110px;
                  "
                  >Ver más..</v-btn
                >
              </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
  loading: false,
  data() {
    return {
      items: [
        {
          src: require("../Images/logotitulo.jpeg"),
        },
        {
          src: require("../Images/japon_carrusel.jpg"),
        },
      ],
    };
  },
  // reserve(){
  //     this.loading = true
  //     location.href="../../public/Buscar.html";
  // }
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body {
  max-width: 1400px;
  min-width: 375px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 0;
  margin-bottom: 0;
  color: #070707;
}

/* section {
  margin: 70px;
} */

#subtitulo {
  width: 30%;
  background-color: rgb(171, 235, 198);
  color: #0c0b0b;
  display: flex;
  align-items: center;
  justify-content: center;
}

.seccion-equipo {
  display: flex;
  margin-bottom: 100px;
}

.row {
  justify-content: center;
}

.seccion-noticias,
.header-container {
  background-color: white;
}

.seccion-noticias {
  flex-wrap: wrap;
}

.services-info {
  padding: 20px;
  text-align: center;
}

.news-info {
  width: 50%;
  padding: 20px;
}

.news-header {
  display: flex;
  justify-content: space-around;
}

.news-info__title {
  align-self: center;
}

.services-info__imagen {
  border-radius: 50%;
  margin-right: auto;
  margin-left: auto;
}

</style>