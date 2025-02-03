<template>
  <div class="profile-container">
    <div class="fruit-bar">
      <div class="fruit-item" style="background-color: #FFC0CB;">Apples</div>
      <div class="fruit-item" style="background-color: #ADD8E6;">Blueberries</div>
      <div class="fruit-item" style="background-color: #E6E6FA;">Grapes</div>
    </div>

    <div class="profile-content">
      <div class="profile-header">
        <div class="profile-title">Christina Prado - Personal Profile</div>
        <nav>
          <a href="#about">About Me</a>
          <a href="#education">Education</a>
          <a href="#experience">IT Experiences</a>
          <a href="#hobbies">Hobbies</a>
          <a href="#goals">Goals</a>
          <a href="#resources">Resources</a>
        </nav>
      </div>

      <div class="container">
        <div class="profile-cards">
          <div class="card">
            <div class="card-title">About Me</div> <div class="card-content">
              Hi! My name is Christina Prado, I am a second-year college student in Asia Pacific College taking the course BSIT-MI. I have five dogs and I love listening to music.
            </div>
          </div>

          <div class="card">
            <div class="card-title">Education & Achievements</div> <div class="card-content">
              BSIT-MI, Bachelor of Science in Information Technology with specialization in Mobile and Internet Technologies
            </div>
          </div>

          <div class="card">
            <div class="card-title">IT Experiences</div> <div class="card-content">
              I first learned how to code using HTML when I was in 9th grade, and I kind of liked it, and that encouraged me to take IT.
            </div>
          </div>

          <div class="card">
            <div class="card-title">Hobbies & Interests</div> <div class="card-content">
              I enjoy exploring new places through walking and eating out with friends. I find satisfaction and peace in a clean and organized room, and spending quality time with my beloved furbabies brings me immense joy.
            </div>
          </div>

          <div class="card">
            <div class="card-title">Goals in Life/Dreams</div> <div class="card-content">
              As I look towards the future, my aspirations are to one day establish my own business, embark on adventures around the world, and to live a long, healthy, and stress-free life.
            </div>
          </div>

          <div class="card">
            <div class="card-title">Resources</div> <div class="card-content">
              <ul>
                <li><a href="https://www.w3schools.com/" target="_blank">W3Schools</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="profile-footer">
      &copy; 2025 Christina Prado. All Rights Reserved.
    </div>
  </div>
</template>

<style scoped>
/*  General Styles  */
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
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-color: #ffb5c0; /* Light pink background */
}

/*  Header Styles  */
header {
  background-color: #4c0000; /* Dark red/maroon header */
  color: floralwhite;
  padding: 20px;
  text-align: center;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 5px #eb99994d, 0 6px 15px #ea969633;
}

/*  Navigation Styles  */
nav {
  background-color: rgba(167, 98, 98, 0.8); /* Semi-transparent maroon nav */
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
  color: #ffb5c0;
}

/*  Main Content Container Styles  */
.profile-content {
  width: 100%; /* Full width for the content area */
  padding: 20px; /* Add some padding */
}


/*  Card Container Styles  */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
}

/*  Card Styles  */
.card {
  background-color: #4c0000; /* Dark red/maroon cards */
  border-radius: 20px;
  padding: 20px;
  margin: 15px;
  text-align: center;
  width: 80%;
  box-shadow: 0 4px 10px rgba(255, 252, 239);
  color: #fff;
}

.card .card-title { /* Card Title Styles */
  margin-bottom: 10px;
  font-size: 2rem;
}

.card .card-content { /* Card Content Styles */
  margin: 0;
  font-size: 1.5rem;
}

/*  Footer Styles  */
footer {
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  background-color: #4c0000; /* Dark red/maroon footer */
  color: floralwhite;
}
</style>