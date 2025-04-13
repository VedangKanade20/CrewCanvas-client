import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/landing/Footer";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import SignupForm from "./components/Auth/SignupFormCard";
import ResetPasswordFormCard from "./components/Auth/ResetPasswordFormCard";
import ForgotPasswordFormCard from "./components/Auth/ForgotPasswordFormCard";

export default function App() {
    return (
        <Router>
            <div className="flex flex-col gap-10 justify-start items-center w-screen px-[12.5%] bg-gradient-to-br from-[#0f0f13] to-black min-h-screen">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupForm />} />
                    <Route
                        path="/reset-password"
                        element={<ResetPasswordFormCard />}
                    />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPasswordFormCard />}
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}
