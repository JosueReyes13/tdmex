import styles from "./styles/Mapa.module.css";

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
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="/fotos/mapa.png"
          alt="Imagen no disponible"
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>Tu Carga Llega Donde Tú Necesitas</h2>
        <p className={styles.text}>
          Conectamos los puntos clave de México con un servicio de transporte
          logístico ágil y confiable. Llegamos a los corazones industriales y
          comerciales del país:
        </p>
        <div className={styles.ciudadesWrapper}>
          <ul className={styles.ciudadesList}>
            {ciudades.map((ciudad, index) => (
              <li key={index} className={styles.ciudadItem}>
                {ciudad}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
