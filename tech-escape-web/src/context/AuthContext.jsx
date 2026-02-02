import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authMode, setAuthMode] = useState('signin'); // 'signin' or 'signup'
    const [user, setUser] = useState(null);
    const [redirectPath, setRedirectPath] = useState(null);

    const login = (email, password) => {
        // Simulate backend call
        console.log("Logging in:", email);
        const userData = { name: 'Miner', email }; // Mock data
        setUser(userData);
        setIsAuthModalOpen(false);
        return true;
    };

    const signup = (name, email, password) => {
        // Simulate backend call
        console.log("Signing up:", email);
        const userData = { name, email }; // Mock data
        setUser(userData);
        setIsAuthModalOpen(false);
        return true;
    };

    const openAuthModal = (mode = 'signin') => {
        setAuthMode(mode);
        setIsAuthModalOpen(true);
    };

    const closeAuthModal = () => {
        setIsAuthModalOpen(false);
    };

    return (
        <AuthContext.Provider value={{
            isAuthModalOpen,
            openAuthModal,
            closeAuthModal,
            login,
            signup,
            authMode,
            setAuthMode,
            user,
            setUser,
            redirectPath,
            setRedirectPath
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
