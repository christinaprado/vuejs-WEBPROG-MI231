<template>
  <h1>Comments</h1>
  <ul>
    <li v-for="comment in comments" :key="comment.id">
      {{ comment.name }}: {{ comment.comment }}
    </li>
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

onMounted(getComments)
</script>

<style>
/* Apply styles to comment boxes */
#app > div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightcoral;
}

/* New styles for horizontal alignment */
#app {
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: center; /* Center horizontally */
}

#app > div { /* Target direct children of #app */
  display: flex;
  flex-direction: column; /* Stack within each section */
  align-items: center; /* Center horizontally within sections */
  margin-bottom: 20px; /* Space between sections */
}

/* Style countries and fruits horizontally within their sections */
.countries {
  display: flex;
  gap: 10px;
}

.fruits {
  display: flex;
  flex-direction: column; /* Stack fruits vertically */
  align-items: center;
}

.fruit {
  margin-bottom: 10px; /* Space between fruits */
  text-align: center; /* Center text in fruits */
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 5px;
}

.comment-box {
  width: 350px; /* Set a width for the comment box */
}

.comment {
    width: 350px; /* Match comment box width */
    text-align: left; /* Align comment text to the left */
}
</style>