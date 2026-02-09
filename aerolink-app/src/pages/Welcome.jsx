import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="relative flex h-screen w-full max-w-[430px] mx-auto flex-col bg-background-light dark:bg-background-dark overflow-hidden">
            {/* Status Bar Spacer (iOS Style) */}
            <div className="h-[44px] w-full flex justify-between items-center px-8 shrink-0">
                <span className="text-xs font-bold">9:41</span>
                <div className="flex gap-1 items-center">
                    <span className="material-symbols-outlined text-[16px]">signal_cellular_alt</span>
                    <span className="material-symbols-outlined text-[16px]">wifi</span>
                    <span className="material-symbols-outlined text-[16px]">battery_full</span>
                </div>
            </div>
            {/* Hero Image Section */}
            <div className="relative flex-1 w-full flex flex-col">
                {/* Image with Gradient Overlay */}
                <div
                    className="absolute inset-0 w-full h-[65%] bg-center bg-no-repeat bg-cover"
                    role="img"
                    aria-label="A serene view of an airplane wing above soft white clouds at sunset"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBAL6iu4dX6J2Vu9fM_Qhv3JsCiryDdXmrDNcG-fZxAz0b2SotYMPDKrnrYYO2-Yseuq0ShWhi-X5G73JhD5sC6OrGtSfEl6NGUnPOGLyFwjnSfxL1zKJVlReK8TzAbvwvCKU63rEUYmY0j1FWEonAAE9UACFNp61JOAwG9zLOqsbL2SVZvdh3OafirWY-BqNNL8OWAv2BGOmjYLpY8tFbk20UVCb2fcRbwVXBGwxdiy8Ar7mBVxVA3St9MvcxxHRlSzpNJ-wAKZqk")' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(16,22,34,0.8)] to-[#101622]"></div>
                </div>
                {/* Logo and Brand */}
                <div className="relative z-10 pt-12 flex flex-col items-center">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 mb-4">
                        <span className="material-symbols-outlined text-white text-3xl">flight_takeoff</span>
                    </div>
                    <h2 className="text-xl font-extrabold tracking-tight text-white uppercase">AeroLink</h2>
                </div>
                {/* Content Area */}
                <div className="relative z-10 mt-auto px-8 pb-10 flex flex-col items-center text-center">
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white mb-4">
                        Your Journey,<br />Reimagined
                    </h1>
                    <p className="text-slate-300 text-base font-normal leading-relaxed max-w-[280px]">
                        Experience seamless flight booking and real-time travel management at your fingertips.
                    </p>
                    {/* Onboarding Dots */}
                    <div className="flex gap-2 mt-8 mb-4">
                        <div className="w-6 h-1.5 rounded-full bg-primary"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    </div>
                </div>
            </div>
            {/* Action Buttons */}
            <div className="relative z-10 px-6 pt-2 pb-12 flex flex-col gap-3">
                <Link to="/home" className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                    <span>Get Started</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <button className="w-full h-14 bg-white/5 dark:bg-white/10 hover:bg-white/10 dark:hover:bg-white/20 text-slate-900 dark:text-white rounded-xl font-bold text-lg transition-all active:scale-[0.98] flex items-center justify-center">
                    Log In
                </button>
                <p className="text-slate-500 dark:text-slate-400 text-[11px] font-medium text-center mt-4 px-10 uppercase tracking-widest leading-loose">
                    By continuing, you agree to our <br />
                    <span className="text-primary cursor-pointer">Terms of Service</span> & <span className="text-primary cursor-pointer">Privacy Policy</span>
                </p>
            </div>
            {/* Home Indicator (iOS Style) */}
            <div className="w-full flex justify-center pb-2 shrink-0">
                <div className="w-32 h-1.5 bg-slate-300 dark:bg-slate-800 rounded-full"></div>
            </div>
            {/* Decorative Elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-20 dark:opacity-40">
                <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-blue-400 rounded-full blur-[100px]"></div>
            </div>
        </div>
    );
};

export default Welcome;
