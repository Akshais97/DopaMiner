import React, { useState, useEffect } from 'react';
import '../components/Game/GameHUD.css';

export default function TimerPage() {
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState('FOCUS'); // FOCUS or BREAK

    useEffect(() => {
        let interval = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
            // Play sound or notify
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const toggleTimer = () => setIsActive(!isActive);

    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(mode === 'FOCUS' ? 25 * 60 : 5 * 60);
    };

    const setTimerMode = (newMode) => {
        setMode(newMode);
        setIsActive(false);
        setTimeLeft(newMode === 'FOCUS' ? 25 * 60 : 5 * 60);
    };

    return (
        <div className="game-hud-container d-flex flex-column align-items-center justify-content-center">
            <h1 className="fw-bold mb-5 text-uppercase" style={{ color: 'rgb(var(--hud-color))', letterSpacing: '4px' }}>
                {mode === 'FOCUS' ? 'Deep Work Protocol' : 'Dopamine Detach'}
            </h1>

            <div className="timer-display mb-5" style={{
                fontSize: '8rem',
                fontWeight: 'bold',
                color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                textShadow: isActive ? '0 0 30px rgba(var(--hud-color), 0.5)' : 'none',
                fontFamily: 'monospace'
            }}>
                {formatTime(timeLeft)}
            </div>

            <div className="d-flex gap-4 mb-5">
                <button
                    className={`btn btn-lg ${isActive ? 'btn-outline-danger' : 'btn-outline-light'} rounded-pill px-5 py-3`}
                    onClick={toggleTimer}
                >
                    <i className={`bi ${isActive ? 'bi-pause-fill' : 'bi-play-fill'} me-2`}></i>
                    {isActive ? 'PAUSE' : 'START'}
                </button>
                <button
                    className="btn btn-lg btn-outline-secondary rounded-pill px-5 py-3"
                    onClick={resetTimer}
                >
                    <i className="bi bi-arrow-counterclockwise me-2"></i>
                    RESET
                </button>
            </div>

            <div className="neon-tabs">
                <button
                    className={`neon-tab ${mode === 'FOCUS' ? 'active' : ''}`}
                    onClick={() => setTimerMode('FOCUS')}
                >
                    Focus (25m)
                </button>
                <button
                    className={`neon-tab ${mode === 'BREAK' ? 'active' : ''}`}
                    onClick={() => setTimerMode('BREAK')}
                >
                    Break (5m)
                </button>
            </div>
        </div>
    );
}
