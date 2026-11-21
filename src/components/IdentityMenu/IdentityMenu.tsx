"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./IdentityMenu.module.css";

// As páginas ainda não existem: trocar "#" pelas rotas quando forem criadas.
const links = [
  {
    label: "Projects",
    href: "#",
    icon: <path d="M11 7 3.5 16 11 25M21 7l7.5 9-7.5 9M18.5 5 13.5 27" />,
  },
  {
    label: "Knowledge Base",
    href: "#",
    icon: (
      <>
        <path d="M3 6.5c5.2-2.1 9.6-1.2 13 2.1v19c-3.4-3.3-7.8-4.2-13-2.1v-19ZM29 6.5c-5.2-2.1-9.6-1.2-13 2.1v19c3.4-3.3 7.8-4.2 13-2.1v-19Z" />
        <path d="M7 12c2-.5 3.7-.3 5.4.6M7 16c2-.5 3.7-.3 5.4.6M20 12c1.7-.9 3.4-1.1 5.4-.6M20 16c1.7-.9 3.4-1.1 5.4-.6" />
      </>
    ),
  },
  {
    label: "About",
    href: "#",
    icon: (
      <>
        <circle cx="16" cy="9.5" r="6" />
        <path d="M3.5 28c.8-6.1 5.4-9.3 12.5-9.3S27.7 21.9 28.5 28h-25Z" />
      </>
    ),
  },
];

export function IdentityMenu() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target;

      if (event.key === "Enter" && !event.repeat) {
        const isTyping =
          target instanceof HTMLElement &&
          (target.isContentEditable ||
            ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

        // Enter alterna (abre/fecha) o menu quando o foco não está no botão FG, em um
        // link do menu ou em um campo. No botão FG o próprio navegador converte o
        // Enter em clique, que já alterna pelo onClick.
        if (
          !isTyping &&
          target !== triggerRef.current &&
          !(target instanceof Node && menuRef.current?.contains(target))
        ) {
          event.preventDefault();
          setOpen((value) => !value);
        }
      }

      if (event.key === "Escape" && open) close();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  return (
    <section
      className={`${styles.stage} ${open ? styles.isOpen : ""}`}
      aria-label="Navegação principal"
    >
      <div className={styles.menuLayout}>
        <button
          ref={triggerRef}
          className={styles.identity}
          type="button"
          aria-label={open ? "Recolher navegação" : "Abrir navegação"}
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className={styles.monogram}>FG</span>
        </button>

        {/*
          Coordenadas em pixels reais: o SVG ocupa o vão entre a borda do círculo
          (x = 0) e os botões (x = 78). O centro vertical é y = 120 e os botões
          ficam a ±88px dele (64px de altura + 24px de espaço).
        */}
        <svg className={styles.connectors} viewBox="0 0 78 240" aria-hidden="true">
          <path d="M 0 120 H 18 L 52 32 H 78" />
          <path d="M 0 120 H 78" />
          <path d="M 0 120 H 18 L 52 208 H 78" />
          <circle cx="0" cy="120" r="3" />
          <circle cx="78" cy="32" r="3" />
          <circle cx="78" cy="120" r="3" />
          <circle cx="78" cy="208" r="3" />
        </svg>

        <nav
          ref={menuRef}
          className={styles.links}
          id="main-menu"
          aria-label="Seções do portfólio"
          inert={!open}
        >
          {links.map(({ label, href, icon }) => (
            <Link key={label} className={styles.navLink} href={href}>
              <span className={styles.navIcon} aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  {icon}
                </svg>
              </span>
              <span className={styles.navLabel}>{label}</span>
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </nav>
      </div>

      <p className={styles.hint}>Press enter or click FG</p>
    </section>
  );
}
