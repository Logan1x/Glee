import { Link } from "react-router-dom";
import "./home.css";

import IndieMusic from "../../assets/indieMusic.jpg";
import PopMusic from "../../assets/popMusic.jpg";
import RomanceMusic from "../../assets/romanceMusic.png";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-title">
        <div className="home-title-onImage">
          <h1 className="home-title-heading">Glee</h1>
          <p>Entertainment for everyone.</p>
          <Link to="/videos">
            <button className="home-title-btn">Explore</button>
          </Link>
        </div>
      </div>

      <div className="section-category">
        <h2 className="section-category-title">Genre</h2>
        <div className="section-cards-parent">
          <div className="section-card">
            <Link to="/videos">
              <img className="section-card-img" src={PopMusic} alt="" />
              <div className="section-card-content">
                <h3>Pop</h3>
              </div>
            </Link>
          </div>
          <div className="section-card">
            <Link to="/videos">
              <img className="section-card-img" src={IndieMusic} alt="" />
              <div className="section-card-content">
                <h3>Indie</h3>
              </div>
            </Link>
          </div>
          <div className="section-card">
            <Link to="/videos">
              <img className="section-card-img" src={RomanceMusic} alt="" />
              <div className="section-card-content">
                <h3>Romance</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <footer className="footer">
        Developed By{" "}
        <span className="text-highlight">
          <Link to="https://github.com/logan1x/glee">Khushal Sharma</Link>
        </span>
      </footer>
    </div>
  );
}
