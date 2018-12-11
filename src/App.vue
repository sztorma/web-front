<template>
  <div id="app">
      <v-toolbar>
          <v-toolbar-title>TormaSzabolcs</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
              <v-btn flat to="/">Főoldal</v-btn>
              <v-btn flat to="/projects">Projects</v-btn>
              <v-btn flat to="/contact">Contact</v-btn>
          </v-toolbar-items>
      </v-toolbar>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
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
