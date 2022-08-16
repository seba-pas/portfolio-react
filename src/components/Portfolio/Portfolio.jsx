import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>this is a portfolio item title</h3>
          <div className="portfolio__items-cta">
            <a href="https://github.com/seba-pas" className="btn">
              github
            </a>
            <a
              href="https://vercel.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              livedemo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>this is a portfolio item title</h3>
          <div className="portfolio__items-cta">
            <a href="https://github.com/seba-pas" className="btn">
              github
            </a>
            <a
              href="https://vercel.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              livedemo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>this is a portfolio item title</h3>
          <div className="portfolio__items-cta">
            <a href="https://github.com/seba-pas" className="btn">
              github
            </a>
            <a
              href="https://vercel.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              livedemo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
