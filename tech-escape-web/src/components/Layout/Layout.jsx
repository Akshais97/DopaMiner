import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AuthModal from '../Auth/AuthModal';
import { useAuth } from '../../context/AuthContext';

export default function Layout({ children }) {
    const { isAuthModalOpen } = useAuth();

    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer /> {/* Added this component */}
            {isAuthModalOpen && <AuthModal />}
        </>
    );
}
