import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProductCatalog from "./components/ProductCatalog.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductCatalog />
      </main>
      <Footer />
    </>
  );
}

export default App;
