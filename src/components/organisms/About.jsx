import React from 'react';
import './Intro.css';

const About = () => {
  return (
    <div className="intro-container">
      <div className="intro-left">
        <h2 className="highlight">¿Por qué adoptar un perro?</h2>
        <p className="tm-text">
        <strong>Salvas una vida:</strong> Cada año, millones de perros son abandonados o terminan en refugios. Al adoptar, estás dando a un perro la segunda oportunidad que se merece.
        </p>
        <p className="tm-text">
        <strong>la cría irresponsable:</strong> Muchos criadores no regulados o “fábricas de cachorros” contribuyen al problema de la superpoblación de mascotas. Al adoptar, estás eligiendo no apoyar estas prácticas.
        </p>
        <p className="tm-text">
        <strong>un gran compañero:</strong> Los perros son conocidos como los mejores amigos del hombre por una razón. Ofrecen amor incondicional, lealtad y compañía.
        </p>
        <p className="tm-text">
        <strong>Educar a los más jóvenes:</strong> Adoptar un perro puede ser una excelente manera de enseñar a los niños sobre la responsabilidad y la empatía.
        </p>
        <p className="tm-text">
        <strong>Es menos costoso:</strong> A menudo, los perros de refugio ya están vacunados, desparasitados y esterilizados, lo que puede reducir los costos iniciales de tener un perro.
        </p>
        <p className="tm-text">
        <strong>Recuerda, al adoptar, no solo estás salvando una vida, sino que también estás ganando un amigo para toda la vida. 🐾❤️</strong>
        </p>
      </div>
      
    </div>
  );
};

export default About;
