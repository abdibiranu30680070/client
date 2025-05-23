import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/Login";
import SignupPage from './pages/Signup';
import HomePage from './pages/Home';
import PageNotFound from './components/PageNotFound';
import AdminDashboard from "./pages/AdminDashboard";
import AdminViewAllPatients from "./components/AdminViewAllPatients";
import UserManagement from './components/UserManagement';
import PatientDetails from './components/PatientDetails';
import SystemAnalytics from './components/SystemAnalytics';
import Reports from "./components/Reports";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root '/' to '/home' */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        
        {/* Home page */}
        <Route path="/home" element={<HomePage />} />
        
        {/* Admin Dashboard Routes */}
        <Route path="/AdminDashboards" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/getAllPatientsForAdmin" element={<AdminViewAllPatients />} />
        <Route path="/admin/analytics" element={<SystemAnalytics />} />
        <Route path="/admin/reports" element={<Reports />} />
        
        {/* Authentication Routes */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
        {/* Patient Routes */}
        <Route path="/patient/:patientId" element={<PatientDetails />} />
        
        {/* Catch-all for 404 Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
