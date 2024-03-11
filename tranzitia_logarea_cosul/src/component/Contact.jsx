import React from 'react';
import './style/styles.css';
import './style/contact.css';
import cos from './img/cos.png';
import log from './img/log.png';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <>
          <nav>
            <ul>
            <li><Link to="/">Acasă</Link></li>
            <li><Link to="/Servic">Servicii</Link></li>
            <li><Link to="/Promo">Promo</Link></li>
                <li><Link to="/Contact">Contacte</Link></li>
                <li><a href="#" class="order-service">Comandă un serviciu</a></li>
                <li><a href="#"><img class="cos" src={cos} alt="cos" /></a></li>
                <li><a href="#"><img class="cos" src={log} alt="log" /></a></li>

            </ul>
        </nav>
        <section class="contact-section">
            <h2>Date de contact</h2>
            <div class="contact-container">
                <form class="contact-form">
                    <div class="form-group">
                        <label for="name">Numele/Prenumele</label>
                        <input type="text" id="name" placeholder="Ex. Coliba Ion" />
                    </div>
                    <div class="form-group">
                        <label for="phone">Număr de telefon</label>
                        <input type="tel" id="phone" placeholder="Ex. 373-345-6789" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="E.g. johndoe@gmail.com" />
                    </div>
                    <div class="form-group">
                        <label for="country">Țară</label>
                        <select id="country">
                            <option value="moldova">Moldova</option>

                        </select>
                    </div>
                    <div class="form-group">
                        <label for="message">Mesaj</label>
                        <textarea id="message" placeholder="Scrieți un mesaj sau un comentariu"></textarea>
                    </div>
                    <button type="submit">Trimite</button>
                </form>

            </div>
            <button></button>
        </section>
        </>
    )
}
export default Contact;