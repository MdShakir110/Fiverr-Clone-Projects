import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel";
import umar from "../../assets/umar.jpg";
import ayan from "../../assets/Ayan.png";
import user from "../../assets/User.jpg";
import Pakistan from "../../assets/Pakistan.jpg";
import Ai1 from "../../assets/Ai1.jpg";
import Ai2 from "../../assets/Ai2.jpg";
import Ai3 from "../../assets/Ai3.jpg";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">FIVERR GRAPHICS & DESIGN</span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img className="pp" src={user} alt="" />
            <span>Muhammad Shakir</span>
            <div className="stars">
              <img src="../img/star.png" alt="star" />
              <img src="../img/star.png" alt="star" />
              <img src="../img/star.png" alt="star" />
              <img src="../img/star.png" alt="star" />
              <img src="../img/star.png" alt="star" />
              <span>5</span>
            </div>
          </div>

          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img src={Ai1} alt="" />
            <img src={Ai2} alt="" />
            <img src={Ai3} alt="" />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            I create one-of-a-kind AI images using Midjourney. I've put in
            countless hours to effectively master this software, and that's why
            I'm the ideal designer for your project. You no longer need to spend
            hours searching for the right image or try to make a design from
            scratch. With your words, I am able to generate a wide variety of
            styles, themes, and colour palettes that reflect your idea of a
            perfect masterpiece. You get to be the artist - no experience
            necessary! Whether it's for a business presentation, social media
            content, or a personal project, my platform offers a quick and easy
            solution to all your art needs. Upgrade your creativity with my
            services. Send me a message anytime! I'm here.
          </p>
          <div className="seller">
            <h2>About the Seller</h2>
            <div className="user">
              <img src={user} alt="" />
              <div className="info">
                <span>Muhammad Shakir</span>
                <div className="stars">
                  <img src="../img/star.png" alt="star" />
                  <img src="../img/star.png" alt="star" />
                  <img src="../img/star.png" alt="star" />
                  <img src="../img/star.png" alt="star" />
                  <img src="../img/star.png" alt="star" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">Pakistan</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Language</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                Hi there & welcome to my shop. I'm umar - a digital artist who
                creates fully customizable images based on your specific needs
                and vision. You send me the photo or description, and I will
                present to you a one of a kind - AI generated piece of art. If
                you have any questions, send me a message anytime
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img className="pp" src={umar} alt="" />
                <div className="info">
                  <span>Umar Habib</span>
                  <div className="country">
                    <img src={Pakistan} alt="" />
                    <span>Pakistan</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="../img/star.png" alt="star" />
                <img src="../img/star.png" alt="star" />
                <img src="../img/star.png" alt="star" />
                <img src="../img/star.png" alt="star" />
                <img src="../img/star.png" alt="star" />
                <span>5</span>
              </div>
              <p>
                Fantastic work. A real pleasure to work with. Definitely worth a
                look at their work. These images are going into a history book.
                Everyone I show them too is blown away by the quality of their
                work. I will be back again shortly! Keep using the gift you’ve
                been given! Brilliant stuff.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="../img/like.png" alt="" />
                <span>Yes</span>
                <img src="../img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img className="pp" src={ayan} alt="" />
                <div className="info">
                  <span>Muhammad Ayan Raza</span>
                  <div className="country">
                    <img src={Pakistan} alt="" />
                    <span>Pakistan</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="../img/star.png" alt="star" />
                <img src="../img/star.png" alt="star" />
                <img src="../img/star.png" alt="star" />
                <img src="../img/star.png" alt="star" />
                <img src="../img/star.png" alt="star" />
                <span>5</span>
              </div>
              <p>
                Fantastic work. A real pleasure to work with. Definitely worth a
                look at their work. These images are going into a history book.
                Everyone I show them too is blown away by the quality of their
                work. I will be back again shortly! Keep using the gift you’ve
                been given! Brilliant stuff.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="../img/like.png" alt="" />
                <span>Yes</span>
                <img src="../img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img className="pp" src={umar} alt="" />
                <div className="info">
                  <span>Umar Habib</span>
                  <div className="country">
                    <img src={Pakistan} alt="" />
                    <span>Pakistan</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="../img/star.png" alt="star" />
                <img src="../img/star.png" alt="star" />
                <img src="../img/star.png" alt="star" />
                <img src="../img/star.png" alt="star" />
                <img src="../img/star.png" alt="star" />
                <span>5</span>
              </div>
              <p>
                Fantastic work. A real pleasure to work with. Definitely worth a
                look at their work. These images are going into a history book.
                Everyone I show them too is blown away by the quality of their
                work. I will be back again shortly! Keep using the gift you’ve
                been given! Brilliant stuff.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="../img/like.png" alt="" />
                <span>Yes</span>
                <img src="../img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 Ai generated image</h3>
            <h2>$59.99</h2>
          </div>
          <p>
            i will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="details">
            <div className="item">
              <img src="../img/clock.png" alt="" />
              <span>2 days Delivery</span>
            </div>
            <div className="item">
              <img src="../img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="../img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="../img/greencheck.png" alt="" />
              <span>Artwork delivery</span>
            </div>
            <div className="item">
              <img src="../img/greencheck.png" alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="item">
              <img src="../img/greencheck.png" alt="" />
              <span>Additional design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
