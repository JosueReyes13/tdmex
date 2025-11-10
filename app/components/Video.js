"use client";

import React from "react";
import { motion } from "framer-motion"; // Importar Framer Motion
import styles from "./styles/Video.module.css";

const Video = ({
  videoSrc,
  title,
  subtitle,
  onButtonClick,
  className = "",
  overlay = false,
  overlayVariant = "default",
  height = "fullHeight",
  muted = true,
  autoPlay = true,
  loop = true,
  playsInline = true,
  // Nuevas props para estilos de texto
  titleSize = "large",
  textColor = "white",
  textAlign = "center",
}) => {
  const containerClass = `${styles.container} ${styles[height]} ${className}`;
  const overlayClass = `${styles.overlay} ${styles[overlayVariant]}`;

  // Clases dinámicas para texto
  const titleClass = `${styles.title} ${styles[titleSize]}`;
  const contentClass = `${styles.content} ${styles[textAlign]}`;

  // Animaciones para Framer Motion
  const textAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div className={containerClass}>
      <video
        className={styles.video}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
      >
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta el elemento video.
      </video>

      {overlay && <div className={overlayClass} />}

      <motion.div
        className={contentClass}
        style={{ color: textColor }}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false, // Para que se repita cada vez que sea visible
          amount: 0.3, // Se activa cuando el 30% del elemento es visible
        }}
        variants={staggerContainer}
      >
        {title && (
          <motion.h1 className={titleClass} variants={textAnimation}>
            {title}
          </motion.h1>
        )}
        {subtitle && (
          <motion.p className={styles.subtitle} variants={textAnimation}>
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Video;
