import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/Slide/Slide";
import { cards, projects } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
const home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide
        slidesToShow={4}
        arrowsScroll={3}
        autoplay={true}
        autoplayScroll={3}
      >
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>The best part? Everything.</h1>
            <div className="title">
              <img src="./img/check.png" alt="checked" />
              Stick to your budget
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="checked" />
              Get quality work done quickly
            </div>
            <p>
              Hand your project over to a talented freelancer in minutes, get
              long-lasting results.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="checked" />
              Pay when you're happy
            </div>
            <p>
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="checked" />
              Count on 24/7 support
            </div>
            <p>
              Our round-the-clock support team is available to help anytime,
              anywhere.
            </p>
          </div>
          <div className="item">
            <video src="./img/LaptopProject.mp4" controls></video>
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1 className="fiverrs">
              fiverr <i>business</i>
            </h1>
            <h1>Advanced solutions and professional talent for businesses</h1>

            <div className="title">
              <img src="./img/check.png" alt="checked" />

              <div className="title_desc">
                <h3>Fiverr Pro</h3>
                <p>
                  Access top freelancers and professional business tools for any
                  project
                </p>
              </div>
            </div>
            <div className="title">
              <img src="./img/check.png" alt="checked" />

              <div className="title_desc">
                <h3>Fiverr Certified</h3>
                <p>Build your own branded marketplace of certified experts</p>
              </div>
            </div>
            <div className="title">
              <img src="./img/check.png" alt="checked" />
              <div className="title_desc">
                <h3>Fiverr Enterprise</h3>
                <p>
                  Manage your freelance workforce and onboard additional talent
                  with an end-to-end SaaS solution
                </p>
              </div>
            </div>
            <button>Learn More</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <Slide
        slidesToShow={4}
        arrowsScroll={3}
        autoplay={true}
        autoplayScroll={3}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </Slide>
    </div>
  );
};

export default home;
