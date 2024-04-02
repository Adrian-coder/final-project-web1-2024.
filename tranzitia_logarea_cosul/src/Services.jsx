import React from 'react';
import i2 from './img/i2.png';
import i3 from './img/i3.png';
import i4 from './img/i4.png';
import i5 from './img/i5.png';
import i6 from './img/i6.png';
import './style/styles.css';

function Services() {
    return (
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
    )

}
export default Services;