<template>
   <v-row dense> 
    <v-col cols="12">
        <v-card
          class="mx-auto my-12 px-6 py-8"
          elevation="13"
          append-icon="mdi-account" 
          max-width="30%"
          color="black"
          theme="dark"
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h3">
                Mi perfil
              </v-card-title>

              <v-spacer> </v-spacer>

              <v-card-text>

              <v-text-field
              v-model="firstName"
              clearable
              hide-details="auto"
              label="First Name"></v-text-field>
              <v-text-field
              v-model="lastName"
              clearable
              hide-details="auto"
              label="Last name"></v-text-field>
              <v-text-field
              v-model="user"
              clearable
              hide-details="auto"
              label="Username"></v-text-field>
                            
              <v-text-field
              v-model="linkedin"
              clearable
              hide-details="auto"
              label="LinkedIn"></v-text-field>
              <v-text-field
              v-model="github"
              clearable
              hide-details="auto"
              label="Github"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-col cols="auto">
                    <v-btn>Actualizar</v-btn>
                </v-col>     
            </v-card-actions>
            </div>

            <v-avatar
              class="ma-3"
              size="125"
              rounded="0">
              <v-avatar size="80" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgEQP3EaRh6uxHfXplRcaPnK4Noi_fgOKU_WweEo_vJSCCI1fi6gplYDyEuQkAqkAK354&usqp=CAU"></v-avatar>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row> 
</template>

<script setup>
import {ref,computed} from 'vue';
import {useUserStore} from '@/store/user.js'
//state methods
const form=ref(false);
const required = (v) =>{return !!v || 'Field is required'}
const userStore=useUserStore();
const user=ref(userStore.getUserName);
const firstName=ref(userStore.getFirstName);
const lastName=ref(userStore.getLastName);
const github=ref(userStore.getGithub);
const linkedin=ref(userStore.getLinkedIn);
const login=()=>{
  console.log(user.value)
  userStore.login(user.value);
  router.push({ name: 'home'})
}
</script>