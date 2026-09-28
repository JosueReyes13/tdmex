import styles from "./styles/CartaVolteable.module.css";

export default function CartaVolteable({
  tituloFrente,
  contenidoAtras,
  className = "",
  varianteAtras = "exito",
}) {
  return (
    <div className={`${styles.contenedorCarta} ${className}`}>
      <div className={styles.carta}>
        {/* Cara frontal */}
        <div className={`${styles.frente} `}>
          <h1 className={styles.titulo}>{tituloFrente}</h1>
        </div>

        {/* Cara posterior */}
        <div className={`${styles.atras} ${styles[varianteAtras]}`}>
          <div className={styles.contenido}>
            {typeof contenidoAtras === "string" ? (
              <p>{contenidoAtras}</p>
            ) : (
              contenidoAtras
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
