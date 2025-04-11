import Footer from "./components/Footer";
// // import Header from "./components/Header";
// import HeroSectionOne from "./components/HeroSection";
import LandingPage from "./Pages/LandingPage";
// import SignupForm from "./components/signup-form";
// import { FlipWords } from "./components/ui/flip-words";


// import LoginPage from "./Pages/LoginPage";

export default function App() {
  return (
    <>
      <div className="flex flex-col gap-10 justify-start items-center bg-gradient-to-br   from-[#0f0f13] to-black min-h-screen">
        <LandingPage />
        {/* <SignupForm /> */}

        <Footer />
        
      </div>
    </>
  );
}
