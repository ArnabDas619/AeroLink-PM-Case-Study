import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
            <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden max-w-[430px] mx-auto shadow-2xl">
                {/* Header */}
                <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
                    <div className="flex items-center p-4 pb-2 justify-between">
                        <Link to="/details" className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </Link>
                        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Checkout</h2>
                    </div>
                    {/* Progress Indicator */}
                    <div className="flex flex-col gap-2 p-4 pt-0">
                        <div className="flex gap-6 justify-between items-center">
                            <p className="text-slate-900 dark:text-white text-sm font-semibold leading-normal uppercase tracking-wider">Step 3: Secure Payment</p>
                            <p className="text-slate-500 dark:text-[#92a4c9] text-xs font-medium">Finalizing...</p>
                        </div>
                        <div className="rounded-full bg-slate-200 dark:bg-[#324467] h-1.5 overflow-hidden">
                            <div className="h-full rounded-full bg-primary" style={{ width: "100%" }}></div>
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto pb-40">
                    {/* Booking Summary */}
                    <section className="p-4">
                        <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight mb-3">Flight Summary</h3>
                        <div className="flex items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-[#192233] p-4 shadow-sm border border-slate-100 dark:border-slate-800">
                            <div className="flex flex-col gap-2 flex-[2_2_0px]">
                                <div className="flex items-center gap-2">
                                    <span className="text-primary material-symbols-outlined text-sm">flight_takeoff</span>
                                    <p className="text-slate-500 dark:text-[#92a4c9] text-xs font-medium uppercase tracking-tight">One Way • Economy</p>
                                </div>
                                <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight">LHR <span className="text-primary">→</span> JFK</p>
                                <p className="text-slate-500 dark:text-[#92a4c9] text-sm font-normal">AeroLink FL702 • Oct 24, 2024</p>
                            </div>
                            <div className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg" data-alt="Airplane wing flying through clouds at sunset" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4LRpJZvtqqMsfn0OK5kd9ncS_4FhaNS0mYrGKqF_lfbo73HyW8Uaq6DIzbaQgq_LJOUiO26q6kuajDmpp2X9tNhyTKQb9pJCoBY-OWfgC7xzGsogm1stDWKOYefLcLDLbTIS1VwU9VHpgyG1lTXi6EZBHiflz4qrIHXym3-o7wqPUcXInR3RdgAwm6CgiM6GOUwz0WXDmTlaFBwOAVtsUBQXTypCeh-PLHTVBrOKYCdUT-OQIXX5nKx8EAq_r2HniflYzFDwOr4c")' }}>
                            </div>
                        </div>
                    </section>
                    {/* Passenger Details */}
                    <section className="px-4 py-2">
                        <div className="flex justify-between items-end mb-3">
                            <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight">Traveler Details</h3>
                            <button className="text-primary text-xs font-semibold">Edit</button>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-[#192233] border border-slate-100 dark:border-slate-800">
                                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">person</span>
                                </div>
                                <div>
                                    <p className="text-slate-900 dark:text-white text-sm font-bold">John Doe</p>
                                    <p className="text-slate-500 dark:text-[#92a4c9] text-xs">Primary Passenger • Adult</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-[#192233] border border-slate-100 dark:border-slate-800">
                                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">person</span>
                                </div>
                                <div>
                                    <p className="text-slate-900 dark:text-white text-sm font-bold">Jane Doe</p>
                                    <p className="text-slate-500 dark:text-[#92a4c9] text-xs">Passenger 2 • Adult</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Payment Methods */}
                    <section className="px-4 py-4">
                        <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight mb-3">Payment Method</h3>
                        <div className="space-y-3">
                            {/* Apple Pay */}
                            <label className="relative flex items-center justify-between p-4 rounded-xl bg-black text-white cursor-pointer border-2 border-transparent hover:border-primary transition-all">
                                <input defaultChecked className="hidden peer" name="payment" type="radio" />
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined">ios</span>
                                    <span className="text-sm font-bold tracking-wide">Apple Pay</span>
                                </div>
                                <div className="size-5 rounded-full border-2 border-white/20 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center">
                                    <div className="size-2 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                                </div>
                            </label>
                            {/* Credit Card */}
                            <label className="relative flex items-center justify-between p-4 rounded-xl bg-white dark:bg-[#192233] border-2 border-slate-100 dark:border-slate-800 cursor-pointer peer-checked:border-primary transition-all">
                                <input className="hidden peer" name="payment" type="radio" />
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-slate-500 dark:text-[#92a4c9]">credit_card</span>
                                    <div className="flex flex-col">
                                        <span className="text-slate-900 dark:text-white text-sm font-bold">•••• 4242</span>
                                        <span className="text-slate-500 dark:text-[#92a4c9] text-xs">Visa • Exp 05/26</span>
                                    </div>
                                </div>
                                <div className="size-5 rounded-full border-2 border-slate-300 dark:border-[#324467] peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center">
                                    <div className="size-2 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                                </div>
                            </label>
                        </div>
                    </section>
                    {/* Price Breakdown */}
                    <section className="p-4 mx-4 mt-2 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-dashed border-slate-200 dark:border-slate-700">
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500 dark:text-[#92a4c9]">Flight Fare (2x Adult)</span>
                                <span className="text-slate-900 dark:text-white font-medium">$1,080.00</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500 dark:text-[#92a4c9]">Tax and Airport Fees</span>
                                <span className="text-slate-900 dark:text-white font-medium">$160.00</span>
                            </div>
                            <div className="pt-2 mt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-end">
                                <span className="text-slate-900 dark:text-white font-bold">Total Amount</span>
                                <span className="text-2xl text-primary font-display font-bold">$1,240.00</span>
                            </div>
                        </div>
                    </section>
                </main>
                {/* Fixed Bottom CTA */}
                <footer className="fixed bottom-0 w-full max-w-[430px] p-4 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 space-y-4 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
                    <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-[#92a4c9]">
                        <span className="material-symbols-outlined text-sm">lock</span>
                        <p className="text-[10px] font-medium uppercase tracking-widest">Secure 256-bit SSL Encrypted Payment</p>
                    </div>
                    <Link to="/boarding-pass" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                        <span>Confirm & Pay $1,240.00</span>
                    </Link>
                    <p className="text-[10px] text-center text-slate-400 dark:text-slate-500 px-4">
                        By clicking Confirm & Pay, you agree to AeroLink's <button className="underline">Terms of Service</button> and <button className="underline">Privacy Policy</button>.
                    </p>
                    {/* iOS Home Indicator Spacing */}
                    <div className="h-4"></div>
                </footer>
            </div>
        </div>
    );
};

export default Checkout;
