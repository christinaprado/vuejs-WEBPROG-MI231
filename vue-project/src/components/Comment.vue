<template>
    <h1>Comments</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id">{{ comment.name }} {{ comment.comment }}</li>
    </ul>
  </template>
  
  <style>
   /* Style for the "Leave a Comment" box */
.comment-box {
  background-color: maroon; /* Solid color background */
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  color: white;
}

/* Heading styles ("Leave a Comment" & "Comment") */
.comment-box h2 {
  font-family: "Brush Script MT", cursive;
  font-size: 24px;
}

/* Label styles ("Name:", "Comment:") */
.comment-box label {
  font-family: Garamond, serif;
  font-size: 18px;
}

/* Input fields */
.comment-box input,
.comment-box textarea {
  width: 100%;
  padding: 5px;
  font-family: Garamond, serif;
  font-size: 16px;
}

/* Submit button */
.comment-box button {
  background-color: #800020; /* Solid maroon color */
  color: white;
  border: none;
  padding: 10px;
  font-family: Garamond, serif;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
}

.comment-box button:hover {
  background-color: #5a0014; /* Darker shade for hover effect */
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
