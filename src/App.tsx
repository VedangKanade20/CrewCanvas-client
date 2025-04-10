import Footer from "./components/Footer";
// // import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
// import SignupForm from "./components/signup-form";
// import { FlipWords } from "./components/ui/flip-words";


// import LoginPage from "./Pages/LoginPage";

export default function App() {
  return (
    <>
      <div className="flex flex-col gap-10 justify-start items-center bg-[#09090B] min-h-screen">
        <HeroSection />
        {/* <SignupForm /> */}
        
        <Footer />
      </div>
    </>
  );
}
