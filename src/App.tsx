import LoginForm from "./components/loginForm";
import SignupForm from "./components/signup-form";

export default function App() {
  return (
    <>
      <div className="flex flex-wrap gap-10 ">
        {" "}
        <SignupForm />
       
        < LoginForm />
        
      </div>
    </>
  );
}
