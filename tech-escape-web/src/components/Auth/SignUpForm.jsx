import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './AuthForm.css';

export default function SignUpForm({ switchToSignIn }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const { signup, redirectPath, setRedirectPath } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Use unified signup
        signup(formData.name, formData.email, formData.password);

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
                <h2>Start Your Journey</h2>
                <p>Join the 1% who choose control.</p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        autoFocus
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
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
                    Create Account
                </button>
            </form>

            <div className="auth-footer">
                Already have an account?
                <button className="auth-link-btn" onClick={switchToSignIn}>
                    Sign In
                </button>
            </div>
        </div>
    );
}
