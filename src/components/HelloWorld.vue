<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
        Bienvenido a la plantilla base de vue, {{user}}!
        </h1>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-5">
          Ejemplos de vue core
        </h2>

        <v-row justify="center">
         Uso de componentes: App.vue; HomeView.vue;
       </v-row>
        <v-row justify="center">
         Uso de props: HomeView.vue
        </v-row>
        <v-row justify="center">
         Uso de composition API: NavBar.vue; Profile.vue
        </v-row>        
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-5">
          Ejemplos de vue store
        </h2>

        <v-row justify="center">
          Creación de una store: user.js
        </v-row>
        <v-row justify="center">
          Creación de una store: user.js
        </v-row>
        <v-row justify="center">
          Uso de una store: router/index.js,Profile.vue 
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-5">
          Ejemplo de router
        </h2>

        <v-row justify="center">
          Creación de un router:router/index.js
        </v-row> 
        <v-row justify="center">
          Uso de router: NavBar.js
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    user: String
  },
  setup(props) {
  }
}
</script>
