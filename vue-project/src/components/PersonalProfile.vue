<template>
  <div>
    <!-- Header Section -->
    <header>Christina Prado</header>
    
    <!-- Navigation Bar -->
    <nav>
      <a href="#about">About Me</a>
      <a href="#education">Education</a>
      <a href="#experience">IT Experiences</a>
      <a href="#hobbies">Hobbies</a>
      <a href="#goals">Goals</a>
      <a href="#resources">Resources</a>
    </nav>
    
    <!-- Main Content -->
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
        <p>I first learned how to code using HTML when I was in 9th grade, and I kind of liked it, and that encouraged me to take IT.</p>
      </div>
      
      <div id="hobbies" class="card">
        <h2>Hobbies & Interests</h2>
        <p>I enjoy exploring new places through walking and eating out with friends. I find satisfaction and peace in a clean and organized room, and spending quality time with my beloved furbabies brings me immense joy.</p>
      </div>
      
      <div id="goals" class="card">
        <h2>Goals in Life/Dreams</h2>
        <p>As I look towards the future, my aspirations are to one day establish my own business, embark on adventures around the world, and to live a long, healthy, and stress-free life.</p>
      </div>
      
      <div id="resources" class="card">
        <h2>Resources</h2>
        <ul>
          <li><a href="https://www.w3schools.com/" target="_blank">W3Schools</a></li>
        </ul>
      </div>
    </div>
    
    <!-- Footer -->
    <footer>&copy; 2025 Christina Prado. All Rights Reserved.</footer>
  </div>
  </template>
  
  <style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Arial", sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: linear-gradient(to top right, #450028, #24000B, #690022, #881F2B, #D6A7BA);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
  
  header {
    background-color: #800020;
    color: #fffcef;
    padding: 20px;
    text-align: center;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1000;
    font-family: "Brush Script MT", cursive;
    font-size: 3rem;
  }
  
  nav {
    background-color: rgba(167, 98, 98, 0.8);
    color: white;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: sticky;
    top: 60px;
    z-index: 999;
    backdrop-filter: blur(5px);
    font-family: Garamond, serif;
    font-size: 1.2rem;
  }
  
  nav a {
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    transition: color 0.3s ease;
  }
  
  nav a:hover {
    color: #ffb5c0;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;
  }
  
  .card {
    background-color: #800020;
    border-radius: 20px;
    padding: 20px;
    margin: 15px;
    text-align: center;
    width: 80%;
    box-shadow: 0 4px 10px rgba(255, 252, 239, 0.5);
    color: #fff;
  }
  
  .card h2 {
    margin-bottom: 10px;
    font-size: 3rem;
    font-family: "Brush Script MT", cursive;
  }
  
  .card p {
    font-size: 1rem;
    font-family: Garamond, serif;
  }
  
  footer {
    text-align: center;
    margin-top: 20px;
    padding: 10px;
    background-color: #800020;
    color: #fffcef;
  }
  </style>