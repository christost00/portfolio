import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <nav>
        <ul id="navbar">
          <li>
            <a href="#welcome-section">About</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div id="welcome-section" class="intro">
        <h1>TECHRISTO</h1>
        <p>Web Developer</p>
      </div>
      <div id="projects" class="work">
        <h2 class="work-header">My Projects</h2>
        <a
          href="https://codepen.io/techristo/pen/BeOOwB"
          target="_blank"
          class="project project-tile"
        >
          <img
            class="project-pic"
            src="https://cloud.githubusercontent.com/assets/15967809/17642794/d084d718-6171-11e6-83fa-ede5d0a67ad2.png"
            alt="project"
          />
          <div class="project-title">Tribute Page</div>
        </a>
        <a
          href="https://codepen.io/techristo/pen/MWabxmW"
          target="_blank"
          class="project project-tile"
        >
          <img
            class="project-pic"
            src="https://cloud.githubusercontent.com/assets/15967809/17642771/7cd6a0c4-6171-11e6-87fb-915f6084d104.png"
            alt="project"
          />
          <div class="project-title">Random Quote Machine</div>
        </a>
        <a
          href="https://codepen.io/techristo/pen/OJybqBq"
          target="_blank"
          class="project project-tile"
        >
          <img
            class="project-pic"
            src="https://cloud.githubusercontent.com/assets/15967809/17642772/7d02406c-6171-11e6-8c79-40a2933163dc.png"
            alt="project"
          />
          <div class="project-title">JavaScript Calculator</div>
        </a>
        <a
          href="https://codepen.io/techristo/pen/ZEBybVq"
          target="_blank"
          class="project project-tile"
        >
          <img
            class="project-pic"
            src="https://cloud.githubusercontent.com/assets/15967809/17642773/7d08cb94-6171-11e6-8c45-22e7cf64683e.png"
            alt="project"
          />
          <div class="project-title">Map Data Across the Globe</div>
        </a>
        <a
          href="https://codepen.io/techristo/pen/dyORYxY"
          target="_blank"
          class="project project-tile"
        >
          <img
            class="project-pic"
            src="https://cloud.githubusercontent.com/assets/15967809/17642774/7d091806-6171-11e6-8d47-ecf2f2833fe2.png"
            alt="project"
          />
          <div class="project-title">Wikipedia Viewer</div>
        </a>
        <a
          href="https://codepen.io/techristo/pen/poNwgzO"
          target="_blank"
          class="project project-tile"
        >
          <img
            class="project-pic"
            src="https://cloud.githubusercontent.com/assets/15967809/17642775/7d354304-6171-11e6-8b56-66eee4681d88.png"
            alt="project"
          />
          <div class="project-title">Tic Tac Toe Game</div>
        </a>

        <a
          href="https://codepen.io/techristo/"
          class="show-all"
          target="_blank"
        >
          Show all
        </a>
      </div>
      <div id="contact" class="contact">
        <div class="header">
          <h1>Let's work together...</h1>
        </div>

        <a href="mailto:christaras334@gmail.com" class="contact-details">
          Send a mail
        </a>
      </div>
    </div>
  );
}
