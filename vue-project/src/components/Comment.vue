<template>
  <div class="container">
    <div class="comments-section">
      <h1>Comments</h1>
      <ul class="comment-list">
        <li v-for="comment in comments" :key="comment.id" class="comment-box">
          <strong>{{ comment.name }}</strong>: {{ comment.comment }}
        </li>
      </ul>
    </div>
    <div class="comment-form">
      <h2>Leave a Comment</h2>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" />

      <label for="comment">Comment:</label>
      <textarea id="comment" v-model="commentText"></textarea>

      <button @click="submitComment">Submit</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'

const comments = ref([])
const name = ref('')
const commentText = ref('')

async function getComments() {
  const { data } = await supabase.from('comments').select()
  comments.value = data
}

async function submitComment() {
  if (name.value && commentText.value) {
    await supabase.from('comments').insert([{ name: name.value, comment: commentText.value }])
    name.value = ''
    commentText.value = ''
    getComments()
  }
}

onMounted(getComments)
</script>

<style>
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  background: linear-gradient(to right, #e29587, #d27188);
}

.comments-section {
  flex: 1;
}

.comment-list {
  list-style: none;
  padding: 0;
}

.comment-box {
  background: white;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
}

.comment-form {
  flex: 1;
  max-width: 300px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

input, textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background: #d27188;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
