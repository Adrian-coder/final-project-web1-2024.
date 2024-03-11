import React from 'react';
import './style/styles.css';
import cos from './img/cos.png';
import log from './img/log.png';

import { Link } from 'react-router-dom';

function Header() {
    return(
        <nav>
            <ul>
                <li><Link to="/">Acasă</Link></li>
                <li><Link to="/services">Servicii</Link></li>
                <li><Link to="/promo">Promo</Link></li>
                <li><Link to="/Contact">Contacte</Link></li>
                <li><Link to="/cart"><img class="cos" src={cos} alt="cos"/></Link></li>
                <li><Link to="/login"><img class="log" src={log} alt="log"/></Link></li>
            </ul>
        </nav>
    );  
}

export default Header;
