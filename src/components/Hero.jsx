import tindahanPhoto from "../images/tindahan.webp";
import "./Hero.css";

function Hero() {
  return (
    <section className="artsy-hero" aria-label="Welcome to Shopbinsblndr">
      <svg className="artsy-hero__filters" aria-hidden="true" focusable="false">
        <filter id="artsy-hero-wobble">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.018"
            numOctaves="2"
            seed="7"
            result="wobble-noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="wobble-noise"
            scale="18"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div className="artsy-hero__grid" aria-hidden="true"></div>

      <div className="artsy-hero__inner">
        <div className="artsy-hero__copy">
          <p className="artsy-hero__kicker">Hello Hoomans!</p>

          <h1 className="artsy-hero__tagline">
            Artsy goodies
            <br />
            made with{" "}
            <span className="artsy-hero__love">
              love
              <svg
                className="artsy-hero__heart"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 21s-7.5-4.6-10-9.1C.4 8.7 2 5 5.6 5c2 0 3.5 1.1 4.4 2.7C10.9 6.1 12.4 5 14.4 5 18 5 19.6 8.7 22 11.9 19.5 16.4 12 21 12 21z" />
              </svg>
            </span>
          </h1>

          <p className="artsy-hero__subtext">
            Hand-made stickers, pins, and keepsakes inspired by the neighborhood
            sari-sari store — made in small batches, packed with care.
          </p>
        </div>

        <div className="artsy-hero__art">
          <svg
            className="artsy-hero__burst"
            viewBox="0 0 240 240"
            aria-hidden="true"
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <polygon
                key={i}
                points="120,4 130,120 110,120"
                fill={i % 2 === 0 ? "var(--sun)" : "var(--sun-deep)"}
                transform={`rotate(${(360 / 20) * i} 120 120)`}
              />
            ))}
          </svg>

          <span
            className="artsy-hero__sparkle artsy-hero__sparkle--1"
            aria-hidden="true"
          >
            ✦
          </span>
          <span
            className="artsy-hero__sparkle artsy-hero__sparkle--2"
            aria-hidden="true"
          >
            ✦
          </span>
          <span
            className="artsy-hero__sparkle artsy-hero__sparkle--3"
            aria-hidden="true"
          >
            ✦
          </span>
          <span
            className="artsy-hero__sparkle artsy-hero__sparkle--4"
            aria-hidden="true"
          >
            ✦
          </span>
          <span
            className="artsy-hero__sparkle artsy-hero__sparkle--5"
            aria-hidden="true"
          >
            ✦
          </span>
          <span
            className="artsy-hero__sparkle artsy-hero__sparkle--6"
            aria-hidden="true"
          >
            ✦
          </span>
          <span
            className="artsy-hero__sparkle artsy-hero__sparkle--7"
            aria-hidden="true"
          >
            ✦
          </span>
          <span
            className="artsy-hero__sparkle artsy-hero__sparkle--8"
            aria-hidden="true"
          >
            ✦
          </span>

          <img
            className="artsy-hero__photo"
            src={tindahanPhoto}
            alt="Tindahan — the little sari-sari store that inspired Shopbinsblndr"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
