<template>
<v-card elevation="18" append-icon="mdi-account" class="mx-auto my-12 px-6 py-8" max-width="50%">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit">
        
        <v-text-field
          v-model="user"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Username"> 
        </v-text-field>

        <v-text-field
          v-model="password"
          type="password"
          :rules="[required]"
          clearable
          label="Password">
        </v-text-field>

        <br>

        <v-btn
         :disabled="!form"
          @click="login"
          block
          color="success"
          size="large"
          variant="elevated">
          Sign In
        </v-btn>
      </v-form>
    </v-card> 
</template>

<script setup>
import {ref,computed} from 'vue';
import {useUserStore} from '@/store/user.js'
import { useRouter, useRoute } from 'vue-router'
//router methods
const router = useRouter()
const route = useRoute()
//state methods
const user=ref('');
const password=ref('');
const form=ref(false);
const required = (v) =>{return !!v || 'Field is required'}
const userStore=useUserStore();
const login=()=>{
  console.log(user.value)
  userStore.login(user.value);
  router.push({ name: 'home'})
}
</script>