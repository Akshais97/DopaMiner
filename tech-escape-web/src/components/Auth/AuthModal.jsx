import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import './AuthModal.css';

export default function AuthModal() {
    const { closeAuthModal, authMode, setAuthMode } = useAuth();

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') closeAuthModal();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [closeAuthModal]);

    return (
        <div className="modal-overlay" onClick={closeAuthModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={closeAuthModal}>×</button>

                {authMode === 'signup' ? (
                    <SignUpForm switchToSignIn={() => setAuthMode('signin')} />
                ) : (
                    <SignInForm switchToSignUp={() => setAuthMode('signup')} />
                )}
            </div>
        </div>
    );
}
