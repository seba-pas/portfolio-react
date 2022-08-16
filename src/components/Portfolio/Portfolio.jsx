import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Bring It",
      github: "https://github.com",
      demo: "https://vercel.com",
    },
    {
      id: 2,
      image: IMG2,
      title: "PI DOGS",
      github: "https://github.com",
      demo: "https://vercel.com",
    },
    {
      id: 3,
      image: IMG3,
      title: "MEMORY CARD GAME",
      github: "https://github.com",
      demo: "https://vercel.com",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data &&
          data.map((e) => {
            return (
              <article key={e.id} className="portfolio__items">
                <div className="portfolio__item-image">
                  <img src={e.image} alt="" />
                </div>
                <h3>this is a portfolio item title</h3>
                <div className="portfolio__items-cta">
                  <a href={e.github} className="btn">
                    github
                  </a>
                  <a
                    href={e.demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    livedemo
                  </a>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default Portfolio;
