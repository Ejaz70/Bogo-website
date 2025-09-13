// =============================
// File: src/App.jsx
// =============================
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

// ===== Administration Screens =====
import RoleManagement from "./components/Administration/RoleManagement";
import Customers from "./components/Administration/Customers";
import Merchants from "./components/Administration/Merchants";
import Product from "./components/Administration/Product";
import Promotion from "./components/Administration/Promotion";
import Payment from "./components/Administration/Payment";
import Orders from "./components/Administration/Orders";
import Reservation from "./components/Administration/Reservation";
import Subscriptions from "./components/Administration/Subscriptions";
import LiveChat from "./components/Administration/LiveChat";
import Contact from "./components/Administration/Contact";
import Review from "./components/Administration/Review";
import Notification from "./components/Administration/Notification";
import Report from "./components/Administration/Report";
import AdsManagement from "./components/Administration/AdsManagement";
import TicketManagement from "./components/Administration/TicketManagement";
import Affiliate from "./components/Administration/Affiliate";
import XPpointManagement from "./components/Administration/XPpointManagement";
import AppManagement from "./components/Administration/AppManagement";
import OffersManagement from "./components/Administration/OffersManagement";
import Newmerchants from "./components/Administration/Newmerchants";
import KeywordAdDetails from "./components/Administration/KeywordAdDetails";

// ===== Dashboard Shell & Home =====
import DashboardHome from "./components/Administration/DashboardHome";
import Dashboard from "./components/Administration/Dashboard";

// ===== Auth Screens =====
import SignIn from "./components/SignIn";
import ForgotPassword from "./components/Forget.jsx";
import Register from "./components/Register";

function ProtectedRoute({ children }) {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  return user ? children : <Navigate to="/" />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* ===== Auth Routes ===== */}
        <Route path="/" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />

        {/* ===== Protected Dashboard Routes ===== */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/* Default home inside dashboard */}
          <Route index element={<DashboardHome />} />

          {/* Top-level admin modules */}
          <Route path="role-management" element={<RoleManagement />} />
          <Route path="customers" element={<Customers />} />
          <Route path="merchants" element={<Merchants />} />
          <Route path="product" element={<Product />} />
          <Route path="newmerchants" element={<Newmerchants />} />
          <Route path="promotion" element={<Promotion />} />
          <Route path="payment" element={<Payment />} />
          <Route path="orders" element={<Orders />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="live-chat" element={<LiveChat />} />
          <Route path="contact" element={<Contact />} />
          <Route path="review" element={<Review />} />
          <Route path="notification" element={<Notification />} />
          <Route path="report" element={<Report />} />

          {/* Ads Management + nested detail route */}
          <Route path="ads-management" element={<AdsManagement />} />
          <Route path="ads-management/keywords/:id" element={<KeywordAdDetails />} />

          {/* Ticket Management + Auto Ticket Delivery detail */}
          <Route path="ticket-management" element={<TicketManagement />} />

          <Route path="affiliate" element={<Affiliate />} />
          <Route path="xp-management" element={<XPpointManagement />} />
          <Route path="app-management" element={<AppManagement />} />
          <Route path="offers-management" element={<OffersManagement />} />
        </Route>
      </Routes>
    </Router>
  );
}