<template>
  <div class="comment-box">
    <h2>Leave a Comment</h2>
    <form @submit.prevent="submitComment">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required />

      <label for="comment">Comment:</label>
      <textarea id="comment" v-model="comment" rows="4" required></textarea>

      <button type="submit">Submit</button>
    </form>
  </div>

  <h1>Comments</h1>
  <ul>
    <li v-for="comment in comments" :key="comment.id">
      <strong>{{ comment.name }}</strong>: {{ comment.comment }}
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "@/lib/supabaseClient.js";

const comments = ref([]);
const name = ref("");
const comment = ref("");

async function getComments() {
  const { data, error } = await supabase.from("comments").select();

  if (error) {
    console.error("Error fetching comments:", error);
  } else {
    console.log("Fetched comments:", data);
  }

  comments.value = data || [];
}

async function submitComment() {
  if (!name.value || !comment.value) {
    alert("Please fill out both fields.");
    return;
  }

  const { data, error } = await supabase
    .from("comments")
    .insert([{ name: name.value, comment: comment.value }]);

  if (error) {
    console.error("Error submitting comment:", error);
    alert("Error submitting comment. Please try again.");
  } else {
    console.log("Comment submitted:", data);
    name.value = "";
    comment.value = "";
    getComments(); // Refresh comments list after submission
  }
}

onMounted(() => {
  getComments();
});
</script>

<style>
/* Target only the comment box */
.comment-box {
  background-color: maroon; /* Solid color */
  padding: 20px;
  border-radius: 15px;
  width: 80%;
  max-width: 600px;
  margin: 20px auto;
  color: white;
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5);
  text-align: center;
}

/* Style for labels */
.comment-box label {
  font-family: Garamond, serif;
  font-size: 18px;
  display: block;
  text-align: left;
  margin: 5px 0;
}

/* Style for input fields */
.comment-box input,
.comment-box textarea {
  width: 100%;
  padding: 10px;
  font-family: Garamond, serif;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  margin-bottom: 10px;
}

/* Submit button style */
.comment-box button {
  background-color: #800020; /* Solid maroon color */
  color: white;
  border: none;
  padding: 10px;
  font-family: Garamond, serif;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  border-radius: 8px;
}

.comment-box button:hover {
  background-color: #5a0014; /* Darker shade for hover effect */
}

/* Remove border from the main div */
#app > div {
  border: none;
  display: inline-block;
  margin: 10px;
  padding: 10px;
}
</style>
