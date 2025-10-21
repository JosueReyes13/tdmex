import React from "react";
import styles from "./styles/Video.module.css";

const Video = ({ videoSrc, posterSrc }) => {
  return (
    <section className={styles.videoSection}>
      <video
        className={styles.videoElement}
        autoPlay
        muted
        loop
        playsInline
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </section>
  );
};

export default Video;
