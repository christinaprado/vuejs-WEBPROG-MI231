<template>
    <h1>Food</h1>  
    <ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from './lib/supabaseClient.js'
  
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