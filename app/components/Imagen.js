import styles from "./styles/Imagen.module.css";
import { FaCheck } from "react-icons/fa";

export default function Imagen() {
  const imagenes = [
    {
      id: 1,
      imagen: "./fotos/Primervalor.jpeg",
      alt: "Transporte Terrestre de Carga",
      titulo: "Transporte Terrestre de Carga",
      descripcion: [
        "Servicio de transporte de mercancías a nivel urbano, nacional e internacional.",
        "Flota moderna de camiones, remolques y vehículos especializados.",
        "Seguimiento satelital en tiempo real y control de rutas."
      ],
      width: 300,
      height: 200,
    },
    {
      id: 2,
      imagen: "./fotos/Segudovalor.jpeg",
      alt: "Logística Integral",
      titulo: "Logística Integral",
      descripcion: [
        "Planificación, coordinación y ejecución de toda la cadena logística.",
        "Administración de inventarios y control de existencias.",
        "Optimización de rutas y tiempos de entrega."
      ],
      width: 300,
      height: 200,
    },
    {
      id: 3,
      imagen: "./fotos/Tercervalor.jpeg",
      alt: "Seguro de Mercancías",
      titulo: "Seguro de Mercancías",
      descripcion: [
        "Servicio de seguro cobertura amplia para su mercancía.",
        "Respuesta en Minutos y Confianza en las operaciones logísticas.",
        "Cobertura personalizada, Cumplimiento de normativas."
      ],
      width: 300,
      height: 200,
    },
  ];

  return (
    <section className={styles.gallery}>
      <div className={styles.header}>
        <h2 className={styles.mainTitle}>Transporte TDMEX</h2>
        <p className={styles.mainDescription}>
          Transportes TDMEX es una compañía especializada en servicios integrales de 
          logística y transporte, orientada a ofrecer soluciones eficientes, seguras y 
          personalizadas para la gestión del flujo de mercancías a nivel nacional e 
          internacional. Nuestra misión es garantizar la entrega puntual y segura de 
          los productos de nuestros clientes, optimizando tiempos y costos mediante la 
          innovación tecnológica y un equipo altamente calificado.
        </p>
      </div>
      <div className={styles.container}>
        {imagenes.map((item) => (
          <div key={item.id} className={styles.galleryItem}>
            <div className={styles.imageContainer}>
              <img
                src={item.imagen}
                alt={item.alt}
                className={styles.image}
                width={item.width}
                height={item.height}
              />
            </div>
            <h3 className={styles.title}>{item.titulo}</h3>
            {/* Lista con íconos de React Icons */}
            <ul className={styles.descriptionList}>
              {item.descripcion.map((punto, index) => (
                <li key={index} className={styles.descriptionItem}>
                  <FaCheck className={styles.checkIcon} />
                  <span className={styles.descriptionText}>{punto}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}