import styles from './Unidades.module.css';

export default function Unidades() {
  const unidades = [
    {
      id: 1,
      tipo: "Camión ligero (3 a 8 toneladas)",
      descripcion: "Ideal para transporte urbano o de corta distancia, perfecto para carga ligera y entregas rápidas.",
      imagen: "/fotos/unidad3-8.jpg",
      categoria: "ligero",
      caracteristicas: [
        "Monitoreo satelital 24/7",
        "Sistema de seguimiento GPS",
        "Caja seca refrigerada",
        "Seguridad con cámaras IA"
      ]
    },
    {
      id: 2,
      tipo: "Camión mediano (9 a 15 toneladas)",
      descripcion: "Excelente para distancias medias, con capacidad para grandes volúmenes sin comprometer la eficiencia.",
      imagen: "/fotos/unidad9-15.jpg",
      categoria: "mediano",
      caracteristicas: [
        "Monitoreo satelital 24/7",
        "Plataforma adaptable",
        "Sistema de clima controlado",
        "Rastreo en tiempo real"
      ]
    },
    {
      id: 3,
      tipo: "Camión pesado (25 toneladas - Caja seca)",
      descripcion: "Perfecto para transporte seguro y protegido de carga pesada a largas distancias.",
      imagen: "/fotos/unidad25-caja.jpg",
      categoria: "pesado",
      caracteristicas: [
        "Monitoreo satelital 24/7",
        "Caja seca hermética",
        "Control de temperatura",
        "Sensores de impacto"
      ]
    },
    {
      id: 4,
      tipo: "Camión pesado (25 toneladas - Plataforma)",
      descripcion: "Ideal para maquinaria o materiales de gran tamaño, gracias a su plataforma abierta y resistente.",
      imagen: "/fotos/25tons.jpg",
      categoria: "pesado",
      caracteristicas: [
        "Monitoreo satelital 24/7",
        "Plataforma extensible",
        "Sistema de amarre reforzado",
        "Capacidad para carga extra-dimensional"
      ]
    },
  ];

  const categorias = {
    ligero: "Unidades Ligeras (3-8 ton)",
    mediano: "Unidades Medianas (9-15 ton)", 
    pesado: "Unidades Pesadas (25 ton)"
  };

  const unidadesPorCategoria = unidades.reduce((acc, unidad) => {
    if (!acc[unidad.categoria]) {
      acc[unidad.categoria] = [];
    }
    acc[unidad.categoria].push(unidad);
    return acc;
  }, {});

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nuestras Unidades</h1>
      
      {/* Sección de Presentación */}
      <div className={styles.presentacion}>
        <p className={styles.intro}>
          Nuestro compromiso es brindar un servicio de primer nivel, por lo tanto, nuestras unidades también deben serlo.
        </p>
        <p className={styles.descripcion}>
          Nuestras unidades 2020-2024 cuentan con lo último en tecnología con el objetivo de respaldar la confianza 
          de nuestros clientes, por lo cual todas las cargas van siendo monitoreadas así como evaluadas con nuestras 
          cámaras de Inteligencia Artificial que nos permiten accionar y prevenir ante cualquier eventualidad.
        </p>
        <p className={styles.descripcion}>
          Así mismo brindamos la visibilidad 24/7 por nuestra Torre de Control para tranquilidad de nuestros clientes.
        </p>
        
        {/* Explicación de tipos de carga */}
        <div className={styles.tiposCarga}>
          <h2 className={styles.subtitle}>Tipos de Carga</h2>
          <div className={styles.tiposGrid}>
            <div className={styles.tipoItem}>
              <h3>Carga Seca</h3>
              <p>Ideal para mercancías que requieren protección contra humedad y elementos externos. Perfecta para productos empaquetados, alimentos y materiales sensibles.</p>
            </div>
            <div className={styles.tipoItem}>
              <h3>Plataforma</h3>
              <p>Diseñada para carga voluminosa y pesada como maquinaria, equipo industrial y materiales de construcción. Ofrece fácil acceso para carga y descarga.</p>
            </div>
            <div className={styles.tipoItem}>
              <h3>Monitoreo Avanzado</h3>
              <p>Todas nuestras unidades cuentan con sistema de monitoreo satelital, cámaras de IA y seguimiento GPS en tiempo real las 24 horas del día.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Unidades por Categoría */}
      {Object.entries(unidadesPorCategoria).map(([categoria, unidadesCategoria]) => (
        <div key={categoria} className={styles.categoriaSection}>
          <h2 className={styles.categoriaTitle}>{categorias[categoria]}</h2>
          <div className={styles.grid}>
            {unidadesCategoria.map((unidad) => (
              <div key={unidad.id} className={styles.card}>
                <img src={unidad.imagen} alt={unidad.tipo} className={styles.image} />
                <div className={styles.cardBody}>
                  <h2 className={styles.cardTitle}>{unidad.tipo}</h2>
                  <p className={styles.cardText}>{unidad.descripcion}</p>
                  
                  {/* Características adicionales */}
                  <div className={styles.caracteristicas}>
                    <h4 className={styles.caracteristicasTitle}>Características:</h4>
                    <ul className={styles.caracteristicasList}>
                      {unidad.caracteristicas.map((caracteristica, index) => (
                        <li key={index} className={styles.caracteristicaItem}>
                          {caracteristica}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}