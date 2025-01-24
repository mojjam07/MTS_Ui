import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MessageBanner from "./components/messageBanner";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import FooterSection from "./components/footer";
import ScheduleSection from "./components/scheduleSection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/serviceSection";
import PortfolioSection from "./components/portfolioSection";
import ContactSection from "./components/contactSection";
import ReviewSection from "./components/reviewSection";

function App() {
  return (
    <div className="app-container">
      <MessageBanner />
      <Navbar />
      <div className="main-content">
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <PortfolioSection />
        <ScheduleSection />
        <ReviewSection />
        <ContactSection />
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
