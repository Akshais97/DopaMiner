import React from 'react';
import '../components/Game/GameHUD.css';

export default function UserProfilePage() {
    // Mock User Data
    const user = {
        name: "Miner #42",
        title: "DopaKing",
        avatar: "bi-person-circle",
        joinDate: "Feb 2026",
        stats: {
            tasksCompleted: 142,
            totalPoints: 15400,
            streakdays: 12
        },
        badges: [
            { id: 1, name: "First Step", icon: "bi-footprint", desc: "Completed first task" },
            { id: 2, name: "Early Bird", icon: "bi-sunrise", desc: "Task before 7AM" },
            { id: 3, name: "Iron Will", icon: "bi-shield-lock", desc: "Cold Shower 7 days in a row" },
            { id: 4, name: "Zen Master", icon: "bi-yin-yang", desc: "1000 mins of meditation" }
        ]
    };

    return (
        <div className="game-hud-container" style={{ paddingTop: '8rem' }}>
            <div className="container" style={{ maxWidth: '800px' }}>

                {/* Profile Header */}
                <div className="card bg-dark border-secondary shadow-lg mb-5">
                    <div className="card-body p-5 d-flex flex-column flex-md-row align-items-center gap-4">
                        <i className={`bi ${user.avatar} text-secondary`} style={{ fontSize: '6rem' }}></i>
                        <div className="text-center text-md-start">
                            <h2 className="fw-bold mb-1 text-white">{user.name}</h2>
                            <span className="badge bg-warning text-dark fs-6 mb-3">{user.title}</span>
                            <div className="d-flex gap-4 text-muted small">
                                <span><i className="bi bi-calendar3 me-1"></i> Joined {user.joinDate}</span>
                                <span><i className="bi bi-fire me-1 text-danger"></i> {user.stats.streakdays} Day Streak</span>
                            </div>
                        </div>
                        <div className="ms-md-auto text-center border-start border-secondary ps-md-4">
                            <div className="display-6 fw-bold text-white mb-0">{user.stats.totalPoints.toLocaleString()}</div>
                            <div className="small text-muted text-uppercase ls-1">Total Points</div>
                        </div>
                    </div>
                </div>

                {/* Badges Section */}
                <h3 className="fw-bold text-white mb-4"><i className="bi bi-patch-check-fill text-warning me-2"></i>Badges & Achievements</h3>
                <div className="row g-4">
                    {user.badges.map(badge => (
                        <div key={badge.id} className="col-md-6">
                            <div className="card bg-transparent border-secondary h-100 quest-card flex-row align-items-center p-3 text-start">
                                <div className="rounded-circle bg-dark p-3 me-3 d-flex align-items-center justify-content-center border border-secondary" style={{ width: '60px', height: '60px' }}>
                                    <i className={`bi ${badge.icon} fs-3 text-warning`}></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-1 text-white">{badge.name}</h5>
                                    <p className="small text-secondary mb-0">{badge.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Locked Badge Mockup */}
                    <div className="col-md-6">
                        <div className="card bg-transparent border-secondary h-100 p-3 flex-row align-items-center opacity-50">
                            <div className="rounded-circle bg-dark p-3 me-3 d-flex align-items-center justify-content-center border border-secondary" style={{ width: '60px', height: '60px' }}>
                                <i className="bi bi-lock-fill fs-3 text-secondary"></i>
                            </div>
                            <div>
                                <h5 className="fw-bold mb-1 text-white">Focus Ninja</h5>
                                <p className="small text-secondary mb-0">Complete 5 Deep Work sessions</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
