import styles from "./styles/Footer.module.css";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["footer-content"]}>
        
        {/* Sección superior con logo y navegación */}
        <div className={styles["footer-top"]}>
          <div className={styles["footer-logo"]}>
            <img src="/fotos/TDMEX3.png" alt="Logo" className={styles["footer-logo-image"]} />
          </div>
          
          <div className={styles["footer-nav"]}>
            <div className={styles["nav-column"]}>
              <h4>SOBRE NOSOTROS</h4>
              <ul>
                <li><a href="#">Nuestra historia</a></li>
                <li><a href="#">Equipo</a></li>
                <li><a href="#">Valores</a></li>
              </ul>
            </div>
            
            <div className={styles["nav-column"]}>
              <h4>PRODUCTOS</h4>
              <ul>
                <li><a href="#">Catálogo</a></li>
                <li><a href="#">Novedades</a></li>
                <li><a href="#">Ofertas</a></li>
              </ul>
            </div>
            
            <div className={styles["nav-column"]}>
              <h4>SERVICIOS</h4>
              <ul>
                <li><a href="#">Distribuidores</a></li>
                <li><a href="#">Online Store</a></li>
                <li><a href="#">Soporte</a></li>
              </ul>
            </div>
            
            <div className={styles["nav-column"]}>
              <h4>LEGAL</h4>
              <ul>
                <li><a href="#">Términos y Condiciones</a></li>
                <li><a href="#">Aviso de Privacidad</a></li>
                <li><a href="#">Contacto</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Sección media con redes sociales */}
        <div className={styles["footer-middle"]}>
          <div className={styles["footer-find-us"]}>
            <p>Encuéntranos en redes:</p>
          </div>
          
          <div className={styles["footer-social"]}>
            <a href="https://www.facebook.com/share/1B5nCrY6JH/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/estetica__race?igsh=dm9hNXB5bmFtZmRw" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@racespa?_t=ZM-8uxnPgoQ2PW&_r=1" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://wa.me/3334406091" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
        
        {/* Sección inferior con copyright */}
        <div className={styles["footer-bottom"]}>
          <p className={styles["footer-text"]}>TDMEX © {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;