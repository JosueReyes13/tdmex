import styles from "./Nosotros.module.css";
import Video from "../components/Video";
import CartaVolteable from "../components/CartaVolteable";

export default function QuienesSomos() {
  return (
    <div className={styles.container}>
      <div>
        <Video
          videoSrc="/fotos/TDMEX 2.mp4"
          title="Quienes somos"
          subtitle="Somos una empresa dedicada al transporte de mercancía a nivel
          nacional, recorriendo ciudades importantes de México, teniendo de
          experiencia 25 años y siempre dando el mejor servicio"
          overlay={true}
          overlayVariant="overlayDark"
          titleSize="xlarge"
          textAlign="center"
        />
      </div>

      {/* Sección Nuestra Historia */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Nuestra Historia</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Misión</h3>
            <p className={styles.cardText}>
              Ser el socio estratégico de nuestros clientes, ofreciendo
              soluciones de logística y transporte integrales, eficientes y
              confiables. Nos comprometemos a entregar sus mercancías en tiempo
              y en perfectas condiciones.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Visión</h3>
            <p className={styles.cardText}>
              Consolidarnos como la empresa líder e innovadora en soluciones de
              transporte y logística a nivel Nacional. Ser reconocidos por
              nuestra excelencia operativa, el uso de tecnología de vanguardia y
              el compromiso sostenible con el medio ambiente y la sociedad.
            </p>
          </div>
        </div>
        <div className={styles.containerCartas}>
          <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
          <div className={styles.cartasvolteables}>
            <CartaVolteable
              tituloFrente="Integridad y Transparencia"
              contenidoAtras="Actuamos con honestidad, ética y profesionalismo en todas nuestras operaciones. Mantenemos una comunicación clara y transparente con nuestros clientes y colaboradores."
              varianteAtras="exito"
            />
            <CartaVolteable
              tituloFrente="Compromiso con el Cliente"
              contenidoAtras="Enfocamos nuestros esfuerzos en superar las expectativas de nuestros clientes, adaptando nuestros servicios a sus necesidades específicas y garantizando la entrega segura y puntual."
              varianteAtras="exito"
            />
            <CartaVolteable
              tituloFrente="Eficiencia Operacional"
              contenidoAtras="Buscamos constantemente la optimización de procesos, el uso inteligente de la tecnología y la gestión eficaz de recursos para ofrecer servicios de alta calidad a costos competitivos."
              varianteAtras="exito"
            />
            <CartaVolteable
              tituloFrente="Seguridad"
              contenidoAtras="Priorizamos la seguridad de nuestro personal, la mercancía transportada y los vehículos. Cumplimos rigurosamente con todas las normativas de seguridad y transporte."
              varianteAtras="exito"
            />
          </div>
        </div>
        {/* Sección Servicios */}
        <h2 className={styles.sectionTitle}>Nuestros servicios incluyen</h2>
        <div className={styles.services}>
          <div className={styles.serviceItem}>
            <div className={styles.serviceText}>Servicios Especializados</div>
            <i className={`fas fa-tools ${styles.serviceIcon}`}></i>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceText}>Servicio de almacenamiento</div>
            <i className={`fas fa-warehouse ${styles.serviceIcon}`}></i>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceText}>Caja seca y plataforma</div>
            <i className={`fas fa-truck ${styles.serviceIcon}`}></i>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceText}>Rastreo y monitoreo 24/7</div>
            <i className={`fas fa-map-marker-alt ${styles.serviceIcon}`}></i>
          </div>
        </div>
      </section>
    </div>
  );
}
