import React from "react";
import "./home.css";

import HeroImage from "../../assets/homePageImage.jpg";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-title">
        <div className="home-title-onImage">
          <h1 className="home-title-heading">Glee</h1>
          <p>Entertainment for everyone.</p>
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
                <a href="/">Animation</a>
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
                <a href="/">Education</a>
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
                <a href="/">Art</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        Developed By{" "}
        <span class="text-highlight">
          <a href="https://github.com/logan1x/glee">Khushal Sharma</a>
        </span>
      </footer>
    </div>
  );
}
