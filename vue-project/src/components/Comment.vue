<template>
  <div class="container">
    <div class="food-section">
      <h1>Food</h1>
      <div class="countries">
        <p v-for="country in countries" :key="country.id">{{ country.name }}</p>
      </div>
      <div class="fruits">
        <div class="fruit">
          <h2>Apples</h2>
          <p>I like apples</p>
        </div>
        <div class="fruit">
          <h2>Blueberries</h2>
          <p>I like blueberries</p>
        </div>
        <div class="fruit">
          <h2>Grapes</h2>
          <p>I like grapes</p>
        </div>
      </div>
    </div>

    <div class="comment-section">
      <div class="comment-box">
        <h2>Leave a Comment</h2>
        <input type="text" placeholder="Your name" v-model="name" required maxlength="50" />
        <textarea placeholder="Your comment" v-model="comment" required maxlength="500"></textarea>
        <button @click="submitComment" :disabled="submitting">
          {{ submitting ? "Submitting..." : "Submit" }}
        </button>
        <div v-if="formError" class="error">{{ formError }}</div>
      </div>

      <h2>Comments</h2>
      <div v-if="loading">Loading...</div>
      <div v-else-if="commentsError">{{ commentsError }}</div>
      <div v-else>
        <ul>  <li v-for="c in comments" :key="c.id" class="comment">
            <div class="author">{{ c.name }}</div>
            <div class="text">{{ c.comment }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/lib/supabaseClient.js';

const comments = ref([]);
const name = ref('');
const comment = ref('');
const loading = ref(true);
const commentsError = ref(null);
const formError = ref(null);
const submitting = ref(false);

async function getComments() {
  loading.value = true;
  commentsError.value = null;
  try {
    const { data, error } = await supabase.from('comments').select();
    if (error) {
      commentsError.value = error.message;
      console.error("Error:", error);
    } else {
      comments.value = data || [];
    }
  } finally {
    loading.value = false;
  }
}

async function submitComment() {
  formError.value = null;
  if (!name.value.trim() || !comment.value.trim()) {
    formError.value = "Please fill both fields.";
    return;
  }
  submitting.value = true;
  try {
    const { error } = await supabase.from('comments').insert([{ name: name.value.trim(), comment: comment.value.trim() }]);
    if (error) {
      console.error("Error submitting:", error);
      formError.value = "Error submitting. Try again.";
    } else {
      name.value = '';
      comment.value = '';
      await getComments();
    }
  } finally {
    submitting.value = false;
  }
}

onMounted(() => {
  getComments();
});

const countries = ref([
  { id: 1, name: "Canada" },
  { id: 2, name: "United States" },
  { id: 3, name: "Mexico" },
]);

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.food-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.countries {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.fruits {
  display: flex;
  gap: 20px;
}

.fruit {
  text-align: center;
}

.comment-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
}

.comment-box {
  background-color: lightcoral; /* Example color */
  padding: 20px;
  border-radius: 10px;
  width: 100%; /* Occupy full width of container */
  margin-bottom: 20px;
  box-sizing: border-box; /* Include padding and border in width */
}

.comment-box input,
.comment-box textarea {
  width: calc(100% - 10px); /* Adjust width for padding */
  margin: 5px 0;
  padding: 5px;
  box-sizing: border-box; /* Include padding and border in width */
}

.comment-box button {
  width: 100%;
  padding: 5px;
  background-color: white;
  color: #800020;
  border: none;
  cursor: pointer;
  box-sizing: border-box; /* Include padding and border in width */
}

.comment {
  border: 1px dashed black;
  padding: 10px;
  margin-bottom: 10px;
  background-color: lightcoral;
  width: 100%; /* Occupy full width of container */
  box-sizing: border-box; /* Include padding and border in width */
}

.author {
  font-weight: bold;
  margin-bottom: 5px;
}

.error {
  color: red;
  margin-top: 5px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%; /* Occupy full width of container */
}

li {
  margin-bottom: 5px;
}

</style>