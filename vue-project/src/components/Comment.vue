
<template>
  <h1>Comments</h1>
  <ul>
    <li v-for="comment in comments" :key="comment.id">{{ comment.name }} {{ comment.comment }}</li>
  </ul>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'

const comments = ref([])

async function getComments() {
const { data } = await supabase.from('comments').select()
comments.value = data
}

onMounted(() => {
getComments()
})

</script>


<style>
 div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightyellow;
}
</style>
