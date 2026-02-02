import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

export default function Navbar() {
    const { openAuthModal, user } = useAuth();

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                <i className="bi bi-emoji-smile-fill text-warning me-2"></i>
                DopaMiner
            </Link>

            <div className="navbar-links">
                {user ? (
                    <>
                        <span className="text-light me-3 fw-bold">Hello, {user.name || 'Miner'}</span>
                        <Link to="/blue-pill" className="nav-link">Game</Link>
                        <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
                        <Link to="/timer" className="nav-link">Timer</Link>
                        <Link to="/wallpapers" className="nav-link">Wallpapers</Link>
                        <Link to="/profile" className="nav-link"><i className="bi bi-person-circle"></i></Link>
                    </>
                ) : (
                    <>
                        <button
                            className="nav-btn btn-signin"
                            onClick={() => openAuthModal('signin')}
                        >
                            Sign In
                        </button>
                        <button
                            className="nav-btn btn-signup"
                            onClick={() => openAuthModal('signup')}
                        >
                            Start Journey
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}
