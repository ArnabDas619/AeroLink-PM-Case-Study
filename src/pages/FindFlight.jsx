import React from 'react';
import { Link } from 'react-router-dom';

const FindFlight = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-300 min-h-screen">
            {/* Mobile Container */}
            <div className="relative flex min-h-screen w-full max-w-[480px] mx-auto flex-col overflow-hidden bg-background-light dark:bg-background-dark shadow-2xl">
                {/* Status Bar Space (Mock) */}
                <div className="h-12 flex items-center justify-between px-6 shrink-0">
                    <span className="text-xs font-bold">9:41</span>
                    <div className="flex gap-1">
                        <span className="material-symbols-outlined text-sm">signal_cellular_4_bar</span>
                        <span className="material-symbols-outlined text-sm">wifi</span>
                        <span className="material-symbols-outlined text-sm">battery_full</span>
                    </div>
                </div>
                {/* Header */}
                <header className="px-6 py-4 flex items-center gap-4">
                    <Link to="/home" className="flex items-center justify-center size-10 rounded-full bg-white/10 dark:bg-white/5 border border-slate-200 dark:border-border-dark">
                        <span className="material-symbols-outlined text-xl">arrow_back</span>
                    </Link>
                    <h1 className="text-xl font-bold tracking-tight">Find Your Next Flight</h1>
                </header>
                {/* Main Content Area Scrollable */}
                <main className="flex-1 overflow-y-auto px-6 pb-32">
                    {/* Trip Type Toggle */}
                    <div className="mt-4 mb-8">
                        <div className="flex h-12 w-full items-center justify-center rounded-xl bg-slate-200/50 dark:bg-field-dark p-1">
                            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-background-dark has-[:checked]:shadow-sm text-slate-500 dark:text-slate-400 has-[:checked]:text-primary dark:has-[:checked]:text-white text-sm font-semibold transition-all">
                                <span className="truncate">One-way</span>
                                <input className="hidden" name="trip-type" type="radio" value="one-way" />
                            </label>
                            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-background-dark has-[:checked]:shadow-sm text-slate-500 dark:text-slate-400 has-[:checked]:text-primary dark:has-[:checked]:text-white text-sm font-semibold transition-all">
                                <span className="truncate">Round-trip</span>
                                <input defaultChecked className="hidden" name="trip-type" type="radio" value="round-trip" />
                            </label>
                        </div>
                    </div>
                    {/* Route Inputs */}
                    <div className="relative flex flex-col gap-3">
                        {/* From */}
                        <div className="flex flex-col gap-1.5 p-4 rounded-2xl bg-white dark:bg-field-dark border border-slate-100 dark:border-border-dark group">
                            <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500">From</span>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">location_on</span>
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold">New York</span>
                                    <span className="text-xs text-slate-400">JFK, John F. Kennedy Int.</span>
                                </div>
                            </div>
                        </div>
                        {/* Swap Button */}
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10">
                            <button className="flex size-10 items-center justify-center rounded-full bg-primary text-white shadow-lg border-4 border-background-light dark:border-background-dark">
                                <span className="material-symbols-outlined text-lg">swap_vert</span>
                            </button>
                        </div>
                        {/* To */}
                        <div className="flex flex-col gap-1.5 p-4 rounded-2xl bg-white dark:bg-field-dark border border-slate-100 dark:border-border-dark">
                            <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500">To</span>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">flight_land</span>
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold">London</span>
                                    <span className="text-xs text-slate-400">LHR, Heathrow Airport</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Date and Passenger Grid */}
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        {/* Departure */}
                        <div className="flex flex-col gap-1.5 p-4 rounded-2xl bg-white dark:bg-field-dark border border-slate-100 dark:border-border-dark">
                            <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500">Departure</span>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-slate-400 text-lg">calendar_today</span>
                                <span className="text-sm font-bold">Oct 24, 2023</span>
                            </div>
                        </div>
                        {/* Return */}
                        <div className="flex flex-col gap-1.5 p-4 rounded-2xl bg-white dark:bg-field-dark border border-slate-100 dark:border-border-dark">
                            <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500">Return</span>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-slate-400 text-lg">calendar_month</span>
                                <span className="text-sm font-bold">Oct 30, 2023</span>
                            </div>
                        </div>
                    </div>
                    {/* Passengers / Class */}
                    <div className="mt-4 flex flex-col gap-1.5 p-4 rounded-2xl bg-white dark:bg-field-dark border border-slate-100 dark:border-border-dark">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500">Travelers & Class</span>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-slate-400">group</span>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold">1 Adult, Economy</span>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
                        </div>
                    </div>
                    {/* Recent Searches Section */}
                    <div className="mt-8">
                        <h3 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-4 px-1">Recent Searches</h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-transparent dark:border-border-dark">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary text-sm">history</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold">NYC → LHR</p>
                                        <p className="text-[10px] text-slate-500">Oct 24 - Oct 30</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-xs text-slate-400">close</span>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-transparent dark:border-border-dark opacity-70">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary text-sm">history</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold">PAR → TYO</p>
                                        <p className="text-[10px] text-slate-500">Nov 12 - Nov 20</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-xs text-slate-400">close</span>
                            </div>
                        </div>
                    </div>
                </main>
                {/* Floating Bottom Search Button */}
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-10 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light/95 dark:via-background-dark/95 to-transparent">
                    <Link to="/results" className="w-full h-14 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:bg-blue-700 transition-colors">
                        <span className="material-symbols-outlined">search</span>
                        Search Flights
                    </Link>
                </div>
                {/* iOS Home Indicator Mock */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-400/30 rounded-full"></div>
            </div>
        </div>
    );
};

export default FindFlight;
