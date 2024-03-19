import React, { useState } from 'react';
import './style/styles.css';
import './style/contact.css';
import cos from './img/cos.png';
import log from './img/log.png';
import { Link } from 'react-router-dom';
import CartModal from './CartModal';

function Contact() {
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
            <section className="contact-section">
                <h2>Date de contact</h2>
                <div className="contact-container">
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Numele/Prenumele</label>
                            <input type="text" id="name" placeholder="Ex. Coliba Ion" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Număr de telefon</label>
                            <input type="tel" id="phone" placeholder="Ex. 373-345-6789" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="E.g. johndoe@gmail.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">Țară</label>
                            <select id="country">
                                <option value="moldova">Moldova</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mesaj</label>
                            <textarea id="message" placeholder="Scrieți un mesaj sau un comentariu"></textarea>
                        </div>
                        <button type="submit">Trimite</button>
                    </form>
                </div>
            </section>
            {isCartVisible && <CartModal cart={cart} removeFromCart={removeFromCart} onClose={toggleCart} />}
        </>
    );
}

export default Contact;