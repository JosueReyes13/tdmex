import React from "react";
import styles from "./styles/Video.module.css";

const Video = ({
  videoSrc,
  title,
  subtitle,
  buttonText,
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

      <div className={contentClass} style={{ color: textColor }}>
        {title && <h1 className={titleClass}>{title}</h1>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {buttonText && (
          <button className={styles.ctaButton} onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Video;
