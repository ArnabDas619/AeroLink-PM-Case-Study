import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import FindFlight from './pages/FindFlight';
import FlightResults from './pages/FlightResults';
import FlightDetails from './pages/FlightDetails';
import Checkout from './pages/Checkout';
import BoardingPass from './pages/BoardingPass';
import ProfileLoyalty from './pages/ProfileLoyalty';
import SmartAlerts from './pages/SmartAlerts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<FindFlight />} />
      <Route path="/results" element={<FlightResults />} />
      <Route path="/details" element={<FlightDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/boarding-pass" element={<BoardingPass />} />
      <Route path="/profile" element={<ProfileLoyalty />} />
      <Route path="/alerts" element={<SmartAlerts />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
