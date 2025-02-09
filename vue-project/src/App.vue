<template>
  <div class="container">
    <h2>List of Countries</h2>
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
  const { data, error } = await supabase.from('countries').select()
  
  if (error) {
    console.error('Error fetching countries:', error.message)
  } else {
    console.log('Fetched countries:', data) // Debugging log
    countries.value = data
  }
}

onMounted(getCountries)
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
}

h2 {
  color: #800020;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #f8d7da;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  text-align: center;
}
</style>
