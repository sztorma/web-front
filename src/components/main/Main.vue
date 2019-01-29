<template>
<v-content>
  <section>
    <v-container fluid>
      <parallax-head></parallax-head>
    </v-container>
  </section>


  <section>
      <v-container fluid grid-list-xl>
          <v-layout row wrap>         
              <v-flex d-flex xs12 md4>
                <chart-skills type="doughnut"></chart-skills>
              </v-flex>
              <v-flex d-flex xs12 md4 >
                <imagecontent/>
              </v-flex>
              <v-flex  d-flex xs12 md4>                 
                <linkedin/>
              </v-flex>
          </v-layout>
      </v-container>      
  </section>

</v-content>
</template>

<script>
import ParallaxComponent from "./Parallax.vue";
import ChartComponent from "./Chart.vue";
import ImageComponent from "./Image.vue";
import AboutComponent from "./About.vue";
import LinkedinComponent from "./Linkedin.vue";
import Chart from "chart.js";


export default {
  components: {
    "parallax-head": ParallaxComponent,
    "chart-skills": ChartComponent,
    "imagecontent": ImageComponent,
    "about": AboutComponent,
    "linkedin": LinkedinComponent
  },
  data: function(){
      return{
        bar: ""
      }
  }
};
</script>


<style>
.inspire img {
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 100%;
}

.pic{
  
  
}

h1 {
  color: green;
}


</style>

