import React, { useRef } from 'react';
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from 'emailjs-com'
import swal from "sweetalert";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_clbc2js', 'template_if9981d', form.current, 'sap6mqacVs54x8IHl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      swal("Thank you!", "Your message was sent to my personal email", "success");
  };




  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="container__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>sebastian.pastorenzi@gmail.com</h5>
            <a
              href="mailto:sebastian.pastorenzi@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Sebastian Pas</h5>
            <a href="http://m.me/sepaa" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>send me a message</h5>
            <a
              href="https://api.whatsapp.com/send?phone=543454144904"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
