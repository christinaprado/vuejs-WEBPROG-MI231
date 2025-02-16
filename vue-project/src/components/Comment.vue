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

  <h1 class="comments-heading">Comments</h1>
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


.comment-box input,
.comment-box textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  margin-bottom: 10px;
}

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
  background-color: #600000;
}

.comments-heading {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
}
</style>
