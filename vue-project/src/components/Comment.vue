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
  display: inline-block; /* Key change: Make them inline */
  margin: 10px;
  padding: 10px;
  background-color: lightcoral;
}

/* New styles for horizontal alignment */
#app {  /* Target the main app container */
  display: flex;             /* Enable flexbox */
  flex-wrap: wrap;         /* Allow wrapping to new lines if necessary */
  justify-content: center; /* Center horizontally */
  align-items: flex-start;  /* Align items to the top of the container */
}

ul {
  list-style-type: none; /* Remove bullet points */
  padding: 0;           /* Remove default padding */
  margin: 0;            /* Remove default margins */
}

li {
  margin-bottom: 5px;   /* Add some spacing between list items */
}
</style>