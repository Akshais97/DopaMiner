import React from 'react';

const PageContainer = ({ title, children }) => (
    <div className="container py-5 my-5 text-white">
        <h1 className="fw-bold mb-4 text-warning">{title}</h1>
        <div className="p-4 bg-dark border border-secondary rounded shadow-sm">
            {children}
        </div>
    </div>
);

export const Philosophy = () => (
    <PageContainer title="Philosophy">
        <p>The best results don’t come from extremes. We believe in sustainable, low-dopamine living to reclaim your attention and happiness.</p>
    </PageContainer>
);

export const Science = () => (
    <PageContainer title="The Science">
        <p>Dopamine detoxing is based on neuroplasticity. By lowering your baseline stimulation, you regain sensitivity to life's simple pleasures.</p>
    </PageContainer>
);

export const Manifesto = () => (
    <PageContainer title="Manifesto">
        <p>We declare war on distraction. We choose intention over impulse. We are DopaMiners.</p>
    </PageContainer>
);

export const Community = () => (
    <PageContainer title="Community">
        <p>Join thousands of DopaMiners reclaiming their lives. Discord and Forum coming soon.</p>
    </PageContainer>
);

export const Legal = () => (
    <PageContainer title="Legal">
        <p>Legal Information and Disclaimers.</p>
    </PageContainer>
);

export const PrivacyPolicy = () => (
    <PageContainer title="Privacy Policy">
        <p>Your privacy is paramount. We do not sell your data.</p>
    </PageContainer>
);

export const TermsOfService = () => (
    <PageContainer title="Terms of Service">
        <p>By using DopaMiner, you agree to our terms of conduct...</p>
    </PageContainer>
);

export const CookiePolicy = () => (
    <PageContainer title="Cookie Policy">
        <p>We use minimal cookies to enhance your experience.</p>
    </PageContainer>
);

export const ContactUs = () => (
    <PageContainer title="Contact Us">
        <p>Email us at support@dopaminer.com</p>
    </PageContainer>
);
