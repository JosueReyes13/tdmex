import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>TDEMEX</title>
      </head>
      <body
        style={{
          margin: 0,
          fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* Navbar se mostrará en todas las páginas */}
        <Navbar />

        {/* Contenido específico de cada page */}
        <main style={{ flex: 1 }}>{children}</main>

        {/* Footer al final */}
        <Footer />
      </body>
    </html>
  );
}
