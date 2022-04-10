import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Para saber un poco sobre mi Xavier Garcia</h3>
        <p>
         Soy una persona que le gusta lo que hace, por ejemplo la tecnologia
          es un tema del cual tengo un buen conocimiento,
          llegando a recibir muchos cursos los cuales me han ayudado a 
          tener un conocimiento mas amplio.
        </p>
      </div>
      <div className="about-img">
        <img
          src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
