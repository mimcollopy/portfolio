import linkedin from "../linkedin.svg";
import email from "../email.svg";
import github from "../github.svg";
import cv from "../cv.svg";
import './Socials.css'
export default function Socials() {
return (
    <div className="social-links">
        <a className="Link" href="https://drive.google.com/file/d/1TBD-60h5khNMxvxgquKa2xgBjEYShtlq/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src={cv} alt="CV" />
        </a>
        <a className="Link" href="mailto:mim.collopy@gmail.com">
          <img className="social-icon" src={email} alt="email" />
        </a>
        <a className="Link" href="https://www.linkedin.com/in/mimcollopy/" target="_blank" rel="noopener noreferrer">
          {" "}
          <img className="social-icon" src={linkedin} alt="LinkedIn" />
        </a>
        <a className="Link" href="https://github.com/mimcollopy" target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src={github} alt="GitHub" />
        </a>
      </div>
)
}