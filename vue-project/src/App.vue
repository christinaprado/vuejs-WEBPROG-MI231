<template>
  <div class="container">
    <ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
    <div class="content">
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
.content {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 1rem;
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