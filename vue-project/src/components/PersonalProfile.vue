<template>
  <div>
    <header>
      Christina Prado - Personal Profile
    </header>

    <nav>
      <a href="#about">About Me</a>
      <a href="#education">Education</a>
      <a href="#experience">IT Experiences</a>
      <a href="#hobbies">Hobbies</a>
      <a href="#goals">Goals</a>
      <a href="#resources">Resources</a>
    </nav>

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

    <footer>
      &copy; 2025 Christina Prado. All Rights Reserved.
    </footer>
  </div>
</template>

<style scoped>
/* General Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-size: cover; /* If you want a background image, specify it here */
  background-position: center;
  background-attachment: fixed;
  background-color: #FFFFFF; /* White background */
}

header {
  background-color: #800020; /* Maroon header */
  color: #FFFFFF; /* White text */
  padding: 20px;
  text-align: center;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 5px #800020, 0 6px 15px #800020; /* Maroon shadow */
}

nav {
  background-color: #800020; /* Maroon nav */
  color: white;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: sticky;
  top: 60px;
  z-index: 999;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  font-size: 1rem;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #800020; /* Maroon on hover */
  background-color: #FFFFFF; /* White background on hover */
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 20px 0; /* Add some top/bottom padding */
}

.card {
  background-color: #FFFFFF; /* White cards */
  border-radius: 20px;
  padding: 20px;
  margin: 15px;
  text-align: center;
  width: 80%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Softer shadow */
  color: #000000; /* Black text */
}

.card h2 {
  margin-bottom: 10px;
  font-size: 2rem;
  color: #800020; /* Maroon headings */
}

.card p {
  margin: 0;
  font-size: 1.5rem;
  color: #000000; /* Black text */
}

footer {
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  background-color: #800020; /* Maroon footer */
  color: floralwhite;
}
</style>