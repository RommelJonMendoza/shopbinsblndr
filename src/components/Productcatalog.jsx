import { useEffect, useMemo, useState } from "react";
import Reveal from "./Reveal.jsx";
import { products, categoryLabels } from "./products.js";
import "./ProductCatalog.css";

// Simple hand-drawn line icons used as placeholders until real product
// photos are added — one per category, matching the line-icon style
// already used for the search/profile/cart icons in Header.jsx.
const categoryIcons = {
  stickers: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 5 L28.5 18.5 L42 18.5 L31 27 L35 41 L24 32.5 L13 41 L17 27 L6 18.5 L19.5 18.5 Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "button-pins": (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  ),
  "key-chains": (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="2.4" />
      <path
        d="M21.5 21.5 L40 40 M33 33 L38 28 M37 37 L42 32"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  postcards: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect
        x="5"
        y="10"
        width="38"
        height="28"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <path
        d="M6 12 L24 27 L42 12"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const filters = [
  { slug: "all-products", label: "All Products" },
  { slug: "new-arrivals", label: "New Arrivals" },
  { slug: "stickers", label: categoryLabels.stickers },
  { slug: "button-pins", label: categoryLabels["button-pins"] },
  { slug: "key-chains", label: categoryLabels["key-chains"] },
  { slug: "postcards", label: categoryLabels.postcards },
];

function formatPrice(pesos) {
  return `\u20b1${pesos.toFixed(2)}`;
}

function ProductCard({ product, delay }) {
  const [added, setAdded] = useState(false);

  return (
    <Reveal as="li" className="shelf__card" delay={delay}>
      <div className="shelf__card-art">
        {product.image ? (
          <img src={product.image} alt={product.name} loading="lazy" />
        ) : (
          <span className="shelf__card-icon">
            {categoryIcons[product.category]}
          </span>
        )}
        {product.isNew && <span className="shelf__badge">New</span>}
      </div>

      <h3 className="shelf__card-name">{product.name}</h3>
      <p className="shelf__card-price">{formatPrice(product.price)}</p>

      <button
        type="button"
        className="shelf__card-btn"
        onClick={() => {
          setAdded(true);
          window.setTimeout(() => setAdded(false), 1600);
        }}
      >
        {added ? "Added ✓" : "Add to cart"}
      </button>
    </Reveal>
  );
}

function ProductCatalog() {
  const [activeFilter, setActiveFilter] = useState("all-products");

  // Let the header's dropdown links (#stickers, #new-arrivals, etc.)
  // drive the active tab here, so clicking a category in the nav both
  // scrolls down AND filters the shelf to match.
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (filters.some((f) => f.slug === hash)) {
        setActiveFilter(hash);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const visibleProducts = useMemo(() => {
    if (activeFilter === "all-products") return products;
    if (activeFilter === "new-arrivals") return products.filter((p) => p.isNew);
    return products.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="all-products" className="shelf" aria-label="Product catalog">
      <div className="shelf__inner">
        <Reveal as="div" className="shelf__heading">
          <p className="shelf__kicker">what's in stock</p>
          <h2 className="shelf__title">Browse the Shelf</h2>
        </Reveal>

        <Reveal as="div" className="shelf__tabs" delay={80}>
          {filters.map((f) => (
            <button
              key={f.slug}
              type="button"
              id={f.slug === "all-products" ? undefined : f.slug}
              className={`shelf__tab ${
                activeFilter === f.slug ? "is-active" : ""
              }`}
              onClick={() => {
                setActiveFilter(f.slug);
                window.history.replaceState(null, "", `#${f.slug}`);
              }}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        {visibleProducts.length > 0 ? (
          <ul className="shelf__grid">
            {visibleProducts.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                delay={(i % 4) * 70}
              />
            ))}
          </ul>
        ) : (
          <p className="shelf__empty">Nothing here yet — check back soon!</p>
        )}
      </div>
    </section>
  );
}

export default ProductCatalog;
