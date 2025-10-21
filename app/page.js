import Image from "next/image";
import styles from "./page.module.css";
import Video from "@/app/components/Video";

export default function Home() {
  return (
    <div>
      {/* Video justo debajo del navbar - sin márgenes extra */}
      <Video
        className={styles.p}
        videoSrc="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
        posterSrc="https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg"
      />

      <div className={styles.page}>
        <h1>Hola a todos</h1>
      </div>
    </div>
  );
}
