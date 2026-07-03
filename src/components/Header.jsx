import { useState, useEffect, useRef } from "react";
import logo from "../images/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount] = useState(0); // wire up to real cart state later

  const submenuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the viewport grows back to desktop size
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
        setSubmenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close the categories submenu on any click/tap outside of it
  useEffect(() => {
    if (!submenuOpen) return;

    const onDocClick = (e) => {
      if (submenuRef.current && !submenuRef.current.contains(e.target)) {
        setSubmenuOpen(false);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSubmenuOpen(false);
    };

    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [submenuOpen]);

  const categories = ["Stickers", "Button Pins", "Key Chains", "Postcards"];

  const closeAll = () => {
    setMenuOpen(false);
    setSubmenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-header__inner">
        <button
          className={`hamburger ${menuOpen ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((v) => !v);
            setSubmenuOpen(false);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`main-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Main"
        >
          <ul className="main-nav__list">
            <li
              className={`has-submenu ${submenuOpen ? "is-open" : ""}`}
              ref={submenuRef}
            >
              <span className="submenu-trigger">
                <a
                  className="submenu-trigger__link"
                  href="#all-products"
                  onClick={closeAll}
                >
                  All Products
                </a>
                <button
                  className="submenu-trigger__toggle"
                  aria-expanded={submenuOpen}
                  aria-label="Toggle categories"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSubmenuOpen((v) => !v);
                  }}
                >
                  <svg
                    className="chev"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                  >
                    <path
                      d="M1 1L6 6L11 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </span>

              <ul className={`submenu ${submenuOpen ? "is-open-mobile" : ""}`}>
                {categories.map((cat) => (
                  <li key={cat}>
                    <a
                      href={`#${cat.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={closeAll}
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <a href="#new-arrivals" onClick={closeAll}>
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeAll}>
                Contact Us
              </a>
            </li>
            <li className="nav-mobile-only">
              <a href="#account" onClick={closeAll}>
                Profile
              </a>
            </li>
          </ul>
        </nav>

        <a className="brand" href="#home" onClick={closeAll}>
          <img className="brand__logo-img" src={logo} alt="Shopbinsblndr" />
        </a>

        <div className="header-icons">
          <a className="icon-btn search-btn" href="#search" aria-label="Search">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M20 20L16.5 16.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </a>

          <a
            className="icon-btn profile-btn"
            href="#account"
            aria-label="View account"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="8"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M4 20C4 16.134 7.582 13 12 13C16.418 13 20 16.134 20 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </a>

          <a
            className="icon-btn cart-btn"
            href="#cart"
            aria-label={`View cart, ${cartCount} items`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4H5L5.7 7M5.7 7L7 15H18L20 7H5.7Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="19" r="1.6" fill="currentColor" />
              <circle cx="17" cy="19" r="1.6" fill="currentColor" />
            </svg>
            {cartCount > 0 && (
              <span className="cart-btn__badge">{cartCount}</span>
            )}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
