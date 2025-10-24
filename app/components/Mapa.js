import styles from "./styles/Mapa.module.css";

const Mapa = ({ imageSrc, heading, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={imageSrc}
          alt="Imagen no disponible"
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Mapa;
