import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SmartAlerts = () => {
    const [filter, setFilter] = useState('All');

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased">
            <div className="relative mx-auto min-h-screen max-w-md bg-background-light dark:bg-background-dark overflow-x-hidden pb-20">
                {/* Top App Bar */}
                <header className="sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
                    <div className="flex items-center justify-between p-4">
                        <Link to="/home" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200/50 dark:bg-card-dark text-slate-900 dark:text-white">
                            <span className="material-symbols-outlined">arrow_back_ios_new</span>
                        </Link>
                        <h1 className="text-lg font-bold tracking-tight">Smart Alerts</h1>
                        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200/50 dark:bg-card-dark text-slate-900 dark:text-white">
                            <span className="material-symbols-outlined">settings</span>
                        </button>
                    </div>
                    {/* Current Flight Context */}
                    <div className="px-4 pb-2">
                        <div className="flex items-center justify-between rounded-xl bg-primary/10 p-3 border border-primary/20">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                                    <span className="material-symbols-outlined">flight_takeoff</span>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">Active Trip</p>
                                    <p className="text-sm font-bold">AL-402 • JFK International</p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-primary">chevron_right</span>
                        </div>
                    </div>
                    {/* Segmented Control */}
                    <div className="mt-2 border-b border-slate-200 dark:border-white/10 px-4">
                        <div className="flex gap-6">
                            <button
                                onClick={() => setFilter('All')}
                                className={`relative pb-3 text-sm font-bold ${filter === 'All' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}
                            >
                                All
                                {filter === 'All' && <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"></span>}
                            </button>
                            <button
                                onClick={() => setFilter('Flight')}
                                className={`relative pb-3 text-sm font-bold ${filter === 'Flight' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}
                            >
                                Flight
                                {filter === 'Flight' && <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"></span>}
                            </button>
                            <button
                                onClick={() => setFilter('Baggage')}
                                className={`relative pb-3 text-sm font-bold ${filter === 'Baggage' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}
                            >
                                Baggage
                                {filter === 'Baggage' && <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"></span>}
                            </button>
                            <button
                                onClick={() => setFilter('Security')}
                                className={`relative pb-3 text-sm font-bold ${filter === 'Security' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}
                            >
                                Security
                                {filter === 'Security' && <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"></span>}
                            </button>
                        </div>
                    </div>
                </header>
                {/* Activity Feed */}
                <main className="mt-6 px-4 space-y-6">
                    {/* Alert Item: Gate Change */}
                    <div className="relative flex gap-4 group">
                        <div className="timeline-line"></div>
                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary ring-4 ring-background-light dark:ring-background-dark">
                            <span className="material-symbols-outlined text-white text-[20px]">door_open</span>
                        </div>
                        <div className="flex flex-col flex-1 gap-2 pb-6">
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold text-primary">Gate Change: Now at B12</h3>
                                <span className="text-[10px] font-medium text-slate-500 uppercase tracking-tighter">2 mins ago</span>
                            </div>
                            <div className="rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm border border-slate-200 dark:border-white/5">
                                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                    Your flight <span className="font-bold">AL-402</span> to JFK is now departing from <span className="text-primary font-bold">Gate B12</span>. Please head to Terminal 2.
                                </p>
                                <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-primary/10 py-2 text-sm font-bold text-primary">
                                    <span className="material-symbols-outlined text-sm">map</span>
                                    View Airport Map
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Alert Item: Delay */}
                    <div className="relative flex gap-4 group">
                        <div className="timeline-line"></div>
                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-danger ring-4 ring-background-light dark:ring-background-dark">
                            <span className="material-symbols-outlined text-white text-[20px]">schedule</span>
                        </div>
                        <div className="flex flex-col flex-1 gap-2 pb-6">
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold text-danger">Flight Delay: +20 mins</h3>
                                <span className="text-[10px] font-medium text-slate-500 uppercase tracking-tighter">15 mins ago</span>
                            </div>
                            <div className="rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm border border-slate-200 dark:border-white/5">
                                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                    New departure time is <span className="font-bold">10:45 AM</span> due to late arrival of aircraft. We apologize for the inconvenience.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Alert Item: Baggage */}
                    <div className="relative flex gap-4 group">
                        <div className="timeline-line"></div>
                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-success ring-4 ring-background-light dark:ring-background-dark">
                            <span className="material-symbols-outlined text-white text-[20px]">luggage</span>
                        </div>
                        <div className="flex flex-col flex-1 gap-2 pb-6">
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold text-success">Baggage Ready</h3>
                                <span className="text-[10px] font-medium text-slate-500 uppercase tracking-tighter">1 hour ago</span>
                            </div>
                            <div className="rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm border border-slate-200 dark:border-white/5">
                                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                    Your checked luggage from flight <span className="font-bold">AL-402</span> is now available at <span className="text-success font-bold">Carousel 4</span>.
                                </p>
                                <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-success/10 py-2 text-sm font-bold text-success">
                                    <span className="material-symbols-outlined text-sm">location_on</span>
                                    Track My Bags
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Alert Item: Check-in */}
                    <div className="relative flex gap-4 group last-item">
                        <div className="timeline-line"></div>
                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-400 ring-4 ring-background-light dark:ring-background-dark">
                            <span className="material-symbols-outlined text-white text-[20px]">how_to_reg</span>
                        </div>
                        <div className="flex flex-col flex-1 gap-2 pb-6">
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold text-slate-400">Check-in Completed</h3>
                                <span className="text-[10px] font-medium text-slate-500 uppercase tracking-tighter">3 hours ago</span>
                            </div>
                            <div className="rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm border border-slate-200 dark:border-white/5 opacity-80">
                                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                    Your digital boarding pass has been generated. You are confirmed for seat <span className="font-bold">12F</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
                {/* Bottom Navigation Bar (iOS Style) */}
                <nav className="fixed bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 border-t border-slate-200 bg-white/90 dark:border-white/10 dark:bg-background-dark/90 backdrop-blur-xl px-6 pb-8 pt-3">
                    <div className="flex items-center justify-between">
                        <Link to="/home" className="flex flex-col items-center gap-1 text-slate-400">
                            <span className="material-symbols-outlined">home</span>
                            <span className="text-[10px] font-medium">Home</span>
                        </Link>
                        <Link to="/alerts" className="flex flex-col items-center gap-1 text-slate-400">
                            <span className="material-symbols-outlined text-primary font-variation-fill">notifications</span>
                            <span className="text-[10px] font-bold text-primary">Alerts</span>
                        </Link>
                        <Link to="/boarding-pass" className="flex flex-col items-center gap-1 text-slate-400">
                            <div className="flex h-12 w-12 -translate-y-6 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 ring-4 ring-background-light dark:ring-background-dark">
                                <span className="material-symbols-outlined text-[28px]">qr_code_scanner</span>
                            </div>
                            <span className="text-[10px] font-medium -mt-5">Boarding</span>
                        </Link>
                        <Link to="/results" className="flex flex-col items-center gap-1 text-slate-400">
                            <span className="material-symbols-outlined">explore</span>
                            <span className="text-[10px] font-medium">Trips</span>
                        </Link>
                        <Link to="/profile" className="flex flex-col items-center gap-1 text-slate-400">
                            <span className="material-symbols-outlined">person</span>
                            <span className="text-[10px] font-medium">Profile</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default SmartAlerts;
