<template>
      <v-card class="linkedincard">
        <div class="linkedinhead"> 
          <v-avatar 
          size="250px"
          >
            <v-img
              :src="require('@/assets/li-avatar.jpeg')"
            ></v-img>
          </v-avatar>
          
          <a class="nounderline" href="https://www.linkedin.com/in/szabolcs-torma-624456109" target="_blank"><h3>Torma Szabolcs</h3></a>
          <h4>Budapest Business School - College of Finance and Accountancy</h4>
        </div>
        <v-card-title primary-title>
          <v-layout column>
            <h3>Junior Software Developer</h3>
            <h4>Freelancer</h4>
          </v-layout>
        </v-card-title>

        <v-card-actions class="linkedinfooter">
          
          <a href="https://www.linkedin.com/in/szabolcs-torma-624456109" target="_blank">
            <img
            src="https://static.licdn.com/scds/common/u/images/logos/linkedin/logo_linkedin_93x21_v2.png" height="36px" contain/>
          </a>
          <a href="https://github.com/sztorma" target="_blank">
            <img class="pic"
            :src="require('@/assets/GitHub_Logo.png')"
            height="36px" contain/>
          </a>

          
        </v-card-actions>
      </v-card>
</template>

<style scoped>


.linkedincard {
  flex-direction: column;
  display: flex;
  justify-content: space-between; 
}

.linkedinhead{
    background: linear-gradient(180deg, #0077B5 25%, white 50%);  
    border-bottom-style: inset;
}

.linkedinfooter{
  border-top-style: outset;  
  justify-content: space-around;
}

.nounderline {
  text-decoration:none !important;
}

</style>
