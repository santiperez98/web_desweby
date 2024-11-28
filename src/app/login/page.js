import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';

export default function LoginPage() {
  return (
    <>
    <Navbar />
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <LoginForm />
    </div>
    <Footer />
    </>
  );
}
