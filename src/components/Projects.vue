<template>
  <div id="projectcards">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap align-center>
          <v-flex xs12 md5 offset-md2>
        <v-card class="my-3" hover>
          <v-card-media
            class="white--text"
            height="170px"
            src="http://understandinggraphics.com/wp-content/uploads/2010/08/guidelines-for-designing-tables.png"
          >
            <v-container fill-height fluid>
              <v-layout>
                <v-flex xs12 align-end d-flex>
                  <span class="headline">Adatbázis kezelő</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-text>CRUD parancsok végrehajtása böngészőn keresztül</v-card-text>
          <v-card-actions>
            <v-btn icon class="red--text">
              <v-icon medium>fa-reddit</v-icon>
            </v-btn>
            <v-btn icon class="light-blue--text">
              <v-icon medium>fa-twitter</v-icon>
            </v-btn>
            <v-btn icon class="blue--text text--darken-4">
              <v-icon medium>fa-facebook</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat class="blue--text">Read More</v-btn>
          </v-card-actions>
        </v-card>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>
