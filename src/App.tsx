import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import AdminLayout from "./pages/AdminLayout";
import Profile from "./pages/Profile";
import ManageUsers from "./pages/ManageUsers";
import AccessControl from "./pages/AccessControl";
import SyncMails from "./pages/SyncMails";
import SyncGroups from "./pages/SyncGroups";
import SyncContact from "./pages/SyncContact";
import SyncCalendar from "./pages/SyncCalendar";
import SmtpConfig from "./pages/SmtpConfig";
import Subscriptions from "./pages/Subscriptions";
import PaymentHistory from "./pages/PaymentHistory";
import CustomerSupport from "./pages/CustomerSupport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/profile" replace />} />
            <Route path="profile" element={<Profile />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="access-control" element={<AccessControl />} />
            <Route path="sync-mails" element={<SyncMails />} />
            <Route path="sync-group" element={<SyncGroups />} />
            <Route path="sync-contact" element={<SyncContact />} />
            <Route path="sync-calendar" element={<SyncCalendar />} />
            <Route path="smtp-config" element={<SmtpConfig />} />
            <Route path="subscriptions" element={<Subscriptions />} />
            <Route path="payments" element={<PaymentHistory />} />
            <Route path="support" element={<CustomerSupport />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
