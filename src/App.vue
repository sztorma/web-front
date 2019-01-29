<template>
<v-app>
  <div id="app">
      <v-toolbar color="primary" class="white--text">
          <v-toolbar-title>TormaSzabolcs</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
              <v-btn class="white--text" flat to="/">Main</v-btn>
              <v-btn class="white--text" flat to="/projects">Projects</v-btn>
          </v-toolbar-items>
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
  name: 'App'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
  }



</style>
