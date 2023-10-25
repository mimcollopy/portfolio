import github from "../github.svg";
import thru_supply from "../thru-supply.png";
import servo_app from "../servo-app.png";
import take_a_hike from "../take-a-hike.png";
import tic_tac_toe from "../tic-tac-toe.png";
import "./ProjectInfo.css";

export default function ProjectInfo() {
  return (
    <div className="project-list">
      <div>
        <a
          href="https://github.com/mimcollopy/thru_supply"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="app-img" src={thru_supply} alt="thru supply" />
          <br /> Thru Supply
        </a>
        <a
          href="https://github.com/mimcollopy/thru_supply"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icon" src={github} alt="GitHub" />
        </a>
        <p id="project-description">
          React.js app to plan adequate calories for multi-day hikes in the backcountry. A fun project that focuses on a clean design with a little bit of flair
        </p>
      </div>

      <div>
        <a
          href="https://servo-app.fly.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="app-img" src={servo_app} alt="servo app" />
          <br /> Servo Finder
        </a>
        <a
          href="https://github.com/papa-fish/servo_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icon" src={github} alt="GitHub" />
        </a>
        <br />
        <a
          id="demo-btn"
          href="https://servo-app.fly.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          demo
        </a>

        <p id="project-description">
          Group project to build a single-page application to display petrol stations across Australia using Google Maps API. A challenging project built by 5 people in 4 days
        </p>
      </div>
      <div>
        <a
          href="https://github.com/mimcollopy/take-a-hike"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="app-img" src={take_a_hike} alt="take a hike" />
          <br />
          Take A Hike
        </a>

        <a
          href="https://github.com/mimcollopy/take-a-hike"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icon" src={github} alt="GitHub" />
        </a>
        {/* <br />
        <a
          id="demo-btn"
          href="https://take-a-hike.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          demo
        </a> */}
        <p id="project-description">
          A full-stack CRUD app that allows users to share and save various
          trails. Built using JavaScript, node.js, Express.js, HTML, CSS, and
          PostgreSQL. This page is deployed on render, and does take a little
          while to load.
        </p>
      </div>
      <div>
        <a
          href="https://mimcollopy.github.io/tac-tac-toe/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="app-img" src={tic_tac_toe} alt="tic-tac-toe" />
          <br /> Tic-Tac-Toe
        </a>
        <a
          href="https://github.com/mimcollopy/tac-tac-toe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icon" src={github} alt="GitHub" />
        </a>
        <br />
        <a
          id="demo-btn"
          href="https://mimcollopy.github.io/tac-tac-toe/"
          target="_blank"
          rel="noopener noreferrer"
        >
          demo
        </a>
        <p id="project-description">
          A classic game built using JavaScript, HTML, and CSS.
        </p>
      </div>
    </div>
  );
}
