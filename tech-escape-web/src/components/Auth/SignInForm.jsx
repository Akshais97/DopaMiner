import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './AuthForm.css';

export default function SignInForm({ switchToSignUp }) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { login, redirectPath, setRedirectPath } = useAuth();
    const navigate = useNavigate();
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const hour = new Date().getHours();
        const isMorning = hour >= 5 && hour < 12;
        const isAfternoon = hour >= 12 && hour < 17;

        const randomOptions = [
            "Welcome back. One small step is enough.",
            "Welcome back. Let’s keep feeling good."
        ];

        if (isMorning) {
            setGreeting("Welcome back. Let’s take care of today.");
        } else if (isAfternoon) {
            setGreeting("Welcome back. You’re doing well—keep going.");
        } else {
            const randomMsg = randomOptions[Math.floor(Math.random() * randomOptions.length)];
            setGreeting(randomMsg);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Use unified login
        login(formData.email, formData.password);

        if (redirectPath) {
            navigate(redirectPath);
            setRedirectPath(null);
        } else {
            navigate('/blue-pill'); // Direct to Game
        }
    };

    return (
        <div className="auth-container">
            <div className="form-header">
                <h2>{greeting}</h2>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        autoFocus
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                    />
                </div>

                <button type="submit" className="auth-submit-btn">
                    Sign In
                </button>
            </form>

            <div className="auth-footer">
                Need an account?
                <button className="auth-link-btn" onClick={switchToSignUp}>
                    Sign Up
                </button>
            </div>
        </div>
    );
}
