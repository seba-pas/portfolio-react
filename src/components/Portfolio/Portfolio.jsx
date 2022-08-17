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
      github: "https://github.com/seba-pas/bring-it-app",
      demo: "https://bring-it-app.vercel.app/",
    },
    {
      id: 2,
      image: IMG2,
      title: "PI DOGS",
      github: "https://github.com/seba-pas/PI-Dogs",
      demo: "https://pi-dogs-neon.vercel.app/",
    },
    {
      id: 3,
      image: IMG3,
      title: "MEMORY CARD GAME",
      github: "https://github.com/seba-pas/MemoryCardGame-",
      demo: "https://memory-card-game-nine.vercel.app/",
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
                <h3>{e.title}</h3>
                <div className="portfolio__items-cta">
                  <a href={e.github} className="btn">
                    GitHub
                  </a>
                  <a
                    href={e.demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
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
