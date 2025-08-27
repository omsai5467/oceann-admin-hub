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
            {/* Placeholder routes for other menu items */}
            <Route path="sync-mails" element={<div className="p-6"><h1 className="text-2xl font-bold">Sync Mails</h1><p className="text-muted-foreground">Coming soon...</p></div>} />
            <Route path="sync-group" element={<div className="p-6"><h1 className="text-2xl font-bold">Sync Group</h1><p className="text-muted-foreground">Coming soon...</p></div>} />
            <Route path="sync-contact" element={<div className="p-6"><h1 className="text-2xl font-bold">Sync Contact</h1><p className="text-muted-foreground">Coming soon...</p></div>} />
            <Route path="sync-calendar" element={<div className="p-6"><h1 className="text-2xl font-bold">Sync Calendar</h1><p className="text-muted-foreground">Coming soon...</p></div>} />
            <Route path="smtp-config" element={<div className="p-6"><h1 className="text-2xl font-bold">SMTP Config</h1><p className="text-muted-foreground">Coming soon...</p></div>} />
            <Route path="subscriptions" element={<div className="p-6"><h1 className="text-2xl font-bold">User Subscriptions</h1><p className="text-muted-foreground">Coming soon...</p></div>} />
            <Route path="payments" element={<div className="p-6"><h1 className="text-2xl font-bold">Payment History</h1><p className="text-muted-foreground">Coming soon...</p></div>} />
            <Route path="support" element={<div className="p-6"><h1 className="text-2xl font-bold">Customer Support</h1><p className="text-muted-foreground">Coming soon...</p></div>} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
