
import React, { useState,useEffect } from 'react';
import './style/styles.css';
import './style/contact.css';
import cos from './img/cos.png';
import log from './img/log.png';
import { Link } from 'react-router-dom';
import CartModal from './CartModal';
function Servic() {
    const [cart, setCart] = useState(() => {
        const localCart = localStorage.getItem('cart');
        return localCart ? JSON.parse(localCart) : [];
    });
    const [isCartVisible, setIsCartVisible] = useState(false);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

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

            <section className="advantages">
                <h2>Avantajele noastre</h2>
                <ul>
                    <li>Lucrători competenți</li>
                    <li>Prețuri mici</li>
                    <li>Istorie companie curată</li>
                    <li>Elaborarea produselor rapid</li>
                </ul>
            </section>

            <section className="services">
                <h1>Serviciile noastre</h1>
                <div className="service-container">
                    <div className="service-card">
                        <h3>Instrucțiuni</h3>
                        <p>de la 25$</p>
                        <ul>
                            <li>Toate profesiile</li>
                            <li>Instrucțiuni calitative</li>
                            <li>În decurs de 5 zile</li>
                            <li>În format PDF sau DOCX</li>
                        </ul>
                        <button onClick={() => addToCart({ name: 'Instrucțiuni', price: 25 })}>Procura</button>
                    </div>

                    <div className="service-card">
                        <h3>Panouri informative</h3>
                        <p>de la 55$</p>
                        <ul>
                            <li>Toate domeniile</li>
                            <li>Materiale calitative</li>
                            <li>În decurs de 5 zile</li>
                            <li>Orice tip de material</li>
                        </ul>
                        <button onClick={() => addToCart({ name: 'Panouri informative', price: 55 })}>Procura</button>
                    </div>
                    <div className="service-card">
                        <h3>Audit</h3>
                        <p>de la 100$</p>
                        <ul>
                            <li>Toate domeniile de activitate</li>
                            <li>Raport în docx</li>
                            <li>În decurs de 5 zile</li>
                            <li>La adresa întreprinderii</li>
                        </ul>
                        <button onClick={() => addToCart({ name: 'Audit', price: 100 })}>Procură</button>
                    </div>
                    <div className="service-card">
                        <h3>Cursuri SSM</h3>
                        <p>de la 100$</p>
                        <ul>
                            <li>Toate domeniile de activitate</li>
                            <li>Diplomă recunoscută</li>
                            <li>În decurs de 30 zile</li>
                            <li>Posibilitatea online</li>
                        </ul>
                        
                        <button onClick={() => addToCart({ name: 'Cursuri SSM', price: 100 })}>Procură</button>
                    </div>
                </div>
            </section>

            <section>
                <div className="info-section">
                    <div className="more-info">
                        <button id="moreInfoBtn">Află mai multe..</button>
                    </div>
                    <div className="questions-section">
                        <span>Au apărut întrebări?</span>
                        <button className="contact-button">Contactează-ne</button>
                    </div>
                </div>
            </section>
            {isCartVisible && <CartModal cart={cart} removeFromCart={removeFromCart} onClose={toggleCart} />}
        </>
    )
}
export default Servic;
