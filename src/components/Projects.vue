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
              <v-container>
              <v-layout>
              <v-flex>
                <div class="text-xs-center">
                  <v-chip>#vue.js</v-chip>
                </div>
              </v-flex>
              <v-flex>
                <div class="text-xs-center">
                  <v-chip>#axios</v-chip>
                </div>
                <div class="text-xs-center">
                  <v-chip>#vuetify</v-chip>
                </div>
                <div class="text-xs-center">
                  <v-chip>#spring boot</v-chip>
                </div>
                <div class="text-xs-center">
                  <v-chip>#rest api</v-chip>
                </div>
                <div class="text-xs-center">
                  <v-chip>#jpa</v-chip>
                </div>
                <div class="text-xs-center">
                  <v-chip>#one to many</v-chip>
                </div>
                <div class="text-xs-center">
                  <v-chip>#psql</v-chip>
                </div>
                <div class="text-xs-center">
                  <v-chip>#heroku</v-chip>
                </div>
                <v-spacer></v-spacer>
                <v-btn class="black--text" to="/managevisitor">Open</v-btn>
              </v-flex>
              </v-layout>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  
</template>

<script>
export default {};

 
</script>

<style>

</style>
