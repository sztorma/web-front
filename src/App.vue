<template>
<v-app>
  <div id="app">
      <v-toolbar color="primary" class="white--text">
          <v-toolbar-title>TormaSzabolcs</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
              <v-btn class="white--text" 
              v-for="item in menu"
              :key="item.icon"
              :to="item.link" 
              flat>{{item.title}}</v-btn>
          </v-toolbar-items>
          <v-menu class="hidden-md-and-up">
            <v-toolbar-side-icon slot="activator" class="white--text"></v-toolbar-side-icon>

            <v-list>
              <v-list-tile v-for="item in menu" :key="item.title" :to="item.link">
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>   
            </v-list>            

          </v-menu>
      </v-toolbar>
    <router-view class="mb-4"/>
      <section>
        <div>
          <v-footer color="primary" class="pa-3 white--text" absolute>
            <v-spacer></v-spacer>
            <div>&copy; {{ new Date().getFullYear() }}</div>
          </v-footer>    
        </div>
  </section>
</div>
</v-app>
</template>

<script>
export default {
  name: 'App',

  data () {
    return {
      menu: [
        { link: '/', title: 'Home' },
        { link: '/projects', title: 'Projects' },
      ]
    }
  },
  

};
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  }



</style>
