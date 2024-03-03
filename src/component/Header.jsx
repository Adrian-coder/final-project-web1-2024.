import React from 'react';
import './style/styles.css';
import cos from './img/cos.png';
import log from './img/log.png';
function Header(){
    return(
        <nav>
            <ul>
                <li><a href="#">Acasă</a></li>
                <li><a href="#">Servicii</a></li>
                <li><a href="#">Promo</a></li>
                <li><a href="#">Contacte</a></li>
                <li><a href="#" class="order-service">Comandă un serviciu</a></li>
                <li><a href="#"><img class="cos" src={cos} alt="cos"/></a></li>
                <li><a href="#"><img class="cos" src={log} alt="log"/></a></li>

            </ul>
        </nav>
    )  
}
export default Header;;
