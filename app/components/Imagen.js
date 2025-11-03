import styles from "./styles/Imagen.module.css";

export default function Imagen() {
  const imagenes = [
    {
      id: 1,
      imagen: "./fotos/EFICACES.jpg",
      alt: "Descrioncion de imagen",
      titulo: "Primer valor",
      descripcion:
        "In velit voluptate veniam sit consequat ex mollit. Esse nostrud in deserunt nisi aute.",
      width: 300,
      height: 200,
    },
    {
      id: 2,
      imagen: "./fotos/CRUZANDO-FRONTERAS.jpg",
      alt: "Descrioncion de imagen",
      titulo: "Segundo Valor",
      descripcion:
        "Aliqua id fugiat ut ut enim exercitation velit qui ut consectetur qui adipisicing consectetur consequat. Ex tempor ad labore culpa enim aute amet tempor id dolor reprehenderit non do.",
      width: 300,
      height: 200,
    },
    {
      id: 3,
      imagen: "./fotos/CRUZANDO-FRONTERAS.jpg",
      alt: "Descrioncion de imagen",
      titulo: "Tercer valor",
      descripcion:
        "Aliqua id fugiat ut ut enim exercitation velit qui ut consectetur qui adipisicing consectetur consequat. Ex tempor ad labore culpa enim aute amet tempor id dolor reprehenderit non do.",
      width: 300,
      height: 200,
    },
  ];

  return (
    <section className={styles.gallery}>
      <div className={styles.header}>
        <h2 className={styles.mainTitle}>Transporte TDMEX</h2>
        <p className={styles.mainDescription}>
          Non dolor cillum eu fugiat nisi tempor eiusmod fugiat est incididunt
          ipsum nulla. Magna voluptate sunt non nisi nostrud laboris pariatur
          eiusmod. Do cupidatat veniam occaecat ullamco aliquip amet non ipsum
          elit labore quis eiusmod aliqua mollit. Consequat eiusmod
          reprehenderit minim fugiat Lorem eu minim. Enim consequat ut veniam
          nostrud ullamco eiusmod ut dolore ipsum cillum.
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
            <p className={styles.description}>{item.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
