import styles from "./Footer.module.css";

// TODO: substituir pelos perfis reais.
const socials = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: (
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.03.76 2.08V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <path d="M5.2 3.2a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0ZM1.2 8h3.7v14.8H1.2V8Zm6 0h3.6v2h.05c.5-.95 1.72-2.2 3.55-2.2 3.8 0 4.5 2.5 4.5 5.75v9.25h-3.75v-8.2c0-1.96-.04-4.48-2.73-4.48-2.74 0-3.16 2.14-3.16 4.34v8.34H7.2V8Z" />
    ),
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.signature}>
        <span className={styles.mark} aria-hidden="true">
          FG
        </span>
        <span className={styles.name}>Felipe Gonçalves</span>
        <span className={styles.role}>
          Engineering <span className={styles.separator}>—</span> Software
          Development <span className={styles.separator}>—</span> Machine
          Learning
        </span>
      </div>

      <nav className={styles.socials} aria-label="Redes sociais">
        {socials.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {icon}
            </svg>
          </a>
        ))}
      </nav>
    </footer>
  );
}
