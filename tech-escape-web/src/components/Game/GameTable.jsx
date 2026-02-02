import React, { useState, useEffect } from 'react';
import './GameHUD.css';

// Stat Bar Component
const StatBar = ({ label, value, max, colorClass = "" }) => {
    const percentage = Math.min((value / max) * 100, 100);
    return (
        <div className="stat-bar-container">
            <div className="stat-label">
                <span>{label}</span>
                <span>{value} / {max}</span>
            </div>
            <div className="stat-track">
                <div
                    className={`stat-fill ${colorClass}`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default function GameTable({ pillType }) {
    const [activeTab, setActiveTab] = useState('TRANSFORM'); // Default to "TRANSFORM" (was DOING)
    const [score, setScore] = useState(1250); // Mock starting score
    const [dopamineDaily, setDopamineDaily] = useState(45); // Mock mana
    const [timeLeft, setTimeLeft] = useState(80); // Mock HP (Time Left)

    // Calculate Average (Mock logic: Dopamine / 4 for demo purposes, or based on tasks)
    const averageHappiness = Math.round(score / 15);

    // Popups state
    const [popups, setPopups] = useState([]);

    // Categories Data with Specific Icons
    const categories = {
        EAT: [
            { id: 'e1', name: "Balanced Carb-Reduced Meals", points: 600, duration: "20 min", icon: "bi-basket" },
            { id: 'e2', name: "Low-Sugar Eating Day", points: 650, duration: "All day", icon: "bi-slash-circle" },
            { id: 'e3', name: "Consistent Meal Timing", points: 550, duration: "All day", icon: "bi-clock-history" },
            { id: 'e4', name: "Green Tea", points: 450, duration: "5 min", icon: "bi-cup-hot" },
            { id: 'e5', name: "Hydration (Intentional)", points: 350, duration: "5 min", icon: "bi-droplet" },
            { id: 'e6', name: "Dark Chocolate (85%)", points: 250, duration: "5 min", icon: "bi-square-fill" },
        ],
        ENJOY: [
            { id: 'j1', name: "Music (Intentional Listening)", points: 520, duration: "10 min", icon: "bi-headphones" },
            { id: 'j2', name: "Social Laughter / Fun", points: 500, duration: "20 min", icon: "bi-emoji-laughing" },
            { id: 'j3', name: "Dancing (Enjoyment-First)", points: 460, duration: "20 min", icon: "bi-music-note-beamed" },
            { id: 'j4', name: "Creative Play (Low Pressure)", points: 450, duration: "30 min", icon: "bi-palette" },
            { id: 'j5', name: "Petting Animals", points: 430, duration: "10 min", icon: "bi-heart" },
            { id: 'j6', name: "Nature Appreciation (Passive)", points: 420, duration: "15 min", icon: "bi-tree" },
            { id: 'j7', name: "Reading for Pleasure", points: 400, duration: "30 min", icon: "bi-book" },
            { id: 'j8', name: "Silence (Enjoyment Mode)", points: 380, duration: "15 min", icon: "bi-moon-stars" },
        ],
        TRANSFORM: [
            { id: 'd1', name: "Consistent Sleep Timing", points: 1000, duration: "8 hrs", icon: "bi-alarm" },
            { id: 'd2', name: "Quality Sleep (Full)", points: 950, duration: "8 hrs", icon: "bi-moon-fill" },
            { id: 'd3', name: "Meditation (Focused / Daily)", points: 900, duration: "15 min", icon: "bi-yin-yang" },
            { id: 'd4', name: "Cold Shower", points: 880, duration: "5 min", isShower: true, icon: "bi-snow" },
            { id: 'd5', name: "Deep Social Connection", points: 860, duration: "30 min", icon: "bi-people-fill" },
            { id: 'd6', name: "Helping Someone", points: 840, duration: "20 min", icon: "bi-hand-thumbs-up" },
            { id: 'd7', name: "Routine & Consistency", points: 820, duration: "All day", icon: "bi-calendar-check" },
            { id: 'd8', name: "Delayed Gratification (24h)", points: 800, duration: "24 hrs", icon: "bi-hourglass-split" },
            { id: 'd9', name: "Brisk Walking (Daily)", points: 780, duration: "20 min", icon: "bi-person-walking" },
            { id: 'd10', name: "Aerobic Exercise (Zone 2)", points: 770, duration: "40 min", icon: "bi-heart-pulse" },
            { id: 'd11', name: "Nature + Walking Combo", points: 760, duration: "30 min", icon: "bi-tree-fill" },
            { id: 'd12', name: "Strength / Workout", points: 750, duration: "45 min", icon: "bi-gem" },
            { id: 'd13', name: "Digital Detox (Partial)", points: 740, duration: "3 hrs", icon: "bi-phone-vibrate-off" },
            { id: 'd14', name: "No Phone Morning", points: 720, duration: "2 hrs", icon: "bi-sun" },
            { id: 'd15', name: "Team Sports", points: 700, duration: "60 min", icon: "bi-trophy" },
            { id: 'd16', name: "Deep Focus / Flow Work", points: 680, duration: "60 min", icon: "bi-laptop" },
            { id: 'd17', name: "Learning Hard Skills", points: 660, duration: "45 min", icon: "bi-journal-code" },
            { id: 'd18', name: "Yoga", points: 640, duration: "30 min", icon: "bi-person-arms-up" },
            { id: 'd19', name: "Forest / Nature Exposure", points: 620, duration: "25 min", icon: "bi-flower1" },
            { id: 'd20', name: "Boring Breaks (No Stim)", points: 610, duration: "15 min", icon: "bi-pause-circle" },
            { id: 'd21', name: "Creative Work", points: 580, duration: "40 min", icon: "bi-brush" },
            { id: 'd22', name: "Listening Deeply", points: 560, duration: "20 min", icon: "bi-ear" },
            { id: 'd23', name: "Pet Interaction (Care / Play)", points: 540, duration: "10 min", icon: "bi-heart-fill" },
            { id: 'd24', name: "Morning Sunlight", points: 520, duration: "10 min", icon: "bi-brightness-high" },
            { id: 'd25', name: "Gratitude Practice", points: 500, duration: "5 min", icon: "bi-journal-text" },
            { id: 'd26', name: "Reading (Deep)", points: 480, duration: "30 min", icon: "bi-book-half" },
            { id: 'd27', name: "Journaling", points: 460, duration: "10 min", icon: "bi-pen" },
            { id: 'd28', name: "Silence / Stillness", points: 450, duration: "15 min", icon: "bi-mic-mute" },
            { id: 'd29', name: "Breath Meditation", points: 440, duration: "10 min", icon: "bi-lungs" },
            { id: 'd30', name: "Stretching / Mobility", points: 420, duration: "10 min", icon: "bi-arrows-move" },
            { id: 'd31', name: "Dancing (Effort-based)", points: 400, duration: "25 min", icon: "bi-music-note" },
            { id: 'd32', name: "Completing Small Tasks", points: 380, duration: "10 min", icon: "bi-check2-square" },
            { id: 'd33', name: "Cold Exposure (Extended)", points: 360, duration: "8 min", icon: "bi-thermometer-snow" },
        ]
    };

    const [showerState, setShowerState] = useState({ active: false, startTime: '', endTime: '' });

    // Handle Clicking a Quest
    const handleQuestClick = (e, task) => {
        // 1. Shower Logic Special Case
        if (task.isShower) {
            if (showerState.active) return;
            const userStartTime = prompt("Enter Start Time (e.g. 06:00 AM):", new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
            if (!userStartTime) return;
            const now = new Date();
            const end = new Date(now.getTime() + 5 * 60000); // +5 min
            setShowerState({ active: true, startTime: userStartTime, endTime: end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
            return;
        }

        // 2. Normal Quest Logic (Score + Animation)
        setScore(prev => prev + task.points);
        setDopamineDaily(prev => Math.min(prev + 5, 120)); // Cap at 120

        // Add pop-up at click coordinates
        const rect = e.currentTarget.getBoundingClientRect();
        const newPopup = {
            id: Date.now(),
            x: rect.left + rect.width / 2,
            y: rect.top,
            text: `+${task.points}`
        };
        setPopups([...popups, newPopup]);

        // Cleanup popup
        setTimeout(() => {
            setPopups(current => current.filter(p => p.id !== newPopup.id));
        }, 1000);
    };

    return (
        <div className="game-hud-container">

            {/* 1. TOP HUD (Stats & Score) */}
            <div className="hud-top-bar">
                {/* Left Stats */}
                <div style={{ width: '100%' }}>
                    <StatBar label="Total Time Left For Today (HP)" value={timeLeft} max={100} colorClass="health" />
                    <div className="mt-2 pt-2 border-top border-secondary">
                        <StatBar label="Average Happiness" value={averageHappiness} max={100} colorClass="avg-happy" />
                    </div>
                </div>

                {/* Center Score */}
                <div className="score-display">
                    <div className="score-value">{score.toLocaleString()}</div>
                    <div className="score-label">Total DopaMiner Points</div>
                </div>

                {/* Right Stats */}
                <div style={{ width: '100%' }}>
                    <StatBar label="Dopamine Daily Total (Mana)" value={dopamineDaily} max={120} />
                </div>
            </div>

            {/* 2. TAB SELECTION */}
            <div className="neon-tabs">
                {Object.keys(categories).map(catKey => (
                    <button
                        key={catKey}
                        className={`neon-tab ${activeTab === catKey ? 'active' : ''}`}
                        onClick={() => setActiveTab(catKey)}
                    >
                        {catKey}
                    </button>
                ))}
            </div>

            {/* 3. QUEST GRID */}
            <div className="quest-grid">
                {categories[activeTab].map(task => (
                    <div
                        key={task.id}
                        className="quest-card"
                        onClick={(e) => handleQuestClick(e, task)}
                    >
                        <i className={`bi ${task.icon} quest-icon`}></i>
                        <div className="quest-name">{task.name}</div>
                        <div className="quest-points">+{task.points} pts</div>

                        {task.isShower && showerState.active ? (
                            <div className="quest-duration text-warning">
                                <i className="bi bi-stopwatch"></i> {showerState.startTime} - {showerState.endTime}
                            </div>
                        ) : (
                            <div className="quest-duration">{task.duration}</div>
                        )}
                    </div>
                ))}
            </div>

            {/* Floating Popups */}
            {popups.map(p => (
                <div
                    key={p.id}
                    className="points-popup"
                    style={{ left: p.x, top: p.y }}
                >
                    {p.text}
                </div>
            ))}

        </div>
    );
}
