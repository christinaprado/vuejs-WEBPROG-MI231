<template>
    <h1>Comments</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id">{{ comment.name }} {{ comment.comment }}</li>
    </ul>
  </template>
  
  <style>
  <div class="comment-box">
  <h2>Leave a Comment</h2>
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="comment">Comment:</label>
    <textarea id="comment" name="comment" rows="4" required></textarea>
    
    <button type="submit">Submit</button>
  </form>
</div>

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
