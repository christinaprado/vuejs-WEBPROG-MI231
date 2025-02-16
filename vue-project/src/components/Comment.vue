<template>
  <div class="container">
    <h1>Comments</h1>
    <ul v-if="comments.length > 0">
      <li v-for="comment in comments" :key="comment.id">
        <strong>{{ comment.name }}:</strong> {{ comment.comment }}
      </li>
    </ul>
    <p v-else>No comments yet.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'

const comments = ref([])

const getComments = async () => {
  try {
    const { data, error } = await supabase.from('comments').select()
    if (error) throw error
    comments.value = data || []
  } catch (err) {
    console.error('Error fetching comments:', err.message)
  }
}

onMounted(getComments)
</script>

<style>
/* Container */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  margin-top: 20px;
}

/* Comment List */
ul {
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 400px;
}

li {
  background-color: #800020;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>
