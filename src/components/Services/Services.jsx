import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Other Skills</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Git</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Github</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SCRUM</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web3 JS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>React Native</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deploy</p>
            </li>
          </ul>
        </article>
        {/*end of ui/ux*/}
        <article className="service">
          <div className="service__head">
            <h3>Soft Skills</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creative</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Proactive</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Team Player</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Time Management</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Agile Learning</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Planning and Organization</p>
            </li>
          </ul>
        </article>
        {/* end of second */}
        <article className="service">
          <div className="service__head">
            <h3>Others</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>English (Proficient C2)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Material UI</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Chakra UI</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Postman</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Photoshop</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Photography</p>
            </li>
          </ul>
        </article>
        {/* end of content creation */}
      </div>
    </section>
  );
};

export default Services;
