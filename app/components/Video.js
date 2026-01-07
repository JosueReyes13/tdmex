"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./styles/Video.module.css";

const Video = ({
  videoSrc,
  title,
  subtitle,
  className = "",
  overlay = false,
  overlayVariant = "default",
  height = "fullHeight",
  muted = true,
  autoPlay = true,
  loop = true,
  playsInline = true,
  titleSize = "large",
  textColor = "white",
  textAlign = "center",
  buttonText = "Contáctanos",
  showButton = true,
  buttonVariant = "primary",
  // Nuevas props para WhatsApp
  whatsappNumber = "+523310766585",
  whatsappMessage = "Hola, me gustaría obtener más información", // Mensaje predefinido
  buttonLink, // Para enlaces normales (opcional)
}) => {
  const containerClass = `${styles.container} ${styles[height]} ${className}`;
  const overlayClass = `${styles.overlay} ${styles[overlayVariant]}`;
  const titleClass = `${styles.title} ${styles[titleSize]}`;
  const contentClass = `${styles.content} ${styles[textAlign]}`;
  const buttonClass = `${styles.ctaButton} ${styles[buttonVariant]}`;

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.4 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    if (whatsappNumber) {
      // Abrir WhatsApp
      const formattedNumber = whatsappNumber.replace(/\D/g, ""); // Solo números
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");
    } else if (buttonLink) {
      // Enlace normal
      window.location.href = buttonLink;
    }
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
        viewport={{ once: false, amount: 0.3 }}
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

        {showButton && (
          <motion.button
            className={buttonClass}
            onClick={handleButtonClick}
            variants={buttonAnimation}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {buttonText}
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default Video;
