<template>
<v-content>
  <section>
    <v-container fluid>
      <parallax-head></parallax-head>
    </v-container>
  </section>
  <section>
      <v-flex xs12>
      <v-container grid-list-xl>
          <v-layout row wrap align-center>
              <v-flex  xs12 md4>
                <h1>IT skills</h1>
                <chart-skills type="doughnut"></chart-skills>
              </v-flex>
              <v-flex  xs12 md4>
                <h1>Contact</h1>
                <contact/>
              </v-flex>
              <v-flex  xs12 md4>                
                <h1>Contact</h1>
                <about/>
              </v-flex>              
          </v-layout>
      </v-container>
      </v-flex>
      
  </section>
</v-content>
</template>

<script>
import ParallaxComponent from "./Parallax.vue";
import ChartComponent from "./Chart.vue";
import ContactComponent from "./Contact.vue";
import AboutComponent from "./About.vue";
import Chart from "chart.js";


export default {
  components: {
    "parallax-head": ParallaxComponent,
    "chart-skills": ChartComponent,
    "contact": ContactComponent,
    "about": AboutComponent
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
h1 {
  color: green;
}
</style>

