import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FlightStatus = () => {
  const navigate = useNavigate();
  const [flightNumber, setFlightNumber] = useState('');
  const [flightData, setFlightData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!flightNumber.trim()) return;

    setLoading(true);
    setError(null);
    setFlightData(null);

    try {
      const apiKey = import.meta.env.VITE_AVIATIONSTACK_API_KEY;
      // Note: Aviationstack free tier only supports HTTP over basic API calls unless configured otherwise, 
      // but Vite dev server usually proxies or handles it. We'll use http for the free tier requirement if needed, 
      // but let's try https first or use a proxy if CORS issues arise. 
      // Aviationstack free tier restricts to HTTP only.
      const response = await fetch(`http://api.aviationstack.com/v1/flights?access_key=${apiKey}&flight_iata=${flightNumber.trim()}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.data && data.data.length > 0) {
        // Find the most relevant flight (usually the first one, or the one currently active/scheduled)
        const currentFlight = data.data.find(f => f.flight_status === 'active' || f.flight_status === 'scheduled') || data.data[0];
        setFlightData(currentFlight);
      } else {
        setError('No flight found for this flight number. Please check and try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch flight status. Please check your internet connection or try again later.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-blue-500 text-white';
      case 'landed':
        return 'bg-green-500 text-white';
      case 'scheduled':
        return 'bg-primary text-white';
      case 'cancelled':
        return 'bg-red-500 text-white';
      case 'delayed':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-slate-500 text-white';
    }
  };

  const formatTime = (dateString) => {
    if (!dateString) return '--:--';
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen pb-24">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-6 pb-4">
        <div className="flex items-center max-w-md mx-auto relative">
          <button onClick={() => navigate(-1)} className="absolute left-0 size-10 flex items-center justify-center text-slate-600 dark:text-slate-300">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <h1 className="text-lg font-bold w-full text-center">Flight Status</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 mt-6 space-y-6">
        {/* Search Section */}
        <section>
          <form onSubmit={handleSearch} className="flex flex-col gap-4">
            <div className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
              <label htmlFor="flightNumber" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                Enter Flight Number
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  flight
                </span>
                <input
                  type="text"
                  id="flightNumber"
                  value={flightNumber}
                  onChange={(e) => setFlightNumber(e.target.value.toUpperCase())}
                  placeholder="e.g. AA100"
                  className="w-full bg-white dark:bg-[#192233] border border-slate-200 dark:border-slate-700 rounded-lg pl-10 pr-4 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all uppercase placeholder:normal-case"
                  required
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={loading || !flightNumber.trim()}
              className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary/20"
            >
              {loading ? (
                <span className="material-symbols-outlined animate-spin">refresh</span>
              ) : (
                <span className="material-symbols-outlined">search</span>
              )}
              {loading ? 'Searching...' : 'Check Status'}
            </button>
          </form>
        </section>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 p-4 rounded-xl text-sm text-center">
            {error}
          </div>
        )}

        {/* Results Section */}
        {flightData && !loading && !error && (
          <section className="animate-fade-in-up">
            <div className="bg-white dark:bg-[#192233] border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
              {/* Header */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700">
                    <span className="material-symbols-outlined text-primary">airlines</span>
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">{flightData.airline.name}</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Flight {flightData.flight.iata}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusColor(flightData.flight_status)}`}>
                  {flightData.flight_status}
                </span>
              </div>

              {/* Timeline */}
              <div className="p-6">
                <div className="flex justify-between items-end relative">
                  {/* Departure */}
                  <div className="w-1/3 flex flex-col">
                    <span className="text-3xl font-display font-bold text-slate-900 dark:text-white">{flightData.departure.iata}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1 truncate" title={flightData.departure.airport}>
                      {flightData.departure.airport || 'Unknown'}
                    </span>
                    <div className="mt-4">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Scheduled</p>
                      <p className="font-medium text-lg">{formatTime(flightData.departure.scheduled)}</p>
                      <p className="text-xs text-slate-500 mt-0.5">Terminal {flightData.departure.terminal || '-'} • Gate {flightData.departure.gate || '-'}</p>
                    </div>
                  </div>

                  {/* Flight Path Indicator */}
                  <div className="w-1/3 px-2 flex flex-col items-center justify-center pb-12 relative z-10">
                    <p className="text-xs text-slate-500 mb-2 font-medium">{flightData.departure.timezone ? flightData.departure.timezone.split('/')[1]?.replace('_', ' ') : ''}</p>
                    <div className="w-full flex items-center relative">
                      <div className="size-2 rounded-full border-2 border-primary bg-white dark:bg-[#192233] z-10"></div>
                      <div className="h-[2px] w-full border-t-2 border-dashed border-slate-300 dark:border-slate-700 mx-1"></div>
                      <span className="material-symbols-outlined absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary bg-white dark:bg-[#192233] px-1 z-10">
                        flight
                      </span>
                      <div className="size-2 rounded-full border-2 border-primary bg-primary z-10"></div>
                    </div>
                  </div>

                  {/* Arrival */}
                  <div className="w-1/3 flex flex-col items-end text-right">
                    <span className="text-3xl font-display font-bold text-slate-900 dark:text-white">{flightData.arrival.iata}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1 truncate" title={flightData.arrival.airport}>
                      {flightData.arrival.airport || 'Unknown'}
                    </span>
                    <div className="mt-4">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Estimated</p>
                      <p className="font-medium text-lg text-primary">{formatTime(flightData.arrival.estimated || flightData.arrival.scheduled)}</p>
                      <p className="text-xs text-slate-500 mt-0.5">Terminal {flightData.arrival.terminal || '-'} • Gate {flightData.arrival.gate || '-'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default FlightStatus;
