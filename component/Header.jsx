import React, { useState, useEffect } from 'react';
import './style/styles.css';
import cos from './img/cos.png';
import log from './img/log.png';
import { Link } from 'react-router-dom';
import i2 from './img/i2.png';
import i3 from './img/i3.png';
import i4 from './img/i4.png';
import i5 from './img/i5.png';
import i6 from './img/i6.png';
import LoginForm from './LoginForm';
import CartModal from './CartModal';

    function Header() {
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [isFaq1Open, setIsFaq1Open] = useState(false);
        const [isFaq2Open, setIsFaq2Open] = useState(false);
        const [isFaq3Open, setIsFaq3Open] = useState(false);
        const toggleModal = () => setIsModalOpen(!isModalOpen);
        const toggleFaq1 = () => setIsFaq1Open(!isFaq1Open);
        const toggleFaq2 = () => setIsFaq2Open(!isFaq2Open);
        const toggleFaq3 = () => setIsFaq3Open(!isFaq3Open);
    
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
                        <li onClick={toggleCart}><img className="cos1" src={cos} alt="coș" /></li>
                        <li><a href="#login" onClick={toggleModal}><img className="cos" src={log} alt="log" /></a></li>
                    </ul>
                </nav>
                {isModalOpen && <LoginForm onClose={toggleModal} />}

            <div className="hero">
      <div className="search">
        <input type="search" placeholder="Caută un serviciu dorit" />
        <button>Caută</button>
      </div>
    </div>
    <div>
            <section class="services">
                <h2>Serviciile noastre</h2>
                <div class="service-items">
                    <div class="service-item">
                        <img class='panou' src={i6} alt="Audit SSM" />
                        <h3>Audit SSM</h3>
                    </div>
                    <div class="service-item">
                        <img class="panou" src={i3} alt="Panouri informative" />
                        <h3>Panouri informative</h3>
                    </div>
                    <div class="service-item">
                        <img src={i4} alt="Instrucțiuni" />
                        <h3>Instrucțiuni</h3>
                    </div>
                    <div class="service-item">
                        <img src={i5} alt="Cursuri SSM" />
                        <h3>Cursuri SSM</h3>
                    </div>
                    <div class="service-item">
                        <img class="" src={i2} alt="Consultații telefonice" />
                        <h3>Consultații telefonice</h3>
                    </div>
                </div>
            </section>
        </div>
<br />
<br />
<div>
    <section className="faq">
        <h2>Întrebări frecvente</h2>
        <div className="faq-item">
            <button className="faq-question" onClick={toggleFaq1}>Oferiți reduceri clienților fideli?</button>
            {isFaq1Open && (
                <div className="faq-answer">
                    <p>Da, clienții care au apelat la cel puțin 5 servicii în ultimii 2 ani, beneficiază de o reducere de 10% la toate serviciile noastre.</p>
                </div>
            )}
        </div>
        <div className="faq-item">
            <button className="faq-question" onClick={toggleFaq2}>Cursurile sunt atestate de Protecția muncii?</button>
            {isFaq2Open && (
                <div className="faq-answer">
                    <p>Da.</p>
                </div>
            )}
        </div>
        <div className="faq-item">
            <button className="faq-question" onClick={toggleFaq3}>Cât timp sunt valabile cursurile dvs?</button>
            {isFaq3Open && (
                <div className="faq-answer">
                    <p>3 ani.</p>
                </div>
            )}
        </div>
    </section>
            <section class="testimonials">
                <h2>Ce spun clienții despre noi</h2>
                <div class="testimonial-container">
                    <div class="testimonial-nav prev"><span></span></div>
                    <div class="testimonial-content">
                        <p>O companie de nota 10, cu muncitori calificați, am primit o mare plăcere de la cursurile ssm.</p>
                        <p class="author">- Doina C.</p>
                    </div>
                    <div class="testimonial-nav next"><span></span></div>
                </div>
            </section>
        </div>

        {isCartVisible && <CartModal cart={cart} removeFromCart={removeFromCart} onClose={toggleCart} />}

        </>
    )
}
export default Header;
