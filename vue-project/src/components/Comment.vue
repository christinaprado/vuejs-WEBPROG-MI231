<template>
  <div class="comment-box">
    <h2>Leave a Comment</h2>
    <form @submit.prevent="submitComment">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required maxlength="50" />
      <label for="comment">Comment:</label>
      <textarea id="comment" v-model="comment" rows="4" required maxlength="500"></textarea>
      <button type="submit" :disabled="submitting">
        {{ submitting ? "Submitting..." : "Submit" }}
      </button>
      <div v-if="formError" class="error-message">{{ formError }}</div>
    </form>
  </div>

  <h1 class="comments-heading">Comments</h1>
  <div v-if="loading">Loading comments...</div>
  <div v-else-if="commentsError">{{ commentsError }}</div>
  <div v-else>
    <div v-for="comment in comments" :key="comment.id" class="comment">
      <div class="comment-author">{{ comment.name }}</div>
      <div class="comment-text">{{ comment.comment }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "@/lib/supabaseClient.js";

const comments = ref([]);
const name = ref("");
const comment = ref("");
const loading = ref(true);
const commentsError = ref(null);
const formError = ref(null);
const submitting = ref(false);

async function getComments() {
  loading.value = true;
  commentsError.value = null;

  try {
    const { data, error } = await supabase.from("comments").select();
    if (error) {
      commentsError.value = error.message;
      console.error("Error fetching comments:", error);
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
    formError.value = "Please fill out both fields.";
    return;
  }

  submitting.value = true;
  try {
    const { error } = await supabase
      .from("comments")
      .insert([{ name: name.value.trim(), comment: comment.value.trim() }]);

    if (error) {
      console.error("Error submitting comment:", error);
      formError.value = "Error submitting comment. Please try again.";
    } else {
      name.value = "";
      comment.value = "";
      await getComments(); // Use await here
    }
  } finally {
    submitting.value = false;
  }
}

onMounted(() => {
  getComments();
});
</script>

<style>
/* ... (Existing styles) */
.comment {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
}

.comment-author {
  font-weight: bold;
  margin-bottom: 5px;
}

.error-message {
  color: red;
  margin-top: 5px;
}
</style>