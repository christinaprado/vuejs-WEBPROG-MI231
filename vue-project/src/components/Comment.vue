<template>
  <div class="container">
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
  </div>
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
/* Center the entire content */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
}

/* Comment Box */
.comment-box {
  background-color: maroon;
  padding: 20px;
  border-radius: 15px;
  width: 80%;
  max-width: 600px;
  color: white;
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5);
  text-align: center;
}

/* Style for input fields */
.comment-box input,
.comment-box textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  margin-bottom: 10px;
}

/* Submit button style */
.comment-box button {
  background-color: #800020;
  color: white;
  border: none;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  border-radius: 8px;
}

.comment-box button:hover {
  background-color: #800020;
}

/* Comment List */
.comment-list {
  list-style: none;
  padding: 0;
  width: 80%;
  max-width: 600px;
  text-align: left;
}

/* Footer Styling */
.footer {
  margin-top: 40px;
  padding: 10px;
  background-color: #800020;
  color: white;
  width: 100%;
  text-align: center;
}
</style>
