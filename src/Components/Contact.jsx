import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kai3u0e",
        "template_vy14e4l",
        form.current,
        "a9cISZdXIntVlrzAv"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("mensaje enviado");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const gitHubProfile = () =>
    (location.href = "https://github.com/KarolPalacios");
  const linkedIn = () =>
    (location.href =
      "https://www.linkedin.com/in/karol-dayana-palacios-nieva-b06ba9252/");

  return (
    <div id="contacto" className="contact">
      <h2>Contáctame</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-content">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="user_name" id="name" placeholder="Nombre"/>
        </div>
        <div className="form-content">
          <label htmlFor="email">Email</label>
          <input type="email" name="user_email" id="email" placeholder="Email"/>
        </div>
        <div className="form-content">
          <label htmlFor="message">Mensaje</label>
          <textarea name="message" id="message" cols="30" rows="6" placeholder="Mensaje"></textarea>
        </div>

        <button type="submit" className="form-btn">Enviar</button>
      </form>

      <div className="social-contact">
        <i className="fa-brands fa-github" onClick={gitHubProfile}></i>
        <i className="fa-brands fa-linkedin" onClick={linkedIn}></i>
      </div>
    </div>
  );
};

export default Contact;
