"use client";

import { FormEvent, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Contacto.module.css";

export default function Contacto() {
  const form = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useInView(sectionRef, { once: true, amount: 0.1 });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function sendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const response = await fetch("/api/contact", { method: "POST", body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))), headers: { "Content-Type": "application/json" } });
    setStatus(response.ok ? "success" : "error");
    if (response.ok) form.current?.reset();
  }

  return <motion.section ref={sectionRef} id="contacto" className={styles.contacto} initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}>
    <div className={styles.container}>
      <h2 className={styles.contactoTitulo}>CONTACTO</h2>
      <p className={styles.contactoSubtitulo}>Si tiene alguna duda o sugerencia no dude en contactarnos. Le responderemos a la brevedad.</p>
      <div className={styles.contactoContent}>
        <div className={styles.contactoInfo}>
          <div className={styles.infoItem}><span className={styles.icon}><i className="fas fa-map-marker-alt" /></span><div><h3>Domicilio:</h3><p>Av. Marcos Montero Ruiz 148a col. La capacha, San Pedro Tlaquepaque, Jalisco</p></div></div>
          <div className={styles.infoItem}><span className={styles.icon}><i className="fas fa-envelope" /></span><div><h3>Email:</h3><p>litdmex@gmail.com</p></div></div>
          <div className={styles.infoItem}><span className={styles.icon}><i className="fas fa-phone" /></span><div><h3>Teléfono:</h3><p>33 1076 6585</p><p>33 3870 1028</p></div></div>
          <div className={styles.mapContainer}><img src="/fotos/TDMEX1.png" alt="Ubicación de la empresa" className={styles.mapImage} /></div>
        </div>
        <motion.div className={styles.contactoFormulario} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: .2 }}>
          <div className={styles.formIntro}><h3>¿Necesitas más información?</h3><p>Para más información o dudas, póngase en contacto con nosotros. Estaremos encantados de atenderle.</p></div>
          <form ref={form} className={styles.contactForm} onSubmit={sendEmail}>
            <div className={styles.formRow}><div className={styles.formGroup}><label htmlFor="name">Nombre</label><input id="name" name="from_name" placeholder="Nombre" required /></div><div className={styles.formGroup}><label htmlFor="email">Email</label><input id="email" name="from_email" type="email" placeholder="Email" required /></div></div>
            <div className={styles.formGroup}><label htmlFor="subject">Asunto</label><input id="subject" name="subject" placeholder="Asunto" required /></div>
            <div className={styles.formGroup}><label htmlFor="message">Duda o sugerencia</label><textarea id="message" name="message" placeholder="Duda o sugerencia" rows={5} required /></div>
            <button type="submit" className={styles.ctaC} disabled={status === "sending"}><i className="fas fa-paper-plane" /> {status === "sending" ? "Enviando..." : "Enviar"}</button>
            {status === "success" && <p role="status">Mensaje enviado con éxito.</p>}{status === "error" && <p role="alert">No se pudo enviar. Intenta de nuevo.</p>}
          </form>
        </motion.div>
      </div>
    </div>
  </motion.section>;
}
