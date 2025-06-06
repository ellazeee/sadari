
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import {Browser} from "./pages/Browser";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboardarticle" element={<DashboardArticle />} />
          <Route path="/browser" element={<Browser />} />
          <Route path="/dashboardvideo" element={<DashboardVideo />} />
          <Route path="/editvideo" element={<EditVideo />} />
          <Route path="/addvideo" element={<AddVideo />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/edittanggal" element={<EditTanggal />} /> 
          <Route path="/inputarticle" element={<InputArticle />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sadari" element={<Sadari />} />
          <Route path="/hasilsadari" element={<HasilSadari />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  </QueryClientProvider>
);

export default App;