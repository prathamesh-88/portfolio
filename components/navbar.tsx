"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/navbar.module.css";
import ThemeToggle from "./themeToggle";

const links = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/articles" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={styles.navbar} aria-label="Primary navigation">
      <Link
        className={styles.brand}
        href="/"
        aria-label="Prathamesh Tamanekar home"
      >
        <Image
          alt="PT monogram"
          src="/images/logo.png"
          width={36}
          height={36}
          priority
        />
      </Link>
      <div className={styles.navActions}>
        <div
          className={`${styles.links} ${isOpen ? styles.linksOpen : ""}`}
          id="primary-links"
        >
          {links.map(({ label, href }) => (
            <Link
              className={styles.link}
              href={href}
              key={href}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
        <ThemeToggle />
        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-links"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>
    </nav>
  );
}
