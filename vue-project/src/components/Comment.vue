<template>
  <h1>Comments</h1>
  
  <div class="comment-box">
    <h2>Leave a Comment</h2>
    <label>Name:</label>
    <input type="text" />
    <label>Comment:</label>
    <textarea></textarea>
    <button disabled>Submit</button>
  </div>

  <ul>
    <li v-for="comment in comments" :key="comment.id">
      {{ comment.name }}: {{ comment.comment }}
    </li>
  </ul>

  <div class="fact-box"> 
    <strong>Apples</strong>
    <p>I like apples</p>
  </div>
  
  <div class="fact-box">
    <strong>Blueberries</strong>
    <p>I like Blueberries</p>
  </div>
  
  <div class="fact-box">
    <strong>Grapes</strong>
    <p>I like grapes</p>
  </div>
</template>
