import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display pb-24 min-h-screen">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-6 pb-4">
                <div className="flex items-center justify-between max-w-md mx-auto">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-center bg-no-repeat bg-cover ring-2 ring-primary/20" data-alt="User profile avatar of a smiling man" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuADy5D7bua2IljgcOG9cdGTGNQaY4TTFJxrrFEr_qw1yoB9qqxsZ6LlS_z8M5qUjjii6wsIv9ZFvUlbBn7EoMo39O66n6s8l09bPa3mMvQA4TfOWD52_Sv96S2ItGTPfAyUYHpAeiqnM_b_TsNASYXgqHmE2y5ooDfxuwerl8zkfECmU97-iVgeJ4qbDLmgscndrLslJK4jxSca5bpGBy8dMMs5CpjUkSpCyow08koZYTo6-brLyUDQ47PKiDZ7GFF8WXa694aCMvo")' }}></div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Good Morning</p>
                            <h1 className="text-base font-bold leading-tight">Alex Harrison</h1>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Link to="/alerts" className="size-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 relative">
                            <span className="material-symbols-outlined text-[22px]">notifications</span>
                            <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-background-light dark:border-background-dark"></span>
                        </Link>
                    </div>
                </div>
            </header>
            <main className="max-w-md mx-auto px-4 space-y-6">
                {/* Next Trip Card */}
                <section className="mt-2">
                    <div className="bg-slate-100 dark:bg-[#192233] rounded-xl overflow-hidden shadow-sm">
                        {/* Trip Image/Header */}
                        <Link to="/details" className="block relative h-40 w-full bg-center bg-no-repeat bg-cover flex items-end p-4" data-alt="London Big Ben and Westminster Bridge sunset view" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxxH8r7Pu8bFmANvScv2k54-vGGcYnx4y54ZyGJ7xsbxmPHGishreN3C0ARSwmOks87JQljnbFkDs6xbopAHMUkWmAJl_BLWJjAdUtSB95tqI6z-lUSKXaxD1w4oDLJnIS-7mVZ6gdbTbk6KyhvkhFaMGJIOS1S-hDnz9hzkawRoRwpCxVZOTXXMU4gB7KB-nkkWf4gsOCvey4kks9yOLyS9ih43M6xSxjUOkMBWRanYveSqJn-N70DcGXV4bwSBPD4Kgk37gLkeU")' }}>
                            <div className="flex justify-between items-end w-full">
                                <div>
                                    <span className="inline-block px-2 py-0.5 bg-primary text-[10px] font-bold text-white rounded-full mb-1">NEXT TRIP • ON TIME</span>
                                    <h2 className="text-white text-xl font-bold">LHR to JFK</h2>
                                </div>
                                <p className="text-white/80 text-xs font-medium pb-0.5">Flight AL204</p>
                            </div>
                        </Link>
                        {/* Countdown and Details */}
                        <div className="p-4 space-y-4">
                            <div className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-700/50">
                                <div className="text-center">
                                    <p className="text-primary text-xl font-bold">04</p>
                                    <p className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Hours</p>
                                </div>
                                <div className="text-slate-300 font-light text-2xl">:</div>
                                <div className="text-center">
                                    <p className="text-primary text-xl font-bold">20</p>
                                    <p className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Mins</p>
                                </div>
                                <div className="text-slate-300 font-light text-2xl">:</div>
                                <div className="text-center">
                                    <p className="text-primary text-xl font-bold">00</p>
                                    <p className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Secs</p>
                                </div>
                                <div className="h-8 w-px bg-slate-200 dark:border-slate-700 mx-2"></div>
                                <div className="flex flex-col items-end">
                                    <p className="text-xs font-bold">Gate B32</p>
                                    <p className="text-[10px] text-slate-500 dark:text-slate-400">Seat 14A • Group 2</p>
                                </div>
                            </div>
                            {/* Quick Actions */}
                            <div className="flex gap-3">
                                <Link to="/boarding-pass" className="flex-1 bg-primary text-white h-11 rounded-lg font-bold text-sm flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-lg">check_circle</span>
                                    Check-in
                                </Link>
                                <button className="size-11 flex items-center justify-center bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white rounded-lg">
                                    <span className="material-symbols-outlined">qr_code_2</span>
                                </button>
                                <button className="size-11 flex items-center justify-center bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white rounded-lg">
                                    <span className="material-symbols-outlined">map</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Dynamic Icons Grid */}
                <section className="grid grid-cols-4 gap-2">
                    <div className="flex flex-col items-center gap-2">
                        <div className="size-12 rounded-xl bg-slate-100 dark:bg-[#232f48] flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">confirmation_number</span>
                        </div>
                        <p className="text-[11px] font-bold text-slate-600 dark:text-slate-400">Passes</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="size-12 rounded-xl bg-slate-100 dark:bg-[#232f48] flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">luggage</span>
                        </div>
                        <p className="text-[11px] font-bold text-slate-600 dark:text-slate-400">Baggage</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="size-12 rounded-xl bg-slate-100 dark:bg-[#232f48] flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">restaurant</span>
                        </div>
                        <p className="text-[11px] font-bold text-slate-600 dark:text-slate-400">Dining</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="size-12 rounded-xl bg-slate-100 dark:bg-[#232f48] flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">support_agent</span>
                        </div>
                        <p className="text-[11px] font-bold text-slate-600 dark:text-slate-400">Support</p>
                    </div>
                </section>
                {/* Past Trips Section */}
                <section>
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold">Past Trips</h3>
                        <button className="text-xs font-bold text-primary">View All</button>
                    </div>
                    <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-4 px-4 pb-2">
                        {/* Past Trip Card 1 */}
                        <div className="min-w-[200px] bg-slate-100 dark:bg-slate-800/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                            <div className="h-24 w-full bg-center bg-no-repeat bg-cover" data-alt="Sydney Opera House during twilight" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCsrAi4BWDcJ3oOWgt9sdNUpP7zvJELkc23gJ0Pv71Pm2I9xJeCMrDJ5YLPGVB3deZlzuqPpaL3NrH9wtylf7HLpcVdlW9WVqsh5iQxL3xBjivoi_Hgjl-SQ5rN27qd40fhVMnw7XHXbldbdj415fZ77dTMX5cNN8x-1DlcthNC-Eb9b12CmNdiMllU_FpmAX5p-YsjCJPgCs2xfA3xeWBykc6tIAfLI2e35rEigxhEvzW75p2no3RiFP_UxQFW1zaHny9bdys205g")' }}></div>
                            <div className="p-3">
                                <p className="text-[10px] font-bold text-primary mb-0.5">MAR 12 - 18, 2023</p>
                                <h4 className="text-sm font-bold">Sydney, Australia</h4>
                                <div className="flex items-center gap-1 mt-2 text-slate-500">
                                    <span className="material-symbols-outlined text-xs">flight_takeoff</span>
                                    <span className="text-[10px]">LHR-SYD</span>
                                </div>
                            </div>
                        </div>
                        {/* Past Trip Card 2 */}
                        <div className="min-w-[200px] bg-slate-100 dark:bg-slate-800/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                            <div className="h-24 w-full bg-center bg-no-repeat bg-cover" data-alt="Kyoto Japan traditional temple and autumn leaves" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdwwZeOD0GXmgBZ8gr6mqRfUIT3i2NInf9ungTlLYuta9aG7wdH-UDTmfxTNTdsspSaLfZVp-uvW8fUwlTFhYwNGvd_2CIkvFi2NsH2TdK0Nd1YzPf0vPB6XAZHuIswUYFNjSsNdaxd_xbwEJb5L9BSy-wDlaL3hyYzqmozbEo8d-vtdkMUs2inpPQNxkwdGMCbcCIWAB0dVY382UE_iQQD0wAG4bvL-w_s0H9zs2dls6f4pPAmduvb9UGMRwCMi1Y-0ZYv1j5XrM")' }}></div>
                            <div className="p-3">
                                <p className="text-[10px] font-bold text-primary mb-0.5">JAN 05 - 12, 2023</p>
                                <h4 className="text-sm font-bold">Kyoto, Japan</h4>
                                <div className="flex items-center gap-1 mt-2 text-slate-500">
                                    <span className="material-symbols-outlined text-xs">flight_takeoff</span>
                                    <span className="text-[10px]">LHR-HND</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Travel Tips Section */}
                <section className="pb-8">
                    <h3 class="text-lg font-bold mb-3">Travel Tips</h3>
                    <div className="grid grid-cols-1 gap-3">
                        <div className="bg-primary/10 dark:bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-4 items-center">
                            <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                <span className="material-symbols-outlined text-2xl">wb_sunny</span>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold">New York Weather</h4>
                                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Expected 18°C & sunny. Perfect for a walk in Central Park.</p>
                            </div>
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex gap-4 items-center">
                            <div className="size-12 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shrink-0">
                                <span className="material-symbols-outlined text-2xl">chair</span>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold">Lounge Access Available</h4>
                                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Your status allows entry to the BA Galleries Lounge at Terminal 5.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* Bottom Tab Bar (iOS Style) */}
            <nav className="fixed bottom-0 left-0 right-0 bg-background-light/90 dark:bg-[#111722]/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800/50 px-6 pt-2 pb-8 z-50">
                <div className="max-w-md mx-auto flex justify-between items-center">
                    <Link to="/home" className="flex flex-col items-center gap-1 text-primary">
                        <span className="material-symbols-outlined font-variation-fill">home</span>
                        <span className="text-[10px] font-bold">Home</span>
                    </Link>
                    <Link to="/search" className="flex flex-col items-center gap-1 text-slate-400">
                        <span className="material-symbols-outlined">search</span>
                        <span className="text-[10px] font-bold">Explore</span>
                    </Link>
                    <Link to="/results" className="flex flex-col items-center gap-1 text-slate-400">
                        <span className="material-symbols-outlined">airplane_ticket</span>
                        <span className="text-[10px] font-bold">Trips</span>
                    </Link>
                    <Link to="/profile" className="flex flex-col items-center gap-1 text-slate-400">
                        <span className="material-symbols-outlined">person</span>
                        <span className="text-[10px] font-bold">Profile</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Home;
