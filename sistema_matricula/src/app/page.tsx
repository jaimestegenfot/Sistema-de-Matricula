
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      
      <Navigation />
      <HeroSection />
      <RegistrationForm />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
