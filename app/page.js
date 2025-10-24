import Image from "next/image";
import styles from "./page.module.css";
import Video from "@/app/components/Video";
import Mapa from "./components/Mapa";

export default function Home() {
  return (
    <div>
      <div>
        <Video
          videoSrc="/fotos/videoExample.mp4"
          title="TDMEX"
          subtitle="La mejor desicion en transporte"
          overlay={true}
          overlayVariant="overlayDark"
          titleSize="xlarge"
          textAlign="center"
        />
      </div>
      <div>
        <Mapa
          imageSrc="/fotos/mapa.png"
          heading="Tu Carga Llega Donde Tú Necesitas"
          text="Conectamos los puntos clave de México con un servicio de transporte logístico ágil y confiable. Llegamos a los corazones industriales y comerciales del país: Ciudad de México, Monterrey, Guadalajara, Querétaro, Toluca, Guanajuato, y los puertos clave de Manzanillo y Lázaro Cárdenas."
        />
      </div>
    </div>
  );
}
