import Socials from "./Socials";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <Socials />
      <div className="copyright">
        © mim collopy 2023
        <br/>
        built with react
        </div>
    </div>
  );
}
