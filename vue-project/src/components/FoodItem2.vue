<template>
    <div class="blueberry">
      <h2>{{ name }}</h2>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: 'Blueberries',
        message: 'I like Blueberries'
      }
    }
  };
  </script>
  
  <style>
  .blueberry {
        border: dashed white 1px;
        display: inline-block;
        margin: 10px;
        padding: 10px;
        background-color: #800020;
    }</style>