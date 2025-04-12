import Footer from "./components/landing/Footer";
import ForgotPasswordFormCard from "./components/Auth/ForgotPasswordFormCard";
import ResetPasswordFormCard from "./components/Auth/ResetPasswordFormCard";
import SignupForm from "./components/Auth/SignupFormCard";

import LandingPage from "./Pages/LandingPage";

import LoginPage from "./Pages/LoginPage";

export default function App() {
    return (
        <>
            <div className="flex flex-col gap-10 justify-start items-center w-screen px-[12.5%] bg-gradient-to-br from-[#0f0f13] to-black min-h-screen ">
                <LandingPage />
                <SignupForm />
                <ResetPasswordFormCard />
                <ForgotPasswordFormCard />
                <LoginPage />
                <Footer />
            </div>
        </>
    );
}
