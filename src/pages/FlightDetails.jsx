import React from 'react';
import { Link } from 'react-router-dom';

const FlightDetails = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-30 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-4">
                    <Link to="/results" className="flex items-center justify-center size-10 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined text-2xl">arrow_back</span>
                    </Link>
                    <h1 className="text-lg font-bold">Flight Details</h1>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center justify-center size-10 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined text-2xl">share</span>
                    </button>
                    <button className="flex items-center justify-center size-10 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined text-2xl">favorite</span>
                    </button>
                </div>
            </header>
            <main className="max-w-md mx-auto pb-32">
                {/* Journey Timeline Section */}
                <section className="p-4">
                    <div className="bg-white dark:bg-[#192233] rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">On Time</span>
                            <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">Flight AL-402</span>
                        </div>
                        <div className="relative flex flex-col gap-8">
                            {/* Departure */}
                            <div className="flex gap-4 relative">
                                <div className="flex flex-col items-center">
                                    <div className="size-4 rounded-full bg-primary ring-4 ring-primary/20 z-10"></div>
                                    <div className="w-0.5 grow bg-dashed bg-slate-200 dark:bg-slate-700 my-1 border-l-2 border-dashed"></div>
                                </div>
                                <div className="flex-1 -mt-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-bold">San Francisco (SFO)</h3>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm">Terminal 3, Gate G92</p>
                                        </div>
                                        <span className="text-lg font-bold">10:30 PM</span>
                                    </div>
                                </div>
                            </div>
                            {/* Duration Label */}
                            <div className="flex gap-4 items-center">
                                <div className="w-4 flex justify-center">
                                    <span className="material-symbols-outlined text-slate-400 text-lg">schedule</span>
                                </div>
                                <div className="bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">10h 15m Duration</span>
                                </div>
                            </div>
                            {/* Arrival */}
                            <div className="flex gap-4 relative">
                                <div className="flex flex-col items-center">
                                    <div className="size-4 rounded-full border-2 border-primary bg-background-light dark:bg-[#192233] z-10"></div>
                                </div>
                                <div className="flex-1 -mt-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-bold">London (LHR)</h3>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm">Terminal 5, Arrival</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-lg font-bold">4:45 PM</span>
                                            <p className="text-[10px] font-bold text-primary">+1 Day</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Aircraft Details Card */}
                <section className="px-4 mb-6">
                    <div className="bg-white dark:bg-[#192233] rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-4 p-4">
                            <div className="size-16 rounded-lg bg-cover bg-center shrink-0" data-alt="Close up of a Boeing aircraft engine" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCxQ5eopu-xQRDNX0CNKlP24yWkxp95wfB8X_FXESLH6kKauqAnCvKhgYTa7NMkPQyrXHNSLfqQOm5yPKMRy7KzrPBL60JzlBekWuBlz_cse6mcgZT8Evbyad7tzeGwQc_5aJ8K9DiLa0YYlvEfGiI1CVQbb1i7KmDuAMIY9tp1fXZZP0S-4g80Fx98V7LIw_dmmEv9of55dRq7FqDTHrQMhV-hTZSpwuCW19FTIvRo3ykfpr2ks3-9pS4_zD-pAbBPOuNco8CRCc')" }}></div>
                            <div className="flex-1">
                                <h4 className="font-bold">Boeing 787-9 Dreamliner</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400">AeroLink Fleet • Long-haul</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 border-t border-slate-200 dark:border-slate-800">
                            <div className="flex flex-col items-center py-4 gap-1">
                                <span className="material-symbols-outlined text-primary">wifi</span>
                                <span className="text-[10px] font-semibold uppercase text-slate-500 dark:text-slate-400">Free WiFi</span>
                            </div>
                            <div className="flex flex-col items-center py-4 gap-1 border-l border-slate-200 dark:border-slate-800">
                                <span className="material-symbols-outlined text-primary">battery_charging_full</span>
                                <span className="text-[10px] font-semibold uppercase text-slate-500 dark:text-slate-400">Power</span>
                            </div>
                            <div className="flex flex-col items-center py-4 gap-1 border-l border-slate-200 dark:border-slate-800">
                                <span className="material-symbols-outlined text-primary">restaurant</span>
                                <span className="text-[10px] font-semibold uppercase text-slate-500 dark:text-slate-400">Meals</span>
                            </div>
                            <div className="flex flex-col items-center py-4 gap-1 border-l border-slate-200 dark:border-slate-800">
                                <span className="material-symbols-outlined text-primary">movie</span>
                                <span className="text-[10px] font-semibold uppercase text-slate-500 dark:text-slate-400">Movies</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Seat Selection Preview */}
                <section className="px-4 mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3 px-1">Seat Selection</h2>
                    <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-4 border border-primary/20 relative overflow-hidden">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary text-white size-10 rounded-lg flex items-center justify-center">
                                    <span className="material-symbols-outlined">event_seat</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Standard Seat Included</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Rows 15-42 • Window & Aisle</p>
                                </div>
                            </div>
                            <button className="text-primary text-sm font-bold flex items-center gap-1">
                                Select
                                <span className="material-symbols-outlined text-base">chevron_right</span>
                            </button>
                        </div>
                        {/* Minimal Seat Map Visual */}
                        <div className="flex justify-center gap-1.5 opacity-40">
                            <div className="size-6 rounded-sm bg-primary/20 border border-primary/30"></div>
                            <div className="size-6 rounded-sm bg-primary/20 border border-primary/30"></div>
                            <div className="w-4"></div>
                            <div className="size-6 rounded-sm bg-primary/20 border border-primary/30"></div>
                            <div className="size-6 rounded-sm bg-primary border border-primary"></div>
                            <div className="size-6 rounded-sm bg-primary/20 border border-primary/30"></div>
                            <div className="w-4"></div>
                            <div className="size-6 rounded-sm bg-primary/20 border border-primary/30"></div>
                            <div className="size-6 rounded-sm bg-primary/20 border border-primary/30"></div>
                        </div>
                    </div>
                </section>
                {/* Travel Extras / Add-ons */}
                <section className="px-4 mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3 px-1">Enhance Your Journey</h2>
                    <div className="flex flex-col gap-3">
                        {/* Baggage */}
                        <div className="bg-white dark:bg-[#192233] p-4 rounded-xl flex items-center justify-between border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">luggage</span>
                                </div>
                                <div>
                                    <p className="font-bold">Extra Baggage</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Up to 23kg additional</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="font-bold text-slate-900 dark:text-white">$45</span>
                                <button className="size-8 rounded-lg bg-primary text-white flex items-center justify-center">
                                    <span className="material-symbols-outlined">add</span>
                                </button>
                            </div>
                        </div>
                        {/* Extra Legroom */}
                        <div className="bg-white dark:bg-[#192233] p-4 rounded-xl flex items-center justify-between border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">airline_seat_legroom_extra</span>
                                </div>
                                <div>
                                    <p className="font-bold">Space+ Legroom</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Additional 4 inches of space</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="font-bold text-slate-900 dark:text-white">$89</span>
                                <button className="size-8 rounded-lg bg-primary text-white flex items-center justify-center">
                                    <span className="material-symbols-outlined">add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* Fixed Bottom Footer Action */}
            <footer className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-[#111722] border-t border-slate-200 dark:border-slate-800 px-6 py-6 pb-8 backdrop-blur-lg">
                <div className="max-w-md mx-auto flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Total Price</span>
                        <span className="text-2xl font-bold">$1,248.00</span>
                    </div>
                    <Link to="/checkout" className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-primary/20 active:scale-[0.98] flex items-center justify-center">
                        Select Flight
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default FlightDetails;
