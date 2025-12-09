import Image from "next/image";
import styles from "./page.module.css";
import Video from "@/app/components/Video";
import Mapa from "./components/Mapa";
import Imagen from "./components/Imagen";

export default function Home() {
  return (
    <div>
      <div>
        <Video
          videoSrc="/fotos/VIDEO TDMEX.mp4"
          title="TDMEX"
          subtitle="La mejor desición en transporte"
          overlay={true}
          overlayVariant="overlayDark"
          titleSize="xlarge"
          textAlign="center"
        />
      </div>
      <div>
        <Imagen />
      </div>
      <div>
        <Mapa />
      </div>
    </div>
  );
}
