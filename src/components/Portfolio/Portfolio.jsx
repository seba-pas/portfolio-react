import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/quotes.jpg";
import NATIVE from '../../assets/IMG_20220904_151852_081.jpg'
import CHANCHI from '../../assets/chanchi.jpg'

const Portfolio = () => {
  const data = [   
    {
      id: 1,
      image: IMG4,
      title: "Quotes App",
      github: "https://github.com/seba-pas/QuotesApp",
      demo: "https://quotes-sebapas.vercel.app/",
    
    },
     {
      id: 12,
      image: CHANCHI,
      title: "Chanchito(Piggy Bank)",
      github: "https://github.com/seba-pas/chanchito",
      demo: "https://www.youtube.com/watch?v=2WfPkP7u6wY",
    
    },
      {
      id: 10,
      image: NATIVE,
      title: "Quizz Time (Mobile)",
      github: "https://github.com/seba-pas/quizztimenative",
      demo: "https://vimeo.com/746382143",
    
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
    {
      id: 4,
      image: IMG1,
      title: "Bring It",
      github: "https://github.com/seba-pas/bring-it-app",
      demo: "https://bring-it-app.vercel.app/",
    
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
