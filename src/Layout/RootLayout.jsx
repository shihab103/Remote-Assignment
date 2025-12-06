import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import EssentialTools from "../Pages/EssentialTools/EssentialTools";
import Promerty from "../Pages/Property/Property";
import Testimonial from "../Pages/Testimonial/Testimonial";
import LandingPage from "../Pages/LandingPage/LandingPage";
import RevenueSection from "../Pages/RevenueSection/RevenueSection";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Promerty/>
      <LandingPage/>
      <RevenueSection/>
      <Testimonial />
      <EssentialTools />
      <Footer />
    </>
  );
}
