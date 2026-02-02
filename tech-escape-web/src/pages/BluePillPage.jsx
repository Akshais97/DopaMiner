import React from 'react';
import GameTable from '../components/Game/GameTable';

export default function BluePillPage() {
    React.useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container py-5 my-5">
            <div className="text-center mb-5">
                <i className="bi bi-coin fs-1 text-warning mb-3"></i>
                <h1 className="fw-bold mb-3">DopaMiners, Mine Away</h1>
                <p className="lead text-warning fw-bold mb-4">
                    Highest Weekly Scorers win ₹500 each to your Gpay!
                </p>
                <p className="text-muted fs-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    Steady progress. Consistent habits.
                    <br />
                    <span className="text-secondary">Welcome to the sustainable path.</span>
                </p>
            </div>

            <GameTable pillType="Blue" />
        </div>
    );
}
