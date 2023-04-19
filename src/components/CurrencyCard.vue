<template>
   <v-row dense> 
    <v-col cols="12">
        <v-card
          class="mx-auto my-12 px-6 py-8"
          elevation="13"
          append-icon="mdi-coins" 
          max-width="60%"
        >
        <v-row>
        <v-col class="mx-3">
           <v-text-field
            v-model="amount"
            hide-details
            single-line
            type="number"
            @change="negative(amount)"
            /> 
        </v-col>
        </v-row>
       
              <v-row class="">
                <v-col align="start">
                <v-select
                        v-model="fromConv"
                        :hint="`${fromConv.state}, ${fromConv.abbr}`"
                        :items="items"
                        :rules=[required]
                        item-title="state"
                        item-value="abbr"
                        label="Select"
                        persistent-hint
                        return-object
                        single-line></v-select>
                </v-col>
                <v-spacer/>
                    <v-icon
                    size="large"
                    color="green-darken-2"
                    icon="mdi-arrow-right"
                    ></v-icon>
                <v-spacer/>
                <v-col align="end">     
                     <v-select
                        v-model="toConv"
                        :hint="`${toConv.state}, ${toConv.abbr}`"
                        :items="items"
                        :rules=[required]
                        item-title="state"
                        item-value="abbr"
                        label="Select"
                        persistent-hint
                        return-object
                        single-line></v-select>
                </v-col>
              </v-row>
            <v-card-actions >
                <v-col cols="auto">
                    <v-btn>Convertir</v-btn>
                </v-col>     
            </v-card-actions>
        </v-card>
      </v-col>
    </v-row> 
</template>
<script setup>
import {ref,computed,onMounted,reactive} from 'vue';
//state methods
const form=ref(false);
const amount=ref(1);
const required = (v) =>{return !!v || 'Field is required'}
const negative = (v) =>{if (v<1) amount.value=1}
const fromConv=ref({
    state:'Mexican peso',
    abbr:'MXN'
})
const toConv=ref({
    state:'US Dollar',
    abbr:'USD'
})
const items=ref([{ state: 'Mexican Peso', abbr: 'MXN' },
          { state: 'US Dollar', abbr: 'USD' },
          { state: 'Euro', abbr: 'EUR' }])
onMounted(()=>{
    
})
</script>