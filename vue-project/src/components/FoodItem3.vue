<template>
    <div class="grape"> 
      <h2>{{ name }}</h2>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: 'Grapes',
        message: 'I like grapes'
      }
    }
  };
  </script>
  
  <style scoped>
    .grape {
          border: dashed rgb(255, 255, 255) 1px;
          display: inline-block;
          margin: 10px;
          padding: 10px;
          background-color: #800020;
      }
  </style>