'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  const menuItems = [
     { href: '/', icon: 'fas fa-home', label: 'Inicio' },           // Un hogar para la página principal
        { href: '/address-book', icon: 'fas fa-users', label: 'Nosotros' }, // Grupo de personas para “Nosotros”
        { href: '/unidades', icon: 'fas fa-truck', label: 'Unidades' }, // Cuadrícula para representar secciones/unidades
        { href: '/rastreo', icon: 'fas fa-map-marker-alt', label: 'Rastreo' }, // Marcador de ubicación para “Rastreo”
        { href: '/contacto', icon: 'fas fa-envelope', label: 'Contacto' }  
  ];

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') test();
  }, []);

  useEffect(() => {
    if (isMounted && typeof window !== 'undefined') test();
  }, [pathname, isOpen, isMounted]);

  const test = () => {
    const tabsNewAnim = document.getElementById('navbarSupportedContent');
    if (!tabsNewAnim) return;

    const activeItemNewAnim = tabsNewAnim.querySelector(`.${styles.active}`);
    if (!activeItemNewAnim) return;

    const activeWidthNewAnimHeight = activeItemNewAnim.offsetHeight;
    const activeWidthNewAnimWidth = activeItemNewAnim.offsetWidth;
    const itemPosNewAnimTop = activeItemNewAnim.offsetTop;
    const itemPosNewAnimLeft = activeItemNewAnim.offsetLeft;

    const horiSelector = document.querySelector(`.${styles.horiSelector}`);
    if (horiSelector) {
      horiSelector.style.cssText = `
        top: ${itemPosNewAnimTop}px;
        left: ${itemPosNewAnimLeft}px;
        height: ${activeWidthNewAnimHeight}px;
        width: ${activeWidthNewAnimWidth}px;
      `;
    }
  };

  const handleItemClick = () => {
    setIsOpen(false);
    setTimeout(() => test(), 300);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setTimeout(() => test(), 300);
  };

  if (!isMounted) {
    return (
      <nav className={`${styles.navbar} ${styles.navbarExpandCustom} ${styles.navbarMainbg}`}>
        <Link href="/" className={`${styles.navbarBrand} ${styles.navbarLogo}`}>
          <Image 
            src="/fotos/TDMEX1.png" 
            alt="Logo de la empresa"
            width={120}
            height={40}
            priority
          />
        </Link>
        <button className={styles.navbarToggler} type="button">
          <i className="fas fa-bars"></i>
        </button>
      </nav>
    );
  }

  return (
    <nav className={`${styles.navbar} ${styles.navbarExpandCustom} ${styles.navbarMainbg}`}>
      <Link href="/" className={`${styles.navbarBrand} ${styles.navbarLogo}`}>
        <Image 
          src="/fotos/TDMEX1.png" 
          alt="Logo de la empresa"
          width={120}
          height={40}
          priority
        />
      </Link>

      <button
        className={styles.navbarToggler}
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
      >
        <i className="fas fa-bars"></i>
      </button>

      <div
        className={`${styles.navbarCollapse} ${isOpen ? styles.show : ''}`}
        id="navbarSupportedContent"
      >
        <div className={styles.navbarContent}>
          <ul className={`${styles.navbarNav} ${styles.mlAuto}`}>
            <div className={styles.horiSelector}>
              <div className={styles.left}></div>
              <div className={styles.right}></div>
            </div>

            {menuItems.map((item) => (
              <li
                key={item.href}
                className={`${styles.navItem} ${pathname === item.href ? styles.active : ''}`}
              >
                <Link
                  className={styles.navLink}
                  href={item.href}
                  onClick={handleItemClick}
                >
                  <i className={item.icon}></i>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
