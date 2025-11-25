"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import styles from "./Contacto.module.css";

function Contacto() {
  const form = useRef();
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef, {
    once: true,
    threshold: 0.1,
  });

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bwlgmpo",
        "template_y5bdtzl",
        form.current,
        {
          publicKey: "5q22e5wdo3q9-U4nO",
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
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className={styles.container}>
        <h2 className={styles.contactoTitulo}>CONTACTO</h2>
        <p className={styles.contactoSubtitulo}>
          Si tiene alguna duda o sugerencia no dude en contactarnos. Le
          responderemos a la brevedad.
        </p>

        <div className={styles.contactoContent}>
          <motion.div
            className={styles.contactoInfo}
            variants={itemVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <div className={styles.infoItem}>
              <span className={styles.icon}>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <div>
                <h3>Domicilio:</h3>
                <p>
                  Av. Marcos Montero Ruiz 148a col. La capacha, San pedro
                  Tlaquepaque Jalisco
                </p>
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
            animate={isVisible ? "visible" : "hidden"}
          >
            <div className={styles.formIntro}>
              <h3>¿Necesitas más información?</h3>
              <p>
                Para más información o dudas, póngase en contacto con nosotros.
                Estaremos encantados de atenderle y resolver cualquier consulta
                que pueda tener.
              </p>
            </div>

            <form
              ref={form}
              className={styles.contactForm}
              onSubmit={sendEmail}
            >
              <div className={styles.formGroup}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="from_name"  // Cambiado para mejor compatibilidad con EmailJS
                      placeholder="Nombre"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="from_email"  // Cambiado para mejor compatibilidad con EmailJS
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Asunto"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Duda o sugerencia</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Duda o sugerencia"
                  rows="5"
                  required
                ></textarea>
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