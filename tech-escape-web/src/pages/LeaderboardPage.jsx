import React, { useState } from 'react';
import '../components/Game/GameHUD.css'; // Using the same neon styles

export default function LeaderboardPage() {
    const [activeTab, setActiveTab] = useState('WEEKLY');

    // Mock Data
    const weeklyData = [
        { rank: 1, name: "DopaKing", score: 15400, reward: "₹500" },
        { rank: 2, name: "ZenMaster", score: 14200, reward: "₹500" },
        { rank: 3, name: "FocusNinja", score: 13800, reward: "₹500" },
        { rank: 4, name: "CalmWalker", score: 12500, reward: "-" },
        { rank: 5, name: "BookWorm", score: 11000, reward: "-" },
    ];

    const allTimeData = [
        { rank: 1, name: "ZenMaster", score: 154000, reward: "Elite" },
        { rank: 2, name: "DopaKing", score: 142000, reward: "Pro" },
        { rank: 3, name: "FocusNinja", score: 128000, reward: "Pro" },
        { rank: 4, name: "EarlyBird", score: 110000, reward: "Member" },
        { rank: 5, name: "DeepDiver", score: 95000, reward: "Member" },
    ];

    const data = activeTab === 'WEEKLY' ? weeklyData : allTimeData;

    return (
        <div className="game-hud-container" style={{ paddingTop: '8rem' }}>
            <div className="container text-center">
                <i className="bi bi-trophy-fill fs-1 text-warning mb-3"></i>
                <h1 className="fw-bold mb-4">Leaderboard</h1>
                <p className="lead text-light mb-5">
                    See who's mastering their dopamine baseline.
                    {activeTab === 'WEEKLY' && <span className="d-block text-warning mt-2 fs-5">Top 3 win ₹500 via Gpay!</span>}
                </p>

                {/* Tabs */}
                <div className="neon-tabs mb-5">
                    <button
                        className={`neon-tab ${activeTab === 'WEEKLY' ? 'active' : ''}`}
                        onClick={() => setActiveTab('WEEKLY')}
                    >
                        Weekly Top
                    </button>
                    <button
                        className={`neon-tab ${activeTab === 'ALL_TIME' ? 'active' : ''}`}
                        onClick={() => setActiveTab('ALL_TIME')}
                    >
                        All Time
                    </button>
                </div>

                {/* Table */}
                <div className="card bg-dark border-secondary shadow-lg mx-auto" style={{ maxWidth: '800px' }}>
                    <div className="card-body p-0">
                        <table className="table table-dark table-hover mb-0 text-start">
                            <thead className="text-muted text-uppercase small">
                                <tr>
                                    <th className="p-4 bg-transparent border-secondary">Rank</th>
                                    <th className="p-4 bg-transparent border-secondary">Miner</th>
                                    <th className="p-4 bg-transparent border-secondary text-end">Score</th>
                                    <th className="p-4 bg-transparent border-secondary text-end">Reward/Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row) => (
                                    <tr key={row.rank}>
                                        <td className="p-4 border-secondary">
                                            {row.rank === 1 && <i className="bi bi-award-fill text-warning me-2"></i>}
                                            {row.rank === 2 && <i className="bi bi-award-fill text-secondary me-2"></i>}
                                            {row.rank === 3 && <i className="bi bi-award-fill text-danger me-2"></i>}
                                            <span className="fw-bold">#{row.rank}</span>
                                        </td>
                                        <td className="p-4 border-secondary fw-bold text-info">{row.name}</td>
                                        <td className="p-4 border-secondary text-end font-monospace">{row.score.toLocaleString()}</td>
                                        <td className="p-4 border-secondary text-end text-warning">{row.reward}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
