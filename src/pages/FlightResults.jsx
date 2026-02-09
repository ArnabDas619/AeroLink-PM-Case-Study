import React from 'react';
import { Link } from 'react-router-dom';

const FlightResults = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen">
            <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden max-w-md mx-auto shadow-2xl">
                {/* Top Navigation Bar */}
                <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center p-4 justify-between gap-2">
                        <Link to="/search" className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined text-2xl">arrow_back</span>
                        </Link>
                        <div className="flex-1 flex flex-col items-center">
                            <h2 className="text-base font-bold leading-tight tracking-tight">NYC to LON</h2>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Oct 12 • 1 Passenger</p>
                        </div>
                        <button className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined text-2xl">tune</span>
                        </button>
                    </div>
                    {/* Filter Chips - Horizontal Scroll */}
                    <div className="flex gap-2 px-4 pb-4 overflow-x-auto hide-scrollbar">
                        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-4">
                            <span className="text-xs font-semibold">Cheapest</span>
                            <span className="material-symbols-outlined text-lg">expand_more</span>
                        </button>
                        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 px-4 border border-transparent hover:border-primary/50 transition-all">
                            <span className="text-xs font-semibold">Fastest</span>
                        </button>
                        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 px-4 border border-transparent hover:border-primary/50 transition-all">
                            <span className="text-xs font-semibold">Non-stop</span>
                        </button>
                        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-slate-800 px-4 border border-transparent hover:border-primary/50 transition-all">
                            <span className="text-xs font-semibold">Greener</span>
                        </button>
                    </div>
                </header>
                <main className="flex-1 p-4 space-y-4">
                    {/* Flight Result Card 1: Best Value */}
                    <div className="relative overflow-hidden flex flex-col bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/40 transition-all">
                        <div className="p-4 flex flex-col gap-4">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                                        <img className="w-8 h-8 object-contain" alt="Delta Airlines logo icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4Sz0qJB2Nzyapp2TvLNkuEziMfGyTWD2-PrU4wJcsN1tdEy_z99r9ZvvaZAHKiq9ydVs8cJn5bQbpNO0kj1KJt0Ap9YmCF6JzqlCeAoH210qIVHb-UFGpm4UNOXb6PX3ptQ-kVMShdHgw8GgnBQ36PC8b7_epmHNBsAVOpYTDuNrZgcuGBl-t68MwfIx1x-SmF1xWS8dUwyfPByPC_79pR027IJ4WCEEKefyIO1HnO0MwyoKkz-TJ8MyftRL__W_gUbzwV-Jb60Y" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">Delta Airlines</p>
                                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary tracking-wide uppercase">
                                            Best Value
                                        </span>
                                    </div>
                                </div>
                                <p className="text-xl font-bold tracking-tight">$450</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <p className="text-lg font-bold">08:30</p>
                                    <p className="text-xs text-slate-500 font-medium">JFK</p>
                                </div>
                                <div className="flex-1 px-4 flex flex-col items-center">
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Direct</p>
                                    <div className="relative w-full h-[2px] bg-slate-200 dark:bg-slate-700">
                                        <div className="absolute -top-1 left-0 size-2 rounded-full bg-primary"></div>
                                        <div className="absolute -top-1 right-0 size-2 rounded-full bg-slate-400"></div>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#101622] px-1">
                                            <span className="material-symbols-outlined text-primary text-sm">flight</span>
                                        </div>
                                    </div>
                                    <p className="text-[11px] text-slate-500 font-medium mt-1">7h 45m</p>
                                </div>
                                <div className="flex flex-col items-end">
                                    <p className="text-lg font-bold">16:15</p>
                                    <p className="text-xs text-slate-500 font-medium">LHR</p>
                                </div>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <Link to="/details" className="flex-1 bg-primary text-white py-3 rounded-lg font-bold text-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center">
                                    Select Flight
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Flight Result Card 2: Carbon Efficient */}
                    <div className="relative overflow-hidden flex flex-col bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/40 transition-all">
                        <div className="p-4 flex flex-col gap-4">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                                        <img className="w-8 h-8 object-contain" alt="British Airways logo icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGnJNLoMWNg3BjFqBp_fq280iLLCeyuVjKe16IF21B88K6UloA3IRvN4YLc6MNkv2ACOtbvv8RTEbPWO_9xduTQyG_nHbyd2ESMfQs9qizMuCFUxlCO_Cd1rbiVE8nDDmVG3ldTXBBf73erIwJAL6tUh32ehz1-YgrYQKtlCFCeAVRpLNJeOF0U6O3lf1eDbJzkNDm-i3oiek_fQUdpM8YrPc6FGjYi3SbhSZ-x5SL05lh1OGTx6-NvQUxoA8CyLZi-pwdpmbpQ3s" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">British Airways</p>
                                        <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-500 tracking-wide uppercase">
                                            <span className="material-symbols-outlined text-xs mr-1">eco</span>
                                            Carbon Efficient
                                        </span>
                                    </div>
                                </div>
                                <p className="text-xl font-bold tracking-tight">$520</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <p className="text-lg font-bold">10:00</p>
                                    <p className="text-xs text-slate-500 font-medium">EWR</p>
                                </div>
                                <div className="flex-1 px-4 flex flex-col items-center">
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">1 Stop (MAD)</p>
                                    <div className="relative w-full h-[2px] bg-slate-200 dark:bg-slate-700">
                                        <div className="absolute -top-1 left-0 size-2 rounded-full bg-primary"></div>
                                        <div className="absolute -top-1 right-0 size-2 rounded-full bg-slate-400"></div>
                                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 size-2 rounded-full border-2 border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-900"></div>
                                        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 bg-white dark:bg-[#101622] px-1">
                                            <span className="material-symbols-outlined text-primary text-sm">flight</span>
                                        </div>
                                    </div>
                                    <p className="text-[11px] text-slate-500 font-medium mt-1">9h 45m</p>
                                </div>
                                <div className="flex flex-col items-end">
                                    <p className="text-lg font-bold">19:45</p>
                                    <p className="text-xs text-slate-500 font-medium">LHR</p>
                                </div>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <Link to="/details" className="flex-1 bg-primary text-white py-3 rounded-lg font-bold text-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center">
                                    Select Flight
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Flight Result Card 3 */}
                    <div className="relative overflow-hidden flex flex-col bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/40 transition-all">
                        <div className="p-4 flex flex-col gap-4">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                                        <img className="w-8 h-8 object-contain" alt="United Airlines logo icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWrr-4Z3VEPUDLN0738aOYecth_lZlaejiFa8jJ3qtDUN6ayDZxPLOzls5tXz_0nsmA2ty4LxrNVp_hkiUSvYRXiYcq-Gca1OUUDukde20G2BPY1yzPYfQlcVdp9zr_XCB4zGSfQDK4mlw5HmE6uKfDuySsEm5dFFNmcI41GHiLHDdIW7MvnJUHm1Al7UEE4c78cad9R3CkUpo8wOb-yzLdgCUkivvBcGUUiXg_35NlDmJHZNGZrRyPYrrFdTBR9S23BGZXYONJlI" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">United Airlines</p>
                                    </div>
                                </div>
                                <p className="text-xl font-bold tracking-tight">$390</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <p className="text-lg font-bold">22:15</p>
                                    <p className="text-xs text-slate-500 font-medium">JFK</p>
                                </div>
                                <div className="flex-1 px-4 flex flex-col items-center">
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">1 Stop (ORD)</p>
                                    <div className="relative w-full h-[2px] bg-slate-200 dark:bg-slate-700">
                                        <div className="absolute -top-1 left-0 size-2 rounded-full bg-primary"></div>
                                        <div className="absolute -top-1 right-0 size-2 rounded-full bg-slate-400"></div>
                                        <div className="absolute top-1/2 left-2/3 -translate-y-1/2 bg-white dark:bg-[#101622] px-1">
                                            <span className="material-symbols-outlined text-primary text-sm">flight</span>
                                        </div>
                                    </div>
                                    <p className="text-[11px] text-slate-500 font-medium mt-1">12h 15m</p>
                                </div>
                                <div className="flex flex-col items-end">
                                    <p className="text-lg font-bold">10:30<span className="text-[10px] text-primary align-top">+1</span></p>
                                    <p className="text-xs text-slate-500 font-medium">LHR</p>
                                </div>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <Link to="/details" className="flex-1 bg-primary text-white py-3 rounded-lg font-bold text-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center">
                                    Select Flight
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Padding for FAB */}
                    <div className="h-20"></div>
                </main>
                {/* Floating Action Button */}
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
                    <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-primary rounded-full shadow-2xl text-white hover:scale-105 active:scale-95 transition-all">
                        <span className="material-symbols-outlined text-xl">sort</span>
                        <span className="text-sm font-bold">Sort & Filter</span>
                    </button>
                </div>
                {/* iOS Bottom Indicator */}
                <div className="fixed bottom-0 left-0 w-full h-8 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent pointer-events-none"></div>
            </div>
        </div>
    );
};

export default FlightResults;
