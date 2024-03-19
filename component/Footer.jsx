import React from "react";
import './style/styles.css';

function Footer() {

    return (

        <div class="footer">
            <div class="row">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-youtube"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
            </div>
            <div class="row">
                <ul>
                    <li><a href="#">Informație</a></li>
                    <li><a href="#">Servicii</a></li>
                    <li><a href="#">Panouri informative</a></li>
                    <li><a href="#">Legislația</a></li>
                    <li><a href="#">Contacte</a></li>
                </ul>
            </div>
            <div class="row">
                © 2024 SSM-PRO
            </div>
        </div>

    )
}
export default Footer;