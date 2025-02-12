<template>
  <h1>Food</h1>  
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
  <br>
  <food-item/>
  <food-item2/>
  <food-item3/>
  <personal-profile/> <br>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient.js'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import FoodItem3 from './components/FoodItem3.vue'
import PersonalProfile from './components/PersonalProfile.vue'

const countries = ref([]) // Use 'countries' for the ref variable (plural)

async function getCountries() {
  const { data } = await supabase.from('country').select() // 'country' is the table name
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<style>
</style>