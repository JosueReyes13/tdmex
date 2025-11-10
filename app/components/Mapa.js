"use client";

import styles from "./styles/Mapa.module.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Mapa() {
  const ciudades = [
    "Ciudad de México",
    "Monterrey",
    "Guadalajara",
    "Querétaro",
    "Toluca",
    "Guanajuato",
    "Manzanillo",
    "Lázaro Cárdenas",
  ];
  //controlador de visivilidad
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef, {
    once: false,
    threshold: 0.4,
  });

  const imagenAnimacion = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textoAnimacion = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contenedorListaAnimacion = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listaAnimacion = {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className={styles.container} ref={sectionRef}>
      <motion.div
        className={styles.imageContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={imagenAnimacion}
      >
        <img
          src="/fotos/mapa.png"
          alt="Imagen no disponible"
          className={styles.image}
        />
      </motion.div>
      <motion.div
        className={styles.textContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={textoAnimacion}
      >
        <h2 className={styles.heading}>Tu Carga Llega Donde Tú Necesitas</h2>
        <p className={styles.text}>
          Conectamos los puntos clave de México con un servicio de transporte
          logístico ágil y confiable. Llegamos a los corazones industriales y
          comerciales del país:
        </p>
        <motion.div
          className={styles.ciudadesWrapper}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={contenedorListaAnimacion}
        >
          <ul className={styles.ciudadesList}>
            {ciudades.map((ciudad, index) => (
              <motion.li
                key={index}
                className={styles.ciudadItem}
                variants={listaAnimacion}
              >
                {ciudad}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}
