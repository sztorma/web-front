<template>
  
    <v-container grid-list-xl>
      <v-layout justify-center wrap>

        <v-flex md8>
          <v-card class="my-3">
            <v-img
              class="white--text"
              height="300px"
              :src="require('@/assets/fancycrave-277756-unsplash.jpg')"
            >
            </v-img>
            <v-card-title primary-title>
              <v-layout column>
                <span class="headline">Database Management</span>
              </v-layout>
            </v-card-title>            
            <v-card-text class="grey--text text-xs-left">Feel free to use CRUD commands in a webbase GUI.</v-card-text>
            <v-card-actions>
                <div class="text-xs-center">
                  <v-chip v-for="tag in hashtags" v-bind:key="tag" >{{hashsign}}{{tag}}</v-chip>
                </div>
                <v-spacer></v-spacer>
                <v-btn class="black--text" to="/managevisitor">Open</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  
</template>

<script>
export default {

data() {
  return {
    hashsign: '#',
    
    hashtags:[
      'vue.js',
      'axios',
      'vuetify',
      'spring boot',
      'rest api',
      'jpa',
      'one to many',
      'psql',
      'heroku'
    ]
  }
}
};
 
</script>

<style>

</style>
