<template>
      <v-app-bar
        color="yellow-darken-1"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Conversión de monedas</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>
        <v-btn variant="text" icon="mdi-filter"></v-btn>
        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" temporary>
        <v-list>
          <v-list-item v-for="item in navLinks" :key="item.id" :prepend-icon="item.icon" :title="item.title" :to="item.to"/>
        </v-list>
      </v-navigation-drawer>
</template>

<script setup>
import {ref} from "vue"
let drawer=ref(true)
const navLinks=[
    {title:"Home",to:"/",icon:"mdi-home-circle"}, 
    {title:"Mi perfil",to:"profile",icon:"mdi-card-account-details"},
    {title:"Conversion",to:"calc",icon:"mdi-circle-multiple"}, 
    {title:"Clima",to:"climate",icon:"mdi-cloud-circle"}, 
    {title:"About",to:"about",icon:"mdi-information"}, 
    {title:"Cerrar Sesión",to:"logout",icon:"mdi-exit-to-app"},
]
</script>
<style>
#title{
  font-size: 5m;
  font-family: 'Courier New', Courier, monospace;
  color: darkgoldenrod;
  text-align: center;
}
</style>