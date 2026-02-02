import React from 'react';
import '../components/Game/GameHUD.css';

const wallpapers = [
    { id: 1, gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", quote: "Focus on the step in front of you, not the whole staircase." },
    { id: 2, gradient: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)", quote: "Your potential is infinite." },
    { id: 3, gradient: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)", quote: "Silence is the source of great strength.", textDark: true },
    { id: 4, gradient: "linear-gradient(to right, #434343 0%, black 100%)", quote: "Discipline equals Freedom." },
    { id: 5, gradient: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)", quote: "Growth happens outside your comfort zone.", textDark: true },
    { id: 6, gradient: "linear-gradient(to right, #243949 0%, #517fa4 100%)", quote: "Dopamine is a tool, not a master." }
];

export default function WallpaperGalleryPage() {
    return (
        <div className="game-hud-container" style={{ paddingTop: '8rem' }}>
            <div className="container text-center">
                <i className="bi bi-images fs-1 text-warning mb-3"></i>
                <h1 className="fw-bold mb-4">Motivational Dopaministic Wallpapers</h1>
                <p className="lead text-light mb-5">
                    Visual reminders to keep your baseline, focus and spirits high!
                </p>

                <div className="row g-4">
                    {wallpapers.map(wp => (
                        <div key={wp.id} className="col-md-4">
                            <div className="card border-0 shadow-lg overflow-hidden position-relative wallpaper-card" style={{ height: '400px', borderRadius: '1rem' }}>
                                <div
                                    className="h-100 w-100 d-flex align-items-center justify-content-center p-4 text-center"
                                    style={{ background: wp.gradient }}
                                >
                                    <h4 className={`fw-bold ${wp.textDark ? 'text-dark' : 'text-white'}`} style={{ textShadow: wp.textDark ? 'none' : '0 2px 10px rgba(0,0,0,0.5)' }}>
                                        "{wp.quote}"
                                    </h4>
                                </div>
                                <div className="card-footer bg-dark border-0 p-3">
                                    <button className="btn btn-outline-light btn-sm rounded-pill w-100">
                                        <i className="bi bi-download me-2"></i> Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
