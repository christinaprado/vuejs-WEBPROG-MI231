<template>
    <div class="container">
      <h2>Food</h2>
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
    const { data, error } = await supabase.from('countries').select()
    
    if (error) {
      console.error('Error fetching countries:', error.message)
    } else {
      console.log('Fetched countries:', data) // Debugging
      countries.value = data
    }
  }
  
  onMounted(getCountries)
  </script>
  
  <style>
  .container {
    text-align: left;
    padding: 20px;
    max-width: 400px; /* Ensures list doesn't stretch too wide */
  }
  
  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: white;
  }
  
  .country-list {
    list-style-type: disc; /* Ensures proper bullet points */
    padding-left: 20px; /* Aligns bullets properly */
    font-size: 1.5rem; /* Makes list text proportional to heading */
    font-family: Arial, sans-serif; /* Matches a clean font */
  }
  
  .country-list li {
    margin: 5px 0; /* Adds spacing between items */
  }
  </style>
  