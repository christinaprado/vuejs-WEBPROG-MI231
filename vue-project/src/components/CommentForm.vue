
<template>
    <div>
      <h2>Leave a Comment</h2>
      <form @submit.prevent="submitComment">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required class="form-control">
        </div>
        <div class="form-group">
          <label for="comment">Comment:</label>
          <textarea id="comment" v-model="comment" required class="form-control"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <div v-if="submissionStatus" class="mt-2">
          {{ submissionStatus }}
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { supabase } from '@/lib/supabaseClient.js'

  
  const name = ref('');
  const comment = ref('');
  const submissionStatus = ref(null);
  
  // Your Supabase URL and Key - IMPORTANT!
  const tableName = 'comments'; // Name of your Supabase table
  
  async function submitComment() {
    submissionStatus.value = "Submitting...";
    try {
      const { error } = await supabase
        .from(tableName)
        .insert([{ name: name.value, comment: comment.value }]);
  
      if (error) {
        console.error("Error inserting comment:", error);
        submissionStatus.value = "Error submitting comment. Please try again.";
      } else {
        submissionStatus.value = "Comment submitted successfully!";
        name.value = ''; // Clear form fields
        comment.value = '';
      }
    } catch (err) {
      console.error("An unexpected error occurred:", err);
      submissionStatus.value = "An unexpected error occurred. Please try again later.";
    }
  }
  </script>
  
  <style scoped>
  /* Basic styling - Customize as needed */
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .form-control {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn {
    padding: 0.5rem 1rem;
    color: white;
    
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  /* Style for the comment box */
.comment-box {
  background-color: maroon; /* Background color */
  padding: 20px;
  border-radius: 15px; /* Rounded corners */
  width: 80%; /* Adjust width as needed */
  max-width: 600px; /* Set a max width */
  margin: 20px auto; /* Center the box */
  color: white; /* Text color */
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5); /* Soft glowing shadow */
  text-align: center;
}

/* Style for the comment box headings */
.comment-box h2 {
  font-family: "Brush Script MT", cursive;
  font-size: 28px;
  margin-bottom: 15px;
}

/* Style for labels (Name:, Comment:) */
.comment-box label {
  font-family: Garamond, serif;
  font-size: 18px;
  display: block;
  text-align: left;
  margin: 5px 0;
}

/* Style for input fields and textarea */
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

  </style>
