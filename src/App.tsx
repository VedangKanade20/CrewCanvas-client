
import Footer from "./components/landing/Footer";
import ForgotPasswordFormCard from "./components/Auth/ForgotPasswordFormCard";
import ResetPasswordFormCard from "./components/Auth/ResetPasswordFormCard";

// // import Header from "./components/Header";
// import HeroSectionOne from "./components/HeroSection";
import LandingPage from "./Pages/LandingPage";
import SignupForm from "./components/Auth/SignupFormCard";
// import { FlipWords } from "./components/ui/flip-words";


// import LoginPage from "./Pages/LoginPage";

export default function App() {
  return (
    <>
      <div className="flex flex-col gap-10 justify-start items-center bg-gradient-to-br   from-[#0f0f13] to-black min-h-screen overflow-hidden">
        <LandingPage />
        <SignupForm />
        <ResetPasswordFormCard/>
        < ForgotPasswordFormCard/>
        
        <Footer />
        
      </div>
    </>
  );
}
