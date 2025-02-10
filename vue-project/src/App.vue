<template>
  <h1>Food</h1>
  <ul>
      <li v-for="country in country" :key="country.id">{{ country.name }}</li>
    </ul>
   <br>
  <food-item/> 
  <food-item2/> 
  <food-item3/> 
  <personal-profile/> <br>
  
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from './lib/supabaseClient'

  const Country = ref([])

  async function getCountry() {
    const { data } = await supabase.from('country').select()
    country.value = data
  }

  onMounted(() => {
    getCountry()
  })
  </script>




<style>
</style> 