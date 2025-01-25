  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/mystyle.css">
  <title>Christina Prado - Personal Profile</title>

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
      <p>I first learned how to code using HTML when I was in 9th grade. And I kind've liked it, and that encouraged me to take IT.</p>
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

</body>
</html>

<style>
  body {
    font-family: sans-serif;
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-color: #ffb5c0; 
  }

  header {
    background-color: #bc5b5b;
    color: floralwhite;
    padding: 20px;
    text-align: center;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 4px 5px #eb99994d, 0 6px 15px #ea969633;
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

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;
  }

  .card {
    background-color: #dd7e7ee6;
    border-radius: 20px;
    padding: 20px;
    margin: 15px;
    text-align: center;
    width: 80%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    color: #fff;
  }

  .card h2 {
    margin-bottom: 10px;
    font-size: 2rem;
  }

  .card p {
    margin: 0;
    font-size: 1.5rem;
  }

  .photo-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 20px;
    padding: 20px;
  }

  .photo-gallery img {
    width: 300px; 
    height: auto; 
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  footer {
    text-align: center;
    margin-top: 20px;
    padding: 10px;
    background-color: #bc5b5b;
    color: floralwhite;
  }
</style>

</html>
