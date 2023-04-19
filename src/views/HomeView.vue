<template>
  <div class="home">
    <HelloWorld :user="userStore.username"/>
  </div>
</template>

<script setup>
import {useUserStore} from '@/store/user.js'
import HelloWorld from '@/components/HelloWorld.vue'
//state methods
const userStore=useUserStore();
</script>
