import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Some</h5>
      <h2>Recent Experince</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="noe" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />

              <h5>Bootcamp</h5>
              <small>800+ Hours</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />

              <h5>Team work</h5>
              <small>Projects</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />

              <h5>Individual</h5>
              <small>Projects</small>
            </article>
          </div>
          <p>
            Who am I?<br></br>
            Innovative Programmer striving to make the world a more
            unified and connected place. A creative thinker, adept in software
            development and working with various data structures. Proficient in
            various platforms, languages, and embedded systems. Able to
            effectively self-manage during independent projects, as well as
            collaborate as part of a productive team. <br></br>
            Why me?<br></br>
            I am a creative
            thinker capable of resolving problems without conflicts. Always
            curious and learning about new technologies.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
