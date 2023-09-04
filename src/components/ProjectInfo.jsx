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
        <a href="https://github.com/mimcollopy/thru_supply">
          <img id="app-img" src={thru_supply} alt="thru supply" />
          <br /> Thru Supply
          <img className="social-icon" src={github} alt="GitHub" />
        </a>
        <p id="project-description">
          React.js app to plan adequate calories for multi day hikes in the back
          country. A fun project that focuses on a clean design with a little
          bit of flair
        </p>
      </div>

      <div>
        <a href="https://github.com/papa-fish/servo_app">
          <img id="app-img" src={servo_app} alt="servo app" />
          <br /> Servo Finder
          <img className="social-icon" src={github} alt="GitHub" />
        </a>

        <p id="project-description">
          Group project to build a single page application to display pertrol
          stations accross Australia using Google Maps API. A challenging
          project built by 5 people in 4 days
        </p>
      </div>
      <div>
        <a href="https://github.com/mimcollopy/take-a-hike">
          <img id="app-img" src={take_a_hike} alt="take a hike" />
          <br />
          Take A Hike
          <img className="social-icon" src={github} alt="GitHub" />
        </a>
        <p id="project-description">
          A full-stack CRUD app that allows users to share and save various
          trails. Built using JavaScript, node.js, Express.js, HTML, CSS, and
          PostrgreSQL
        </p>
      </div>
      <div>
        <a href="https://github.com/mimcollopy/tac-tac-toe">
          <img id="app-img" src={tic_tac_toe} alt="tic-tac-toe" />
          <br /> Tic-Tac-Toe
          <img className="social-icon" src={github} alt="GitHub" />
        </a>
        <p id="project-description">
          A classic game built using JavaScript, HTML, and CSS.</p>
      </div>
    </div>
  );
}
