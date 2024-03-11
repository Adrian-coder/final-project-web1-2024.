import React from "react";

function Contact(){
    return(
        <section class="contact-section">
        <h2>Date de contact</h2>
        <div class="contact-container">
            <form class="contact-form">
                <div class="form-group">
                    <label for="name">Numele/Prenumele</label>
                    <input type="text" id="name" placeholder="Ex. Coliba Ion"/>
                </div>
                <div class="form-group">
                    <label for="phone">Număr de telefon</label>
                    <input type="tel" id="phone" placeholder="Ex. 373-345-6789"/>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="E.g. johndoe@gmail.com"/>
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
    </section>
    )
}
export default Contact;