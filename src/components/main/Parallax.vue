<template>
  <v-parallax :src="require('@/assets/maur-templom.jpg')" height="600">
    <v-layout align-center justify-center column>
      <p id="welcometext">Welcome</p>
    </v-layout>
  </v-parallax>
</template>

<style>
  #welcometext {
    font-variant: small-caps;
    color: white;
    font-size: 50px;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    border: solid;
    border-width: 3px;
    padding: 15px;
    border-radius: 15px;

  }
</style>
