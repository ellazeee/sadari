
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboardarticle" element={<DashboardArticle />} />
          <Route path="/home" element={<Browser />} />
          <Route path="/dashboardvideo" element={<DashboardVideo />} />
          <Route path="/editvideo" element={<EditVideo />} />
          <Route path="/addvideo" element={<AddVideo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  </QueryClientProvider>
);

export default App;