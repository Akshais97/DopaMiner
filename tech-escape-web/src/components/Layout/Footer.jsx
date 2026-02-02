import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>DopaMiner</h4>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', maxWidth: '250px' }}>
                        Built for those who want to reclaim their attention span and dopamine baseline.
                        <br /><br />
                        © 2026 Aksh.ai
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Explore</h4>
                    <ul className="footer-links">
                        <li><Link to="/philosophy">Philosophy</Link></li>
                        <li><Link to="/science">The Science</Link></li>
                        <li><Link to="/manifesto">Manifesto</Link></li>
                        <li><Link to="/community">Community</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Legal</h4>
                    <ul className="footer-links">
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms of Service</Link></li>
                        <li><Link to="/cookies">Cookie Policy</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <span>Designed with focus in mind.</span>
                <div className="social-links">
                    <a href="#">Twitter</a>
                    <a href="#">GitHub</a>
                    <a href="#">Discord</a>
                </div>
            </div>
        </footer>
    );
}
