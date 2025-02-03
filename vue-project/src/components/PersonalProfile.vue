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

      <div class="profile-cards">
        <div class="card">
          <div class="card-title">About Me</div>
          <div class="card-content">
            Hi! My name is Christina Prado, I am a second-year college student in Asia Pacific College taking the course BSIT-MI. I have five dogs and I love listening to music.
          </div>
        </div>

        <div class="card">
          <div class="card-title">Education & Achievements</div>
          <div class="card-content">
            BSIT-MI, Bachelor of Science in Information Technology with specialization in Mobile and Internet Technologies
          </div>
        </div>

        <div class="card">
          <div class="card-title">IT Experiences</div>
          <div class="card-content">
            I first learned how to code using HTML when I was in 9th grade, and I kind of liked it, and that encouraged me to take IT.
          </div>
        </div>

        <div class="card">
          <div class="card-title">Hobbies & Interests</div>
          <div class="card-content">
            I enjoy exploring new places through walking and eating out with friends. I find satisfaction and peace in a clean and organized room, and spending quality time with my beloved furbabies brings me immense joy.
          </div>
        </div>

        <div class="card">
          <div class="card-title">Goals in Life/Dreams</div>
          <div class="card-content">
            As I look towards the future, my aspirations are to one day establish my own business, embark on adventures around the world, and to live a long, healthy, and stress-free life.
          </div>
        </div>

        <div class="card">
          <div class="card-title">Resources</div>
          <div class="card-content">
            <ul>
              <li><a href="https://www.w3schools.com/" target="_blank">W3Schools</a></li>
            </ul>
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
.profile-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: sans-serif; /* Or your preferred font */
  background-color: #f0f0f0; /* Example background color */
}

.fruit-bar {
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 10px;
}

.fruit-item {
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
}

.profile-content {
  width: 80%;
  margin: 20px auto;
}

.profile-header {
  text-align: center;
  margin-bottom: 20px;
}

.profile-title {
  font-size: 1.5em;
  margin-bottom: 10px;
}

nav {
  display: flex;
  justify-content: center;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}

.profile-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
}

.card {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-weight: bold;
  margin-bottom: 10px;
}

.profile-footer {
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  width: 100%;
  background-color: #333;
  color: white;
}
</style>