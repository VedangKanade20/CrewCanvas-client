import Footer from "./components/Footer";
import Header from "./components/Header";
import SignupForm from "./components/signup-form";

import LoginPage from "./Pages/LoginPage";

export default function App() {
    return (
      <>
        <div className="flex flex-col gap-10 justify-center bg-[#09090B] ">
          <Header />
          <LoginPage />
          < SignupForm />
          <Footer />
          {/* <LoginForm /> */}
        </div>
      </>
    );
}
