import ScrambleText from "./ScrambleText";

const links = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Services", "#services"]
] as const;

export default function AnimatedFooter() {
  return (
    <footer id="contact" className="footer-simple section-shell">
      <div className="footer-inner">
        <h2><ScrambleText text="Backend Atelier*" speed={28} /></h2>
        <a className="footer-cta" href="mailto:hello@backendatelier.studio">
          <ScrambleText text="Let's Talk →" speed={28} />
        </a>
        <a className="footer-email" href="mailto:hello@backendatelier.studio">hello@backendatelier.studio</a>
        <nav className="footer-links" aria-label="Footer">
          {links.map(([label, href]) => (
            <a key={label} href={href}><ScrambleText text={label} speed={30} /></a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
