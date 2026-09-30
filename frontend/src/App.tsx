import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { Toaster as Sonner } from "./components/ui/sonner";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";

import { AuthProvider } from "./hooks/useAuth";

import Navbar from "./components/Navbar";
import TopicsBar from "./components/TopicsBar";
import Footer from "./components/Footer";

import Index from "./pages/Index";
import Courses from "./pages/Courses";
import CodingPage from "./pages/CodingPage";

import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import DSAPage from "./pages/topics/DSAPage";
import CPage from "./pages/topics/CPage";
import CppPage from "./pages/topics/CppPage";
import PythonPage from "./pages/topics/PythonPage";
import JavaPage from "./pages/topics/JavaPage";
import HtmlPage from "./pages/topics/HtmlPage";
import JavaScriptPage from "./pages/topics/JavaScriptPage";
import CSSPage from "./pages/topics/CSSPage";
import SQLPage from "./pages/topics/SQLPage";
import NodeJSPage from "./pages/topics/NodeJSPage";
import ReactJSPage from "./pages/topics/ReactJSPage";
import GitPage from "./pages/topics/GitPage";
import PHPPage from "./pages/topics/PHPPage";
import DjangoPage from "./pages/topics/DjangoPage";
import PandasPage from "./pages/topics/PandasPage";
import ExpressJSPage from "./pages/topics/ExpressJSPage";
import MongoDBPage from "./pages/topics/MongoDBPage";
import TypeScriptPage from "./pages/topics/TypeScriptPage";
import LinuxPage from "./pages/topics/LinuxPage";
import NumpyPage from "./pages/topics/NumpyPage";
import SeaBornPage from "./pages/topics/SeaBornPage";
import ScikitLearnPage from "./pages/topics/ScikitLearnPage";
import FlaskPage from "./pages/topics/FlaskPage";


const queryClient = new QueryClient();

function AppLayout() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/auth";

  return (
    <>
      {!hideLayout && <Navbar />}
      {!hideLayout && <TopicsBar />}

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/topics/codingqa" element={<CodingPage />} />
    
        
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        <Route path="/topics/dsa" element={<DSAPage />} />
        <Route path="/topics/c" element={<CPage />} />
        <Route path="/topics/cpp" element={<CppPage />} />
        <Route path="/topics/python" element={<PythonPage />} />
        <Route path="/topics/java" element={<JavaPage />} />
        <Route path="/topics/html" element={<HtmlPage />} />
        <Route path="/topics/javascript" element={<JavaScriptPage />} />
        <Route path="/topics/css" element={<CSSPage />} />
        <Route path="/topics/sql" element={<SQLPage />} />
        <Route path="/topics/nodejs" element={<NodeJSPage />} />
        <Route path="/topics/reactjs" element={<ReactJSPage />} />
        <Route path="/topics/git" element={<GitPage />} />
        
        <Route path="/topics/php" element={<PHPPage />} />
        <Route path="/topics/django" element={<DjangoPage />} />
        <Route path="/topics/pandas" element={<PandasPage />} />
        <Route path="/topics/expressjs" element={<ExpressJSPage />} />
        <Route path="/topics/mongodb" element={<MongoDBPage />} />
        <Route path="/topics/typescript" element={<TypeScriptPage />} />
        <Route path="/topics/linux" element={<LinuxPage />} />
        <Route path="/topics/numpy" element={<NumpyPage />} />
        <Route path="/topics/seaborn" element={<SeaBornPage />} />
        <Route path="/topics/scikitlearn" element={<ScikitLearnPage />} />
        
        <Route path="/topics/flask" element={<FlaskPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <AuthProvider>
            <AppLayout />
          </AuthProvider>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
}