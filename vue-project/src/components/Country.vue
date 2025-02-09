<template>
    <div class="container">
      <h2 class="food-title">Food</h2> <!-- Added class for better control -->
      <ul class="country-list">
        <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '../lib/supabaseClient'
  
  const countries = ref([])
  
  async function getCountries() {
    const { data, error } = await supabase.from('countries').select('*')
  
    if (error) {
      console.error('Error fetching countries:', error.message)
    } else {
      console.log('Fetched countries:', data) // Debugging
      if (data.length === 0) {
        console.warn('No countries found in Supabase!')
      }
      countries.value = data
    }
  }
  
  onMounted(getCountries)
  </script>
  
  <style>
  .container {
    text-align: left;
    padding: 20px;
    max-width: 400px;
  }
  
  .food-title { /* New class for h2 */
    font-size: 2rem;
    font-weight: bold;
    color: white; /* This makes the text white */
    text-align: center;
  }
  
  .country-list {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 1.5rem;
    font-family: Arial, sans-serif;
  }
  
  .country-list li {
    margin: 5px 0;
  }
  </style>
  