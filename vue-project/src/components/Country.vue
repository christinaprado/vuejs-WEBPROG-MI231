<template>
    <div class="container"> 
    <ul> 
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li> 
    </ul> 
    </div>
</template>

<script setup> 
 import { ref, onMounted } from 'vue' 
 import { supabase } from '../lib/supabaseClient' 

 const countries = ref([]) 

 async function getCountries() { 
   const { data } = await supabase.from('countries').select() 
   countries.value = data 
 } 

 onMounted(() => { 
   getCountries() 
 }) 
</script> 