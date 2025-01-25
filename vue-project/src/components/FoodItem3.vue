<template>
    <div class="grapes">
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
  
  <style>
  .mango {
        border: dashed black 1px;
        display: inline-block;
        margin: 10px;
        padding: 10px;
        background-color: rgb(211, 167, 247);
    }</style>