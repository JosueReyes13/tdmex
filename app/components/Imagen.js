"use client";

import styles from "./styles/Imagen.module.css";
import { FaCheck } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Imagen() {
  const imagenes = [
    {
      id: 1,
      imagen: "./fotos/Primervalor.jpeg",
      alt: "Transporte Terrestre de Carga",
      titulo: "Transporte Terrestre de Carga",
      descripcion: [
        "Servicio de transporte de mercancías a nivel urbano, nacional e internacional.",
        "Flota moderna de camiones, remolques y vehículos especializados.",
        "Seguimiento satelital en tiempo real y control de rutas.",
      ],
      width: 300,
      height: 200,
    },
    {
      id: 2,
      imagen: "./fotos/Segudovalor.jpeg",
      alt: "Logística Integral",
      titulo: "Logística Integral",
      descripcion: [
        "Planificación, coordinación y ejecución de toda la cadena logística.",
        "Administración de inventarios y control de existencias.",
        "Optimización de rutas y tiempos de entrega.",
      ],
      width: 300,
      height: 200,
    },
    {
      id: 3,
      imagen: "./fotos/Tercervalor.jpeg",
      alt: "Seguro de Mercancías",
      titulo: "Seguro de Mercancías",
      descripcion: [
        "Servicio de seguro cobertura amplia para su mercancía.",
        "Respuesta en Minutos y Confianza en las operaciones logísticas.",
        "Cobertura personalizada, Cumplimiento de normativas.",
      ],
      width: 300,
      height: 200,
    },
  ];

  // Configuración de animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Retraso entre cada elemento hijo
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Referencia para detectar cuando el componente está en vista
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false, // Cambiado a false para que se active cada vez
    threshold: 0.3, // Se activa cuando el 30% del componente es visible
  });

  return (
    <section className={styles.gallery} ref={sectionRef}>
      <div className={styles.header}>
        <motion.h2
          className={styles.mainTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
        >
          Transporte TDMEX
        </motion.h2>
        <motion.p
          className={styles.mainDescription}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Transportes TDMEX es una compañía especializada en servicios
          integrales de logística y transporte, orientada a ofrecer soluciones
          eficientes, seguras y personalizadas para la gestión del flujo de
          mercancías a nivel nacional e internacional. Nuestra misión es
          garantizar la entrega puntual y segura de los productos de nuestros
          clientes, optimizando tiempos y costos mediante la innovación
          tecnológica y un equipo altamente calificado.
        </motion.p>
      </div>

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {imagenes.map((item) => (
          <motion.div
            key={item.id}
            className={styles.galleryItem}
            variants={itemVariants}
          >
            <motion.div
              className={styles.imageContainer}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={item.imagen}
                alt={item.alt}
                className={styles.image}
                width={item.width}
                height={item.height}
              />
            </motion.div>
            <h3 className={styles.title}>{item.titulo}</h3>
            <ul className={styles.descriptionList}>
              {item.descripcion.map((punto, index) => (
                <motion.li
                  key={index}
                  className={styles.descriptionItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <FaCheck className={styles.checkIcon} />
                  <span className={styles.descriptionText}>{punto}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
