<template>
<ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
  <div class="container"> 
    <food-item />
    <food-item2 />
    <food-item3 />
    <personal-profile />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column; 
  align-items: center; 
}

.container * { 
  color: white; 
}
</style>


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