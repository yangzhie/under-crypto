import React from 'react'

import './Footer.css'

function Footer() {
    return (
        <footer className="crypto-footer">
            <div className="footer-container">

                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Individuals</h4>
                    <ul>
                        <li><a href="#">Buy & sell</a></li>
                        <li><a href="#">Wallet</a></li>
                        <li><a href="#">NFTs</a></li>
                        <li><a href="#">DeFi</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Learn</h4>
                    <ul>
                        <li><a href="#">What is crypto?</a></li>
                        <li><a href="#">Crypto basics</a></li>
                        <li><a href="#">How to set up a crypto wallet</a></li>
                        <li><a href="#">Explore</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Contact support</a></li>
                        <li><a href="#">Account recovery</a></li>
                        <li><a href="#">Protect yourself online</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Developers</h4>
                    <ul>
                        <li><a href="#">Cloud</a></li>
                        <li><a href="#">Wallet SDK</a></li>
                        <li><a href="#">Commerce</a></li>
                        <li><a href="#">Rosetta</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Newsletter</h4>
                    <p>Subscribe to our newsletter for the latest updates and news.</p>
                    <form action="#" method="post" className="newsletter-form">
                        <input type="email" name="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 UnderCrypto. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer