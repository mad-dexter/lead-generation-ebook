import Faq from "../components/Faq";
import FollowUp from "../components/FollowUp";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Process from "../components/Process";
import Stats from "../components/Stats";
import Testimonial from "../components/Testimonial";
import UserDataEntry from "../components/UserDataEntry";

function LeadgenerationLanding() {
  return (
    <div className="w-full font-body">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Process />
        <Testimonial />
        <UserDataEntry />
        <Faq />
        <FollowUp />
      </main>
      <Footer />
    </div>
  );
}

export default LeadgenerationLanding;
