<template>
    <div class="container">
      <div id="about" class="card">
        <h2>About Me</h2>
        <p>Hi! My name is Christina Prado, I am a second-year college student in Asia Pacific College taking the course BSIT-MI. I have five dogs and I love listening to music.</p>
      </div>
  
      <div id="education" class="card">
        <h2>Education & Achievements</h2>
        <p>BSIT-MI, Bachelor of Science in Information Technology with specialization in Mobile and Internet Technologies</p>
      </div>
  
      <div id="experience" class="card">
        <h2>IT Experiences</h2>
        <p>I first learned how to code using HTML when I was in 9th grade. And I kind of liked it, and that encouraged me to take IT.</p>
      </div>
  
      <div id="hobbies" class="card">
        <h2>Hobbies & Interests</h2>
        <p>I enjoy exploring new places through walking and eating out with friends. I find satisfaction and peace in a clean and organized room, and spending quality time with my beloved furbabies brings me immense joy.</p>
      </div>
  
      <div id="goals" class="card">
        <h2>Goals in Life/Dreams</h2>
        <p>As I look towards the future, my aspirations are to one day establish my own business, embark on adventures around the world, and to live a long, healthy, and stress-free life.</p>
      </div>
    </div>
  
    <footer>Asia Pacific College</footer>
  
    <div id="app">
      {{ message }} <br>
      {{ 'Random number: ' + Math.ceil(Math.random() * 6) }}
  
      <div v-bind:class="vueClass">This element is bound to the "pinkBG" class.</div>
    </div>
  
    <div id="app2">
      <p>Everything inside the div element with id="app2" can use data from the Vue instance.</p>
      <div v-bind:class="vueClass">This element is bound to the "pinkBG" class.</div>
    </div>
  
    <link rel="stylesheet" href="css/shopping.css?version=0.1">
  
    <div id="app3">
      <form v-on:submit.prevent="addItem">
        <p>
          What do you need? <br>
          <input type="text" required placeholder="Item name..." v-model="itemName">
        </p>
        <p>
          How many? <br>
          <input type="number" placeholder="Number of items..." v-model="itemNumber">
        </p>
        <p>
          Important?
          <label>
            <input type="checkbox" v-model="itemImportant">
            {{ itemImportant }}
          </label>
        </p>
        <button type="submit">Add item</button>
      </form>
  
      <br>
      <hr>
  
      <div>
        <p><strong>Shopping list:</strong></p>
  
        <ul id="ulToFind">
          <li
            v-for="item in shoppingList"
            v-bind:class="{ impClass: item.important }"
            v-on:click="item.found = !item.found"
            v-show="!item.found"
          >
            {{ item.name }}, {{ item.number }}
          </li>
        </ul>
  
        <ul id="ulFound">
          <li
            v-for="item in shoppingList"
            v-bind:class="{ impClass: item.important }"
            v-on:click="item.found = !item.found"
            v-show="item.found"
          >
            {{ item.name }}, {{ item.number }}
          </li>
        </ul>
      </div>
    </div>
  
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="js/vue.js"></script>
    <script src="js/images.js"></script>
    <script src="js/shoppinglist.js"></script>
  </template>