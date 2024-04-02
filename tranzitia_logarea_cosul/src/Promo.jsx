import React, { useState } from 'react';
import './style/styles.css';
import './style/contact.css';
import cos from './img/cos.png';
import log from './img/log.png';
import { Link } from 'react-router-dom';
import CartModal from './CartModal';
function Promo() {
    const [cart, setCart] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);
  
    const addToCart = (item) => {
        setCart(prevCart => [...prevCart, item]);
    };
  
    const removeFromCart = (index) => {
        setCart(prevCart => prevCart.filter((_, itemIndex) => index !== itemIndex));
    };
  
    const toggleCart = () => {
        setIsCartVisible(!isCartVisible);
    };
  
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Acasă</Link></li>
                    <li><Link to="/Servic">Servicii</Link></li>
                    <li><Link to="/Promo">Promo</Link></li>
                    <li><Link to="/Contact">Contacte</Link></li>
                    <li><a href="#" className="order-service">Comandă un serviciu</a></li>
                    <li onClick={toggleCart}><img className="cos" src={cos} alt="coș" /></li>
                    <li><a href="#"><img className="cos" src={log} alt="log" /></a></li>
                </ul>
            </nav>
        <div className="grid-container">
  <div className="grid-item1">Servicii oferite</div>
  <div className="grid-item1">Descrierea serviciilor oferite</div>
  <div className="grid-item1">Preț(lei)</div>
  <div className="grid-item">Panou: Acordarea primului ajutor medical</div>
  <div className="grid-item">Mărimea: 2*1.1 m / Plastic 5 mm</div>
  <div className="grid-item">1800</div>
  <div className="grid-item">Panou: Securitate incendiară</div>
  <div className="grid-item">Mărimea: 1.5*1.1 m / Plastic 5 mm</div>
  <div className="grid-item">1300</div>
  <div className="grid-item">Panou: SSM la înălțime</div>
  <div className="grid-item">Mărimea: 1.7*1.1 m / Plastic 5 mm</div>
  <div className="grid-item">1500</div>
  <div className="grid-item">Panou: SSM la sudare</div>
  <div className="grid-item">Mărimea: 1.5*1.1 m / Plastic 5 mm</div>
  <div className="grid-item">1300</div>
  <div className="grid-item">Panou de evacuare</div>
  <div className="grid-item">Mărimea: 2*1.1 m / Plastic 5 mm</div>
  <div className="grid-item">1800</div>
  <div className="grid-item">Audit privind respectarea regulilor SSM</div>
  <div className="grid-item">Auditul se face timp de 3 zile, are drept scopul de a sprijini angajatorul și a preveni un accident de muncă sau chiar amendarea angajatorului.</div>
  <div className="grid-item">1100</div>
  <div className="grid-item">Consultații telefonice</div>
  <div className="grid-item">Puteți apela 8:00-18:00</div>
  <div className="grid-item">Gratuit</div>
  <div className="grid-item">Instrucțiuni SSM</div>
  <div className="grid-item">Oferim Intrucțiuni de SSM pentru orice post de lucru</div>
  <div className="grid-item">de la 500</div>
</div>
{isCartVisible && <CartModal cart={cart} removeFromCart={removeFromCart} onClose={toggleCart} />}
        </>
    )
}
export default Promo;