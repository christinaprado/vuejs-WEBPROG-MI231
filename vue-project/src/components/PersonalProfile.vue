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
/* ... (other styles) */

.card {
  background-color: #800020; /* Red cards */
  border-radius: 20px;
  padding: 20px;
  margin: 15px;
  text-align: center;
  width: 80%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  color: #FFFFFF; /* White text */
}

.card h2 {
  color: #FFFFFF; /* White headings */
}

.card a { /* Style for the link in the Resources card */
  color: #FFFFFF; /* White link text */
  text-decoration: none; /* Remove underline if needed */
}

/* ... (rest of your styles) */
</style>