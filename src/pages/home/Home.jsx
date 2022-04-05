import { Link } from "react-router-dom";
import "./home.css";

import HeroImage from "../../assets/homePageImage.jpg";

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
        <img className="home-img" src={HeroImage} alt="" />
      </div>

      <div className="section-category">
        <h2 className="section-category-title">Category</h2>
        <div className="section-cards-parent">
          <div className="section-card">
            <img
              className="section-card-img"
              src="https://picsum.photos/200/200"
              alt=""
            />
            <div className="section-card-content">
              <h3>
                <Link to="/videos">Animation</Link>
              </h3>
            </div>
          </div>
          <div className="section-card">
            <img
              className="section-card-img"
              src="https://picsum.photos/200/200"
              alt=""
            />
            <div className="section-card-content">
              <h3>
                <Link to="/videos">Education</Link>
              </h3>
            </div>
          </div>
          <div className="section-card">
            <img
              className="section-card-img"
              src="https://picsum.photos/200/200"
              alt=""
            />
            <div className="section-card-content">
              <h3>
                <Link to="/videos">Art</Link>
              </h3>
            </div>
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
