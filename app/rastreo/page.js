import styles from "./Caledar.module.css";
import Truck from "../components/Camion";

export default function Calendar() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Proximamente</h1>;
      <p className={styles.description}>
        Trabajamos para brindarle un mejor servicio
      </p>
      <Truck />
    </div>
  );
}
