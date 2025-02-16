<template>
    <h1>Food</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <ul v-else>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '@supabaseClient'
  
  const countries = ref([])
  const loading = ref(true)
  const error = ref(null)
  
  async function getCountries() {
    loading.value = true // Set loading to true before fetching
    error.value = null   // Clear any previous errors
  
    try {
      const { data, error: err } = await supabase.from('country').select()
  
      if (err) {
        error.value = err.message // Set the error message
        console.error("Error fetching countries:", err) // Log the error for debugging
      } else {
        countries.value = data
      }
    } catch (err) {
      error.value = err.message || "An unexpected error occurred."
      console.error("Unexpected error:", err)
    } finally {
      loading.value = false // Set loading to false after fetch, regardless of success/failure
    }
  }
  
  onMounted(() => {
    getCountries()
  })
  </script>
  
  <style>
  </style>