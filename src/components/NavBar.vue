<template>
<v-app>
  <v-container>
        <v-navigation-drawer
        floating
        >
        <v-list
        expand-on-hover
        rail
        > 
          <v-list-item v-for="item in navLinks" :key="item.id" :prepend-icon="item.icon" :title="item.title" :to="item.to"/>
        </v-list>
      </v-navigation-drawer> 
  </v-container>
</v-app>  
</template>

<script setup>
const navLinks=[
    {title:"Home",to:"home",icon:"home-circle"},
    {title:"Conversion de monedas",to:"calc",icon:"hand-coin"},
    {title:"Mi perfil",to:"profile",icon:"card-account-details"},
    {title:"Clima",to:"climate",icon:"cloud-circle"},
]
</script>
