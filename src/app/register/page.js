import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegisterForm";


export default function RegisterPage() {
  return (
    <>
    <Navbar />
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <RegisterForm />
    </div>
    <Footer />
    </>
  );
}
