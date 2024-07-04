import Appointment from "../Pages/Appointment";
import Banner from "../Pages/Banner";
import Care from "../Pages/Care";
import Faq from "../Pages/Faq";
import Health from "../Pages/Health";
import Mission from "../Pages/Mission";
import Testimonials from "../Pages/Testimonials";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

 
const Home = () => {
    return (
        <div className="">
            <Navbar/>
            <Banner/>
            <Care/>
            <Mission/>
            <Health/>
            <Testimonials/>
            <Faq/>
            <Appointment/>
            <Footer/>
        </div>
    );
};

export default Home;