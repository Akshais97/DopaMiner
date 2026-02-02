import React from 'react';
import GameTable from '../components/Game/GameTable';

export default function RedPillPage() {
    return (
        <div style={{ padding: '6rem 2rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--color-accent-redpill)' }}>Red Pill Journey</h1>
            <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-text-secondary)' }}>
                High discipline. Maximum rewards. Welcome to the hard path.
            </p>
            <GameTable pillType="Red" />
        </div>
    );
}
