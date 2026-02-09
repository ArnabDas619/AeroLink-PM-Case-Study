import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileLoyalty = () => {
    const [notifications, setNotifications] = useState(true);

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen pb-24 font-display">
            {/* Top App Bar */}
            <div className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
                <div className="flex items-center p-4 justify-between max-w-md mx-auto">
                    <Link to="/home" className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 transition-colors cursor-pointer">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </Link>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">Profile & Loyalty</h2>
                    <div className="flex size-10 items-center justify-center">
                        <button className="text-primary flex items-center justify-center rounded-full hover:bg-primary/10 transition-colors p-2">
                            <span className="material-symbols-outlined">settings</span>
                        </button>
                    </div>
                </div>
            </div>
            <main className="max-w-md mx-auto px-4 py-2 space-y-6">
                {/* Profile Header */}
                <div className="flex flex-col items-center gap-4 py-4">
                    <div className="relative">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-28 w-28 border-4 border-primary/20" data-alt="Professional headshot of a smiling man in a suit" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBW21TZ2T0X2WDuJKdjeU5XEIuVCn61KZ0GEjBHPP0y0M489dUHCe7WdPPlmmrRwpiqUQW0nq0_9MnACOOQ-75I9LK9ohRhjgXUJOtKLnmKEGm7bWTX5oyxRugY2lX6EcoIpescn0MgW9fCaAkbEIJbahW20vLJelMIs-xWL-uum88lfHJZIhv07EJ_fRpjnhMOxp0w4PCw5bxoX0vDOSsL83zkZKdNP-6pai9MrTPv53bgwqNRdfw1wgPI8Ta_xcxZxN7y72ZMVDg")' }}>
                        </div>
                        <div className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full border-2 border-background-dark">
                            <span className="material-symbols-outlined text-sm block">verified</span>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold tracking-tight">Alex Sterling</h1>
                        <div className="flex items-center justify-center gap-1.5 mt-1">
                            <span className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-primary/20">Gold Member</span>
                            <span className="text-slate-500 dark:text-slate-400 text-sm">• Member since 2021</span>
                        </div>
                    </div>
                </div>
                {/* Loyalty Progress Card */}
                <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex justify-between items-end mb-4">
                        <div className="space-y-1">
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Next Tier: Platinum</p>
                            <p className="text-2xl font-bold">12,500 <span className="text-sm font-normal text-slate-500">miles to go</span></p>
                        </div>
                        <div className="text-right">
                            <p className="text-slate-400 dark:text-slate-500 text-xs uppercase font-bold tracking-widest">Progress</p>
                            <p className="text-primary font-bold">75%</p>
                        </div>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden mb-3">
                        <div className="bg-primary h-full rounded-full" style={{ width: "75%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs font-medium text-slate-500">
                        <span>37,500 Miles</span>
                        <span>50,000 Miles</span>
                    </div>
                </div>
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mb-1">Miles</p>
                        <p className="text-lg font-bold">142k</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mb-1">Bookings</p>
                        <p className="text-lg font-bold">12</p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mb-1">Hours</p>
                        <p className="text-lg font-bold">340h</p>
                    </div>
                </div>
                {/* Management Sections */}
                <div className="space-y-2">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 px-1">Travel Management</h3>
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800 overflow-hidden">
                        <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="size-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">card_membership</span>
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-sm">Frequent Flyer Numbers</p>
                                    <p className="text-xs text-slate-500">3 Linked accounts</p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                        </button>
                        <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="size-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">group</span>
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-sm">Saved Travelers</p>
                                    <p className="text-xs text-slate-500">4 Family & friends</p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                        </button>
                        <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="size-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">payments</span>
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-sm">Payment Methods</p>
                                    <p className="text-xs text-slate-500">Visa ending in 4242</p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                        </button>
                    </div>
                </div>
                {/* App Settings */}
                <div className="space-y-2">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 px-1">App Settings</h3>
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800 overflow-hidden">
                        <div className="flex items-center justify-between p-4">
                            <div className="flex items-center gap-3">
                                <div className="size-9 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300">
                                    <span className="material-symbols-outlined">notifications</span>
                                </div>
                                <p className="font-semibold text-sm">Push Notifications</p>
                            </div>
                            <div className="relative inline-block w-10 h-6 align-middle select-none transition duration-200 ease-in">
                                <input
                                    checked={notifications}
                                    onChange={() => setNotifications(!notifications)}
                                    className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer top-1 left-1 checked:right-1 checked:left-auto border-primary bg-primary"
                                    type="checkbox"
                                    name="toggle"
                                    id="toggle"
                                />
                                <label className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-300 dark:bg-slate-700 cursor-pointer" htmlFor="toggle"></label>
                            </div>
                        </div>
                        <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="size-9 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300">
                                    <span className="material-symbols-outlined">translate</span>
                                </div>
                                <p className="font-semibold text-sm">Language</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-sm text-slate-500">English</span>
                                <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
                            </div>
                        </button>
                        <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="size-9 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300">
                                    <span className="material-symbols-outlined">help_center</span>
                                </div>
                                <p className="font-semibold text-sm">Support & Feedback</p>
                            </div>
                            <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                        </button>
                    </div>
                </div>
                <button className="w-full py-4 text-red-500 font-bold hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-colors mt-4">
                    Log Out
                </button>
            </main>
            {/* Bottom Navigation Bar (iOS Style) */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 px-6 py-3 z-50">
                <div className="flex justify-between items-center max-w-md mx-auto">
                    <Link to="/home" className="flex flex-col items-center gap-1 text-slate-400">
                        <span className="material-symbols-outlined">home</span>
                        <span className="text-[10px] font-bold">Home</span>
                    </Link>
                    <Link to="/search" className="flex flex-col items-center gap-1 text-slate-400">
                        <span className="material-symbols-outlined">search</span>
                        <span className="text-[10px] font-bold">Search</span>
                    </Link>
                    <Link to="/results" className="flex flex-col items-center gap-1 text-slate-400">
                        <span className="material-symbols-outlined">confirmation_number</span>
                        <span className="text-[10px] font-bold">Bookings</span>
                    </Link>
                    <Link to="/profile" className="flex flex-col items-center gap-1 text-primary">
                        <span className="material-symbols-outlined font-variation-fill">person</span>
                        <span className="text-[10px] font-bold">Profile</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default ProfileLoyalty;
