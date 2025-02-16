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

<style>
/* Keep the color for only these specific boxes */
.fact-box, .comment-box {
  background-color: #800020;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Remove background color for all other divs */
#app > div:not(.fact-box):not(.comment-box) {
  background-color: transparent;
}
</style>