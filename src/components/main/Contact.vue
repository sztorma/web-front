<template>
              <v-card>
                <v-img
                  :src="require('@/assets/quino-al-465673-unsplash.jpg')"
                  height="500px"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline red--text">lófasz</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon class="blue--text text--darken-4">
                    <v-icon medium>fab fa-facebook</v-icon>
                  </v-btn>
                  <v-btn icon style="color:#0077B5;">
                    <v-icon medium>fab fa-linkedin</v-icon>
                  </v-btn>
                  <v-btn icon class="purple--text">
                    <v-icon medium>fab fa-instagram</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
</template>
