import styles from "./Caledar.module.css";
import Truck from "../components/Camion";

export default function Calendar() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Proximamente</h1>;
      <Truck />
    </div>
  );
}
