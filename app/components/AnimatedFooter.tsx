import ScrambleText from "./ScrambleText";
import PremiumButton from "./PremiumButton";

export default function AnimatedFooter() {
  return (
    <footer id="contact" className="section-shell pb-16 pt-24">
      <div className="footer-cinematic">
        <p className="section-label">Contact</p>
        <h2>Build with clarity.</h2>
        <p>
          For founder-led brands seeking structure, scalability, and intentional operational systems.
        </p>
        <PremiumButton href="mailto:hello@backendatelier.studio" text="Start a Conversation" />
        <a className="footer-email" href="mailto:founder@backendatelier.com">
          founder@backendatelier.com
        </a>
        <div className="footer-marquee" aria-hidden="true">
          <ScrambleText text="Backend Atelier" className="footer-wordmark" speed={26} />
          <ScrambleText text="Backend Atelier" className="footer-wordmark" speed={26} />
        </div>
      </div>
    </footer>
  );
}
