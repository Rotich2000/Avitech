import React from 'react'
import Button from './Button'
import './Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer-container">
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Browse smoothly through the internet.
            </p>
            <p className = "footer-subscription-text">
                Subscribe to get internet packages with affordable prices.
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                    <Button buttonStyle="btn--outline">Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About US</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to="/">Testimonials</Link>
                    <Link to="/">Careers</Link>
                    <Link to="/">Investors</Link>
                    <Link to="/">Terms of Services</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Contact US</h2>
                    <Link to="/">Contact</Link>
                    <Link to="/">Support</Link>
                    <Link to="/">Destinations</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About US</h2>
                    <Link to="/">Ambassador</Link>
                    <Link to="/">Agency</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Social Media</h2>
                    <Link to="/">Instagram</Link>
                    <Link to="/">Facebook</Link>
                    <Link to="/">Youtube</Link>
                    <Link to="/">Twitter</Link>
                </div>
            </div>
        </div>
        <section className = "social-media">
            <div className="social-media-wrap">
                <small className="website-rights">AVITECHLTD &copy; 2022</small>
                <div className="social-icons">
                    <Link className="social-icon-link facebook"
                     to="/" 
                     target="_blank" 
                     aria-label = 'Facebook'>
                       <i className="fab fa-facebook-square"></i>
                    </Link>
                    <Link className="social-icon-link instagram"
                     to="/" 
                     target="_blank" 
                     aria-label = 'Instagram'>
                       <i className="fab fa-instagram"></i>
                    </Link>
                    <Link className="social-icon-link twitter"
                     to="/" 
                     target="_blank" 
                     aria-label = 'Twitter'>
                       <i className="fab fa-twitter"></i>
                    </Link>

                    <Link className="social-icon-link whatsapp"
                     to="/" 
                     target="_blank" 
                     aria-label = 'Whatsapp'>
                       <i className="fab fa-whatsapp"></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer