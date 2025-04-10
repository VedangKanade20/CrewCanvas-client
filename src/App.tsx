import Footer from "./components/Footer";
import Header from "./components/Header";

import LoginPage from "./Pages/LoginPage";

export default function App() {
    return (
        <>
            <div className="flex flex-col gap-10 justify-center  ">
                <Header />
                <LoginPage />
                <Footer />
                {/* <LoginForm /> */}
            </div>
        </>
    );
}
