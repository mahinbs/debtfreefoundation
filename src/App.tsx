import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import AppLayout from "./components/app/AppLayout";
import AdminLayout from "./components/app/AdminLayout";
import AuthLayout from "./components/app/AuthLayout";
import Dashboard from "./pages/Dashboard";
import LedgerPage from "./pages/LedgerPage";
// import ProductionPage from "./pages/ProductionPage";
// import DffMartPage from "./pages/DffMartPage";
import RecoveryPage from "./pages/RecoveryPage";
import AiInsightsPage from "./pages/AiInsightsPage";
import AdminPage from "./pages/AdminPage";
import SecurityPage from "./pages/SecurityPage";

import RegisterPage from "./pages/RegisterPage";

import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
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
            {/* <Route path="production" element={<ProductionPage />} />
            <Route path="mart" element={<DffMartPage />} /> */}
            <Route path="recovery" element={<RecoveryPage />} />
            <Route path="ai-insights" element={<AiInsightsPage />} />
            <Route path="settings" element={<SecurityPage />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminPage />} />
            <Route path="settings" element={<SecurityPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
