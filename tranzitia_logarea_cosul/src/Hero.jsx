import React from "react";
import './style/styles.css';

function Hero() {
  return (
    <div className="hero">
      <h1>Noi avem grijă de Securitatea angajaților voștri</h1>
      <div className="search">
        <input type="search" placeholder="Caută un serviciu dorit" />
        <button>Caută</button>
      </div>
    </div>
  );
}
export default Hero;
