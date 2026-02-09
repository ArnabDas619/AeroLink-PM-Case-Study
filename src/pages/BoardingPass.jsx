import React from 'react';
import { Link } from 'react-router-dom';

const BoardingPass = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center justify-start overflow-x-hidden">
            {/* Header Navigation */}
            <div className="w-full max-w-md flex items-center justify-between p-6">
                <Link to="/home" className="text-white bg-primary/20 p-2 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">close</span>
                </Link>
                <div className="text-center">
                    <h1 className="text-white text-sm font-semibold tracking-wider uppercase opacity-60">Boarding Pass</h1>
                    <p className="text-white text-lg font-bold">Flight AL402</p>
                </div>
                <button className="text-white bg-primary/20 p-2 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">share</span>
                </button>
            </div>
            {/* Main Boarding Pass Card */}
            <div className="w-full max-w-md px-6 pb-8">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col">
                    {/* Pass Top Section: Logo and Status */}
                    <div className="p-6 flex justify-between items-center bg-white">
                        <div className="flex items-center gap-2">
                            <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-xl">flight_takeoff</span>
                            </div>
                            <span className="text-[#101622] font-bold text-lg tracking-tight">AeroLink</span>
                        </div>
                        <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                            On Time
                        </div>
                    </div>
                    {/* Route Section */}
                    <div className="px-6 py-4 flex justify-between items-center bg-white">
                        <div className="flex flex-col">
                            <h2 className="text-4xl font-extrabold text-[#101622]">JFK</h2>
                            <p className="text-gray-500 text-sm font-medium">New York</p>
                        </div>
                        <div className="flex flex-col items-center flex-1">
                            <span className="material-symbols-outlined text-primary text-3xl">arrow_forward</span>
                            <p className="text-gray-400 text-[10px] mt-1 font-bold">NON-STOP</p>
                        </div>
                        <div className="flex flex-col items-end">
                            <h2 className="text-4xl font-extrabold text-[#101622]">LHR</h2>
                            <p className="text-gray-500 text-sm font-medium">London</p>
                        </div>
                    </div>
                    {/* Visual Divider (Perforation effect) */}
                    <div className="relative h-6 bg-white flex items-center">
                        <div className="absolute -left-3 size-6 rounded-full bg-background-dark"></div>
                        <div className="w-full h-[1px] dashed-line mx-4"></div>
                        <div className="absolute -right-3 size-6 rounded-full bg-background-dark"></div>
                    </div>
                    {/* Info Grid */}
                    <div className="px-6 py-6 grid grid-cols-2 gap-y-6 bg-white">
                        <div>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Gate</p>
                            <p className="text-[#101622] text-xl font-bold">B22</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Boarding</p>
                            <p className="text-primary text-xl font-bold">14:20</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Seat</p>
                            <p className="text-[#101622] text-xl font-bold">12A</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Zone</p>
                            <p className="text-[#101622] text-xl font-bold">Group 2</p>
                        </div>
                    </div>
                    {/* QR Code Section */}
                    <div className="bg-gray-50 p-8 flex flex-col items-center justify-center border-t border-gray-100">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                            <img alt="QR Code" className="size-48" data-alt="High contrast QR code for flight boarding" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaGEaJxHZyrZikzYIDh67i13gLRpimB9oDyNkqnck6D4q3Uqpy8IymQlIzhV4QBdDymP35ljnVZMnq-M9JOO1Jv3YRYUCHSPF782-9JwLQlSXeiZzlBNJV1pS-c31ZNv0kC3GfDrp8eyzm6NnUKITbKYnZ3yOHbu3IsmwRZB_PSctqi_knN1wy98Lb1bQnkVrpNwaDQiw4RO_NZmIOMbxiPCzftoRHIYFytk3PHajNV8b_Jg1cK_9x_GOycbfF3_UobHiq6E8Mi9I" />
                        </div>
                        <p className="mt-4 text-gray-400 text-[11px] font-medium tracking-widest uppercase">Scan at gate or kiosk</p>
                    </div>
                    {/* Passenger Footer */}
                    <div className="px-6 py-4 bg-white border-t border-gray-100 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <img alt="User" className="size-10 rounded-full object-cover border border-gray-100" data-alt="Portrait of Johnathan Doe passenger" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-15DxKNmDG8Z97MUZuWgc2qxgHjAdqED_7XTRfmz7z0IHjLeCO-CUyFpE33xPEjSyLYu39Vg_2uHZJzgbop5thFFC-GKQgbYfXpqli-2BlbtEzk942EFDQ9uuxSZPGPjzYTgb0dMtwq_oRtmAjgwgMvD-RSooMQkvGDcm3w6PA3-qJS8Y0uYYMijyaBG5MXAXFdsLlJJ6MP9Pd_LYfZcQLGNLNxOfmmLDAVAuXFtYbbdyp2J2t2FdtwOWgJlxOYxrc4Q4xcYqdh4" />
                            <div>
                                <p className="text-[#101622] text-sm font-bold">Johnathan Doe</p>
                                <p className="text-gray-400 text-[10px] font-medium uppercase tracking-tight">Confirmation: XLK982</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-500 text-[10px] font-bold uppercase mb-1">Class</p>
                            <p className="text-[#101622] text-xs font-bold">Economy</p>
                        </div>
                    </div>
                </div>
                {/* Action Buttons */}
                <div className="mt-8 flex flex-col gap-4">
                    <button className="w-full bg-black text-white rounded-xl h-14 flex items-center justify-center gap-3 font-semibold text-lg transition-transform active:scale-95">
                        <img alt="Apple Wallet" className="invert" data-alt="Apple Wallet icon logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnAj24D_FNS4ly32sCYAcaW2HBIj6gCJl_96L3vNOasWP5E9HG9BzT7scq9FY3HlA7WMd6zSswN16n08-ugc4IAiDeluUz-MO5x4oTTZZoyFGR5qgszhodXzyN4Isrm3W6ypX8worE2qu6cbUMQAdovbZ0XKSYUsXiaGL-63ilXaqVccPWb6PZsV6nabl8Y-l6jZwwJfcEXyz_ufuSqzqJUCPI0DEl5Vv1iOEL6Cj3S4obeCtJkxwUGtFiv3UUOTTgnFzs-Po0Do4" />
                        Add to Apple Wallet
                    </button>
                    <div className="flex gap-4">
                        <button className="flex-1 bg-white/10 text-white border border-white/20 rounded-xl h-12 flex items-center justify-center gap-2 font-medium text-sm">
                            <span className="material-symbols-outlined text-lg">calendar_today</span>
                            Add to Calendar
                        </button>
                        <button className="flex-1 bg-white/10 text-white border border-white/20 rounded-xl h-12 flex items-center justify-center gap-2 font-medium text-sm">
                            <span className="material-symbols-outlined text-lg">map</span>
                            Airport Map
                        </button>
                    </div>
                </div>
                {/* Helper Text */}
                <div className="mt-12 text-center px-4">
                    <div className="flex items-center justify-center gap-2 text-white/40 mb-2">
                        <span className="material-symbols-outlined text-sm">light_mode</span>
                        <p className="text-xs font-medium">Brightness is automatically optimized for scanning</p>
                    </div>
                    <p className="text-[10px] text-white/20 font-medium">Baggage drop closes 60 mins before departure. Please be at the gate 30 mins before boarding.</p>
                </div>
            </div>
            {/* Bottom Navigation Bar (App Shell) */}
            <div className="fixed bottom-0 w-full max-w-md bg-background-dark/80 backdrop-blur-lg border-t border-white/5 px-6 py-4 flex justify-between items-center">
                <Link to="/home" className="flex flex-col items-center gap-1 text-white/40">
                    <span className="material-symbols-outlined">home</span>
                    <span className="text-[10px] font-bold">Home</span>
                </Link>
                <Link to="/results" className="flex flex-col items-center gap-1 text-primary">
                    <span className="material-symbols-outlined">confirmation_number</span>
                    <span className="text-[10px] font-bold">Trips</span>
                </Link>
                <Link to="/search" className="flex flex-col items-center gap-1 text-white/40">
                    <span className="material-symbols-outlined">explore</span>
                    <span className="text-[10px] font-bold">Explore</span>
                </Link>
                <Link to="/profile" className="flex flex-col items-center gap-1 text-white/40">
                    <span className="material-symbols-outlined">person</span>
                    <span className="text-[10px] font-bold">Profile</span>
                </Link>
            </div>
        </div>
    );
};

export default BoardingPass;
