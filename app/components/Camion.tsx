import styles from "./styles/Camion.module.css";

export default function Truck() {
  return (
    <div className={styles.container}>
      <div className={styles.scene} aria-label="Camión avanzando">
        <div className={styles.sun} />
        <div className={styles.hills} />
        <div className={styles.road} />
        <div className={styles.truck}>
          <div className={styles.trailer}><span>TDMEX</span></div>
          <div className={styles.cabin}><div className={styles.window} /></div>
          <div className={styles.wheelOne} /><div className={styles.wheelTwo} />
        </div>
      </div>
    </div>
  );
}
