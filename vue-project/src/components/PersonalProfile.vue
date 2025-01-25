<template>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/flexbox-grid.css">
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

    .container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
}

header, footer {
    background-color: #f0f0f0;
    padding: 20px;
}

main {
    display: flex;
    flex-direction: row;
}

.main-content {
    flex: 2;
    background-color: #f1e3a4;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
}

.main-content > div {
    background-color: #f1f1f1;
    width: 300px;
    margin: 10px;
    text-align: center;
    line-height: 35px;
    font-size: 15px;
}

.sidebar {
    flex: 1;
    background-color: #f5f5f5;
    padding: 20px;
}



  </template>