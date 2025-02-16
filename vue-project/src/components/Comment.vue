<template>
    <h1>Comments</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id">{{ comment.name }} {{ comment.comment }}</li>
    </ul>
  </template>
  
  <script></script>
  
  <style>
    #app > div {
      border: dashed black 1px;
      display: inline-block;
      margin: 10px;
      padding: 10px;
      background-color: #800020;
    }
  </style>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'

const comments = ref([])

async function getComments() {
  const { data, error } = await supabase.from('comments').select()
  
  if (error) {
    console.error("Error fetching comments:", error) // Logs any errors
  } else {
    console.log("Fetched comments:", data) // Logs retrieved comments
  }

  comments.value = data || [] // Ensures `comments.value` is never undefined
}

onMounted(() => {
  getComments()
})

</script>


<style>
  #app > div {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightyellow;
  }
</style>