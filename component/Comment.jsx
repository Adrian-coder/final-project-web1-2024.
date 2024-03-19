import React from "react";
import './style/styles.css';



function Comment() {
    return (
        <div>
            <section class="faq">
                <h2>Întrebări frecvente</h2>
                <div class="faq-item">
                    <button class="faq-question">Oferiți reduceri clienților fideli?</button>
                    <div class="faq-answer">
                        <p>Da, clienții care au apelat la cel puțin 5 servicii în ultimii 2 ani, beneficiază de o reducere de 10% la toate serviciile noastre.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">Cursurile sunt atestate de Protecția muncii?</button>
                    <div class="faq-answer">
                        <p>Da.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <button class="faq-question">Cât timp sunt valabile cursurile dvs?</button>
                    <div class="faq-answer">
                        <p>3 ani.</p>
                    </div>
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

    )
}
export default Comment;