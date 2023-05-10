import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <>
        <div className="wrapper">
          <header>
            <div className="container">
              <a href="" className="logo-link">
                <h1 className="logo">COVA</h1>
              </a>
              <div className="menu">
                <nav className="nav">
                  <div className="menu-btn">
                    <div className="line line-1" />
                    <div className="line line-2" />
                  </div>
                  <ul className="nav-list">
                    <li className="nav-item">
                      <a href="#about" className="nav-link">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#gallery" className="nav-link">
                        Gallery
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#testimonial" className="nav-link">
                        Testimonial
                      </a>
                    </li>
                  </ul>
                </nav>
                <a href="#subscription" className="subscribe-btn">
                  <img
                    className="subscribe-icon"
                    src="images/subscribe.svg"
                    alt="subscribe button"
                    title="Subscribe"
                  />
                </a>
              </div>
            </div>
          </header>
          <section className="hero rellax" data-rellax-speed={-3}>
            <div className="container">
              <div className="hero-text rellax" data-rellax-speed={2}>
                <h1 className="intro-text">
                  Make your day special
                  <br />
                  <span className="intro-text-sm">with our great coffee</span>
                </h1>

                <button className="btn btn-primary">List Now</button>
              </div>
              <a href="" className="scroll-down-btn">
                <img src="images/down-arrow.svg" alt="scroll down button" />
              </a>
            </div>
          </section>
        </div>
        <div className="static-section">
          <section className="about" id="about">
            <div className="about-coffee">
              <div className="about-coffee-taste">
                <img
                  className="about-coffee-img"
                  src="images/rich-tasty.jpg"
                  alt=""
                />
                <div className="about-coffee-desc">
                  <div className="container">
                    <h2 className="about-coffee-heading">Rich and Tasty</h2>
                    <p className="about-coffee-text">
                      We've been serving the best taste coffee since 1998. We
                      believe that good quality coffee should taste good. Taste
                      it and feel the smoothness on your tongue.
                    </p>
                    <button className="btn btn-primary">Find Your Taste</button>
                  </div>
                </div>
              </div>
              <div className="about-coffee-beans">
                <img
                  className="about-coffee-img"
                  src="images/best-beans.jpg"
                  alt=""
                />
                <div className="about-coffee-desc">
                  <div className="container">
                    <h2 className="about-coffee-heading">Best Beans</h2>
                    <p className="about-coffee-text">
                      We explore the world to find the best coffee Beans. We
                      only pick the perfect beans.
                    </p>
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="about-open">
            <div className="container">
              <h3 className="about-open-heading">Open Hours</h3>
              <p className="about-open-text">
                <span className="day-open">Everyday</span>06:00 AM - 11.00 PM
              </p>
            </div>
          </div>
          <section className="gallery" id="gallery">
            <div className="swiper-container swiper-container-gallery">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    className="gallery-img img-blur"
                    src="images/image-1.jpg"
                    data-src="images/image-1.jpg"
                    alt="coffee in mugs"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="gallery-img img-blur"
                    src="images/image-2.jpg"
                    data-src="images/image-2.jpg"
                    alt="coffee in mugs on round table"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="gallery-img img-blur"
                    src="images/image-3.jpg"
                    data-src="images/image-3.jpg"
                    alt="hot coffee in a white ceramic cup"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="gallery-img img-blur"
                    src="images/image-4.jpg"
                    data-src="images/image-4.jpg"
                    alt="three person holding mug with beverage inside"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="gallery-img img-blur"
                    src="images/image-5.jpg"
                    data-src="images/image-5.jpg"
                    alt="milk ice coffee"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    className="gallery-img img-blur"
                    src="images/image-6.jpg"
                    data-src="images/image-6.jpg"
                    alt="coffee and pastries"
                  />
                </div>
              </div>
              <div className="swiper-pagination swiper-pagination-bulllets" />
              <div className="swiper-button-prev swiper-button" />
              <div className="swiper-button-next swiper-button" />
            </div>
          </section>
          <div className="gallery-addition">
            <img
              className="img-blur"
              src="images/coffee-shop.jpg"
              data-src="images/coffee-shop.jpg"
              alt="coffee-shop"
            />
            <div className="gallery-cta">
              <div className="cta-content">
                <h1 className="cta-heading come-and-taste-it-anim">
                  Come and Taste it
                </h1>
                <button className="btn btn-primary">Find Nearest Store</button>
              </div>
            </div>
          </div>
          <section className="testimonial" id="testimonial">
            <div className="container">
              <h3 className="testimonial-heading">Testimonials</h3>
              <div className="swiper-container swiper-container-testimonial">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-content">
                      <h4 className="name">Tyler Smith</h4>
                      <p className="testi">
                        Awesome place, best coffee, yummy patries, good price,
                        friendly staff. I recommend this coffee shop.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-content">
                      <h4 className="name">Erika Samantha</h4>
                      <p className="testi">
                        Delicious taste of coffee! Love the aroma &amp; taste. I
                        also love this place. It's a cool place to hang out with
                        friends.
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-content">
                      <h4 className="name">Emma Hazel</h4>
                      <p className="testi">
                        I ordered the cappuccino and I was surprised with its
                        latte art. Really unique and beautiful. It's also
                        delicious!
                      </p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-content">
                      <h4 className="name">Nicholas Keith</h4>
                      <p className="testi">
                        It's a perfect place to chill. Comfortable couches,
                        lovely and friendly staff, free wifi, &amp; the coffee
                        tasted so good!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination swiper-pagination-bulllets" />
              </div>
            </div>
          </section>
          <section className="subscription" id="subscription">
            <div className="container">
              <h2 className="subscription-heading">
                Get the Latest
                <br />
                Updates and Offers
              </h2>
              <form>
                {/* <input type="email" placeholder="email@example.com" /> */}
                <Link to={"/login"}>
                  <button className="btn btn-primary">Login</button>
                </Link>
              </form>
            </div>
          </section>
          <footer>
            <div className="container">
              <div className="social-media">
                <a href="" className="Social-links">
                  <img
                    src="images/instagram.svg"
                    alt="Instagram"
                    title="Instagram"
                  />
                </a>
                <a href="" className="Social-links">
                  <img
                    src="images/facebook.svg"
                    alt="Facebook"
                    title="Facebook"
                  />
                </a>
                <a href="" className="Social-links">
                  <img src="images/twitter.svg" alt="Twitter" title="Twitter" />
                </a>
              </div>
              <span>© 2020 COVA. All rights reserved</span>
            </div>
          </footer>
        </div>
      </>
    </div>
  );
};

export default LandingPage;
