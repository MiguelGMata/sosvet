import React from 'react';
import ContactForm from '../../molecules/formcontact/ContactForm'; 
import Logo from '../../atoms/logoBtn/Logo';
import './contactScreen.css'; 

const ContactScreen = () => {
  return (
    <main className="contact-container">
      <section className="contact-form">
        <Logo className="logo-general" image="./logososvet.png" />
          <p>Pour toutes informations contactez-nous</p>
        </section>
      <ContactForm/>
    </main>
  );
};

export default ContactScreen;
