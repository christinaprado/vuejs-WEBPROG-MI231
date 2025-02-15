<template>
  <h1>Food</h1>
  <country/>
  <food-item/>
  <food-item/>
  <food-item/>
  <comment-form/>
  <comment/>
   

</template>

<script setup>
const countries = ref([]) // Use 'countries' for the ref variable (plural)

async function getCountries() {
  const { data } = await supabase.from('country').select() // 'country' is the table name
  countries.value = data
}

onMounted(() => {
  getCountries()
})

const comments = ref([]) // Use 'countries' for the ref variable (plural)

async function getComments() {
  const { data } = await supabase.from('comment').select() // 'country' is the table name
  comments.value = data
}

onMounted(() => {
  getComments()
})


</script>