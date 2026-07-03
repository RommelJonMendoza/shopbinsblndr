import logo from "../images/logo.png";
import { StarDoodle, SparkleDoodle } from "./Doodles.jsx";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/binsblndr/",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/artofbinsblndr",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path
          d="M13.8 8.4h1.6V5.8h-1.9c-1.9 0-3 1.1-3 3.1v1.6H8.9v2.6h1.6V18h2.7v-4.9h1.8l.4-2.6h-2.2v-1.3c0-.6.2-.8.9-.8Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://vt.tiktok.com/ZSeCMeD9g/",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 3.5c.5 2 2 3.4 4 3.6v3c-1.5 0-2.9-.4-4-1.2v5.6a5.4 5.4 0 1 1-5.4-5.4c.3 0 .6 0 .9.1v3.1a2.4 2.4 0 1 0 1.7 2.3V3.5H15Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/channel/UC3F2S9SO177gw5ojSAkcqlA",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2.5"
          y="6"
          width="19"
          height="12"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M10.5 9.7 15 12l-4.5 2.3Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const shopLinks = [
  { label: "All Products", href: "#all-products" },
  { label: "Stickers", href: "#stickers" },
  { label: "Button Pins", href: "#button-pins" },
  { label: "Key Chains", href: "#key-chains" },
  { label: "Postcards", href: "#postcards" },
  { label: "New Arrivals", href: "#new-arrivals" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <StarDoodle className="footer__star footer__star--1" />
      <StarDoodle className="footer__star footer__star--2" />
      <SparkleDoodle className="footer__sparkle" />

      <div className="site-footer__inner">
        <div className="footer-col footer-col--brand">
          <img className="footer-logo" src={logo} alt="Shopbinsblndr" />
          <p className="footer-tagline">Artsy goodies made with love</p>
          <div className="footer-socials">
            {socials.map((s) => (
              <a
                key={s.name}
                className="footer-social-btn"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col footer-col--links">
          <h3 className="footer-heading">Shop</h3>
          <ul className="footer-list">
            {shopLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col footer-col--contact">
          <h3 className="footer-heading">Get In Touch</h3>
          <ul className="footer-list footer-list--contact">
            <li>
              <span className="footer-list__label">Email</span>
              <a href="mailto:binsblndr@gmail.com">binsblndr@gmail.com</a>
            </li>
            <li>
              <span className="footer-list__label">Location</span>
              <span>Cabanatuan City, Nueva Ecija, Philippines</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>&copy; {year} Shopbinsblndr. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
