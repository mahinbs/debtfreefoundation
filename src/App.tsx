import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import AppLayout from "./components/app/AppLayout";
import AdminLayout from "./components/app/AdminLayout";
import AuthLayout from "./components/app/AuthLayout";
import Dashboard from "./components/app/Dashboard";
import LedgerPage from "./components/app/LedgerPage";
import ProductionPage from "./components/app/ProductionPage";
import DffMartPage from "./components/app/DffMartPage";
import RecoveryPage from "./components/app/RecoveryPage";
import AiInsightsPage from "./components/app/AiInsightsPage";
import AdminPage from "./components/app/AdminPage";

import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Website */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Protected App Routes */}
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate to="/app/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="ledger" element={<LedgerPage />} />
          <Route path="production" element={<ProductionPage />} />
          <Route path="mart" element={<DffMartPage />} />
          <Route path="recovery" element={<RecoveryPage />} />
          <Route path="ai-insights" element={<AiInsightsPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
