import styles from './Nosotros.module.css';

export default function QuienesSomos() {
  return (
    <div className={styles.container}>
      {/* Sección Quiénes Somos */}
      <section className={styles.section}>
        <h1 className={styles.mainTitle}>Quienes somos</h1>
        <p className={styles.description}>
          Somos una empresa dedicada al transporte de mercancía a nivel nacional, 
          recorriendo ciudades importantes de México, teniendo de experiencia 25 años 
          y siempre dando el mejor servicio
        </p>
      </section>

      {/* Sección Nuestra Historia */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Nuestra Historia</h2>
        
        <div className={styles.grid}>
          {/* Misión */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Misión</h3>
            <p className={styles.cardText}>
              Ser el socio estratégico de nuestros clientes, ofreciendo soluciones de 
              logística y transporte integrales, eficientes y confiables. Nos comprometemos 
              a entregar sus mercancías en tiempo y en perfectas condiciones.
            </p>
          </div>

          {/* Visión */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Visión</h3>
            <p className={styles.cardText}>
              Consolidarnos como la empresa líder e innovadora en soluciones de transporte 
              y logística a nivel Nacional. Ser reconocidos por nuestra excelencia operativa, 
              el uso de tecnología de vanguardia y el compromiso sostenible con el medio 
              ambiente y la sociedad.
            </p>
          </div>

          {/* Valores */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Valores</h3>
            <div className={styles.values}>
              <div className={styles.valueItem}>
                <strong>Integridad y Transparencia</strong>
                <p>Actuamos con honestidad, ética y profesionalismo en todas nuestras operaciones. Mantenemos una comunicación clara y transparente con nuestros clientes y colaboradores.</p>
              </div>
              <div className={styles.valueItem}>
                <strong>Compromiso con el Cliente</strong>
                <p>Enfocamos nuestros esfuerzos en superar las expectativas de nuestros clientes, adaptando nuestros servicios a sus necesidades específicas y garantizando la entrega segura y puntual.</p>
              </div>
              <div className={styles.valueItem}>
                <strong>Eficiencia Operacional</strong>
                <p>Buscamos constantemente la optimización de procesos, el uso inteligente de la tecnología y la gestión eficaz de recursos para ofrecer servicios de alta calidad a costos competitivos.</p>
              </div>
              <div className={styles.valueItem}>
                <strong>Seguridad</strong>
                <p>Priorizamos la seguridad de nuestro personal, la mercancía transportada y los vehículos. Cumplimos rigurosamente con todas las normativas de seguridad y transporte.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Servicios */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Nuestros servicios incluyen</h2>
        <div className={styles.services}>
          <div className={styles.serviceItem}>Servicio Especializados</div>
          <div className={styles.serviceItem}>Servicio de almacenamiento</div>
          <div className={styles.serviceItem}>Caja seca y plataforma</div>
          <div className={styles.serviceItem}>Rastreo y monitoreo 24/7</div>
        </div>
      </section>
    </div>
  );
}