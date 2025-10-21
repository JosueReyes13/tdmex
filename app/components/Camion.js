"use client";
import styles from "./styles/Camion.module.css";

const Truck = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loopWrapper}>
        <div className={styles.mountain}></div>
        <div className={styles.hill}></div>

        {/* Más árboles para llenar el espacio */}
        <div className={`${styles.tree} ${styles.tree1}`}></div>
        <div className={`${styles.tree} ${styles.tree2}`}></div>
        <div className={`${styles.tree} ${styles.tree3}`}></div>
        <div className={`${styles.tree} ${styles.tree4}`}></div>
        <div className={`${styles.tree} ${styles.tree5}`}></div>

        {/* Más rocas */}
        <div className={`${styles.rock} ${styles.rock1}`}></div>
        <div className={`${styles.rock} ${styles.rock2}`}></div>
        <div className={`${styles.rock} ${styles.rock3}`}></div>

        <div className={styles.truck}></div>
        <div className={styles.wheels}></div>
      </div>
    </div>
  );
};

export default Truck;
