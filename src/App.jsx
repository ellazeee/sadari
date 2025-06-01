
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import {Browser} from "./pages/Browser";
import { DashboardArticle } from "./pages/DashboardArticle";
import { Settings } from "./pages/Settings";
import { InputArticle } from "./pages/InputArticle";
import { EditTanggal } from "./pages/EditTanggal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<DashboardArticle />} />
          <Route path="/home" element={<Browser />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/edittanggal" element={<EditTanggal />} /> 
          <Route path="/inputarticle" element={<InputArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  </QueryClientProvider>
);

export default App;