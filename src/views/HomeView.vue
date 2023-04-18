<template>
  <div class="home">
    <h1>Bienvenido a la plantilla de vue {{userStore.username}}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script setup>
import {ref,computed} from 'vue';
import {useUserStore} from '@/store/user.js'
import HelloWorld from '@/components/HelloWorld.vue'
//state methods
const userStore=useUserStore();
</script>
