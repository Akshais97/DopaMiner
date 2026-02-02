import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LandingPage.css';

export default function LandingPage() {
    const { openAuthModal, setRedirectPath } = useAuth();
    const navigate = useNavigate(); // Hook for navigation
    const [isGrey, setIsGrey] = useState(false); // Default Color now
    const [isLitUp, setIsLitUp] = useState(false);

    // Typing Animation State
    const [text, setText] = useState('');
    const fullText = "Turn Your Life Around";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index + 1));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 100); // Typing speed
        return () => clearInterval(interval);
    }, []);

    // Hover over button → Turn Grey
    const handleMouseEnter = () => {
        setIsGrey(true);
    };

    // Leave button → Remove Grey (Back to Color)
    const handleMouseLeave = () => {
        if (!isLitUp) {
            setIsGrey(false);
        }
    };

    // Click → Light Up (and remove grey to ensure brightness works)
    const handleCtaClick = () => {
        setIsLitUp(true);
        setIsGrey(false); // Remove grey filter for light-up effect

        // Give animation a moment before opening modal
        setTimeout(() => {
            openAuthModal('signup');
        }, 400);
    };

    // Poster Modal State
    const [isPosterOpen, setIsPosterOpen] = useState(false);

    const choresList = [
        { icon: <i className="bi bi-people-fill text-info"></i>, label: "Being with people" },
        { icon: <i className="bi bi-person-walking text-success"></i>, label: "Brisk Walking" },
        { icon: <i className="bi bi-droplet-fill text-primary"></i>, label: "Cold Shower" },
        { icon: <i className="bi bi-cup-hot-fill text-success"></i>, label: "Green Tea" },
        { icon: <i className="bi bi-square-fill text-warning"></i>, label: "Dark Chocolate" }, // Square roughly
        { icon: <i className="bi bi-music-note-beamed text-danger"></i>, label: "Music" },
        { icon: <i className="bi bi-yin-yang text-light"></i>, label: "Meditate" },
        { icon: <i className="bi bi-activity text-info"></i>, label: "Yoga" },
        { icon: <i className="bi bi-pause-circle text-muted"></i>, label: "Boring Breaks" },
        { icon: <i className="bi bi-heart-fill text-danger"></i>, label: "Petting Animals" }
    ];

    return (
        <div className="landing-page">
            <section
                className={`hero-section ${isGrey ? 'grey' : ''} ${isLitUp ? 'light-up' : ''}`}
            >
                <div className="overlay"></div>

                <div className="content">
                    <h1 className="hero-title">
                        {text}<span className="cursor">|</span>
                    </h1>

                    <button
                        className="cta-button"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleCtaClick}
                    >
                        Win ₹500 every week!
                    </button>
                </div>
            </section>

            {/* DOPAMINE PROTOCOL SECTION (Replaces Choice Section) */}
            <section className="container py-5 my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card bg-dark text-white border-secondary shadow-lg dopamine-card" style={{ borderRadius: '1rem' }}>
                            <div className="card-body p-5 text-center">
                                <i className="bi bi-emoji-smile-fill fs-1 text-warning mb-3"></i>
                                <h2 className="card-title fw-bold mb-3">Mine Life's Happiest Coin : Join DopaMine</h2>
                                <h5 className="card-subtitle mb-4 text-white-50 fw-light">
                                    Top 2 win ₹500 every week.
                                </h5>
                                <p className="card-text fs-5 mb-5 text-secondary">
                                    The best results don’t come from extremes.
                                    <br /><br />
                                    We design simple daily actions that quietly raise your baseline—so life gets easier and better over time.
                                    <br /><br />
                                    <span className="text-white-50"><i className="bi bi-check2-circle me-2"></i>No burnout</span>
                                    <span className="mx-3 text-white-50">|</span>
                                    <span className="text-white-50"><i className="bi bi-check2-circle me-2"></i>Sustainable Growth</span>
                                </p>

                                <button
                                    className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 fw-bold"
                                    style={{ letterSpacing: '1px', boxShadow: '0 0 15px rgba(255,255,255,0.1)' }}
                                    onClick={() => {
                                        setRedirectPath('/blue-pill');
                                        openAuthModal('signup');
                                    }}
                                >
                                    <i className="bi bi-play-circle-fill me-2"></i>
                                    START PLAYING
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW Chores Section */}
            <section className="container py-5">
                <h2 className="text-center mb-5 fw-bold" style={{ color: 'var(--color-text-primary)' }}>Daily Dopamine Menu</h2>
                <div className="row g-4 justify-content-center">
                    {choresList.map((chore, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-2">
                            <div className="p-3 border border-secondary rounded-3 text-center h-100 d-flex flex-column align-items-center justify-content-center bg-dark bg-opacity-50 hover-effect">
                                <span className="fs-2 mb-2">{chore.icon}</span> {/* Check if user wants icons here replaced too? Kept emojis for now as they are distinct, but wrapped in bootstrap grid */}
                                <span className="small text-light fw-bold">{chore.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="philosophy-section text-center py-5">
                <div
                    className="philosophy-card philosophy-clickable d-inline-block p-4 border border-secondary rounded-3 bg-dark bg-opacity-75 mb-5"
                    style={{ cursor: 'pointer', maxWidth: '800px' }}
                    onClick={() => setIsPosterOpen(true)}
                >
                    <h3 className="fw-bold mb-3">A better dopamine baseline. A better default life.</h3>
                    <p className="text-secondary mb-0">
                        We keep your dopamine baseline high—so life feels good without chasing more.
                    </p>
                </div>


                <div className="stat-grid">
                    <div className="stat-item">
                        <span className="stat-number">10+</span>
                        <span className="stat-label">Daily Habits</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Privacy First</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">∞</span>
                        <span className="stat-label">Possible You</span>
                    </div>
                </div>
            </section>

            {/* Poster Modal */}
            {isPosterOpen && (
                <div className="poster-overlay" onClick={() => setIsPosterOpen(false)}>
                    <div className="poster-content" onClick={e => e.stopPropagation()}>
                        <button className="poster-close" onClick={() => setIsPosterOpen(false)}>×</button>
                        <div className="poster-text">game-photo</div>
                    </div>
                </div>
            )}
        </div>
    );
}
