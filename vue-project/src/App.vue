<template>
  <div class="container">
    <ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>

    <div class="content-section">
      <food-item />
      <food-item2 />
      <food-item3 />
    </div>

    <personal-profile />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

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