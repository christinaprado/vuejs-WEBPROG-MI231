<template>
  <div class="container">
    <ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>

    <div class="content-section">
      <FoodItem /> 
      <FoodItem2 /> 
      <FoodItem3 /> 
    </div>

    <PersonalProfile /> 
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-section {
  display: flex;
  justify-content: space-between;
  width: 80%; 
  margin-bottom: 20px; 
}

.container * {
  color: white;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

import FoodItem from './components/FoodItem.vue'; 
import FoodItem2 from './components/FoodItem2.vue'; 
import FoodItem3 from './components/FoodItem3.vue'; 
import PersonalProfile from './components/PersonalProfile.vue'; 

const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>