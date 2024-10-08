import React, { useRef } from 'react';
import Title from '../../atoms/title/Title';
import Image from '../../atoms/image/image';
import { FaHeartbeat, FaAmbulance, FaPhoneAlt } from 'react-icons/fa';
import gsap from 'gsap';//biblioteca para efecto de scroll animado
import './cardVeterinarians.css';

const CardVeterinarians = ({ veterinarians }) => {
  // Referencia para el contenedor de las tarjetas
  const scrollContainerRef = useRef(null);

  // Funciones para el scroll horizontal
  const scrollLeft = () => {
    gsap.to(scrollContainerRef.current, {
      scrollLeft: scrollContainerRef.current.scrollLeft - 310,
      duration: 0.5, // tiempo en segundos
      ease: "sine.out"// suavizado
    });
  };

  const scrollRight = () => {
    gsap.to(scrollContainerRef.current, {
      scrollLeft: scrollContainerRef.current.scrollLeft + 310,
      duration: 0.5,
      ease: "sine.out"
    });
  };

  return (
    <div className="scroll-wrapper-vet">
      {/* Botones de desplazamiento */}
      <button className="scroll-button left" onClick={scrollLeft}>
        &lt;
      </button>

      {/* Contenedor de las tarjetas con scroll */}
      <div className="scroll-container-vet" ref={scrollContainerRef}>
        {veterinarians.map((vet) => (
          <div key={vet.id} className="card-veterinarians">
            <Image image={vet.pictures} width='100%' height='200px' className="card-veterinarians-Image " />
            <div className="card-header-veterinarians">
              <Title className="title-card">{vet.nom}</Title>
            </div>
            <div className="card-body-veterinarians">
              <p><strong>Adresse :</strong> {vet.adresse}</p>
              <p><strong>Lieux :</strong> {vet.lieux}</p>
              <p><strong>Postal :</strong> {vet.postal}</p>
              <p><a href={`tel:${vet.phone}`}><FaPhoneAlt /> </a> {vet.phone}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="scroll-button right" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default CardVeterinarians;


