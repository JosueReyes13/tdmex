"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import emailjs from '@emailjs/browser';
import styles from "./Contacto.module.css";

function Contacto() {
  const form = useRef();
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight && sectionBottom > 0) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fksozsc",
        "template_wbs7kf8",
        form.current,
        {
          publicKey: "7_DjYNePQDfz9oLar",
        }
      )
      .then(
        () => {
          alert("Mensaje enviado con éxito");
          form.current.reset();
        },
        (error) => {
          alert("Hubo un error al enviar el mensaje. Intenta de nuevo.");
          console.error("Error:", error);
        }
      );
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <motion.section
      id="contacto"
      className={styles.contacto}
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
    >
      <div className={styles.container}>
        <h2 className={styles.contactoTitulo}>CONTACTO</h2>
        <p className={styles.contactoSubtitulo}>
          Si tiene alguna duda o sugerencia no dude en contactarnos. Le responderemos a la brevedad.
        </p>

        <div className={styles.contactoContent}>
          <motion.div
            className={styles.contactoInfo}
            variants={itemVariants}
            initial="hidden"
            animate={controls}
          >
            <div className={styles.infoItem}>
              <span className={styles.icon}>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <div>
                <h3>Domicilio:</h3>
                <p>Av. Marcos Montero Ruiz 148a col. La capacha, San pedro Tlaquepaque Jalisco</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.icon}>
                <i className="fas fa-envelope"></i>
              </span>
              <div>
                <h3>Email:</h3>
                <p>litdmex@gmail.com</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.icon}>
                <i className="fas fa-phone"></i>
              </span>
              <div>
                <h3>Teléfono:</h3>
                <p>33 1076 6585</p>
                <p>33 3870 1028</p>
              </div>
            </div>
            <div className={styles.mapContainer}>
              <img 
                src="/fotos/TDMEX1.png" 
                alt="Ubicación de la empresa" 
                className={styles.mapImage}
              />
            </div>

          </motion.div>

          <motion.div
            className={styles.contactoFormulario}
            variants={formVariants}
            initial="hidden"
            animate={controls}
          >
            <div className={styles.formIntro}>
              <h3>¿Necesitas más información?</h3>
              <p>Para más información o dudas, póngase en contacto con nosotros. Estaremos encantados de atenderle y resolver cualquier consulta que pueda tener.</p>
            </div>
            
            <form ref={form} className={styles.contactForm} onSubmit={sendEmail}>
              <div className={styles.formGroup}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" placeholder="Nombre" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" required />
                  </div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Asunto</label>
                <input type="text" id="subject" name="subject" placeholder="Asunto" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Duda o sugerencia</label>
                <textarea id="message" name="message" placeholder="Duda o sugerencia" rows="5" required></textarea>
              </div>
              <button type="submit" className={styles.ctaC}>
                <i className="fas fa-paper-plane"></i> Enviar
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contacto;