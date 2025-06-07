import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import { Browser } from "./pages/Browser";
import { DashboardArticle } from "./pages/DashboardArticle";
import { DashboardVideo } from "./pages/DashboardVideo";
import { EditVideo } from "./pages/EditVideo";
import { AddVideo } from "./pages/AddVideo";
import { Settings } from "./pages/Settings";
import { EditTanggal } from "./pages/EditTanggal";
import { Home } from "./pages/Home";
import { Sadari } from "./pages/Sadari";
import { HasilSadari } from "./pages/HasilSadari";
import { InputArticle } from "./pages/InputArticle";
import { PrivateRoute } from "./pages/auth/PrivateRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboardarticle" element={<DashboardArticle />} />

        {/* Route Protected => dibungkus menggunakan PrivateRoute.jsx */}
        <Route
          path="/browser"
          element={
           
              <Browser />
          }
        />
        <Route
          path="/dashboardvideo"
          element={
            <PrivateRoute>
              <DashboardVideo />
            </PrivateRoute>
          }
        />
        <Route
          path="/editvideo"
          element={
            <PrivateRoute>
              <EditVideo />
            </PrivateRoute>
          }
        />
        <Route
          path="/addvideo"
          element={
            <PrivateRoute>
              <AddVideo />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
        <Route
          path="/edittanggal"
          element={
            <PrivateRoute>
              <EditTanggal />
            </PrivateRoute>
          }
        />
        <Route
          path="/inputarticle"
          element={
            <PrivateRoute>
              <InputArticle />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/sadari"
          element={
            <PrivateRoute>
              <Sadari />
            </PrivateRoute>
          }
        />
        <Route
          path="/hasilsadari"
          element={
            <PrivateRoute>
              <HasilSadari />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;