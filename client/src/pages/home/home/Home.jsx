import Banner from "../banner/Banner";
import OurServices from "../ourServices/OurServices";
import HomeContact from "../homeContact/HomeContact";
import TopDoctors from "../topDoctors/TopDoctors";
import Faq from "../faq/Faq";
import WhyChooseUs from "../banner/whyChooseUs/WhyChooseUs";
import Parallax from "../parallax/Parallax";
import ContactUs from "../../contactUs/ContactUs";
import Testimonial from "../testimonial/Testimonial";
import OurDoctors from "../ourDoctors/OurDoctors";
import Specialties from "../specialties/Specialties";
import OurUrgentCareServiceS from "../ourUrgentCareServiceS/OurUrgentCareServiceS";
import AboutUs from "../aboutUs/AboutUs";



const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <HomeContact></HomeContact>
         <TopDoctors></TopDoctors>
         <OurServices></OurServices>
         <OurDoctors></OurDoctors>
        
         <Parallax></Parallax>
         
         <Specialties></Specialties>
         <Faq></Faq>
        <OurUrgentCareServiceS></OurUrgentCareServiceS>
       <WhyChooseUs></WhyChooseUs>
       <AboutUs></AboutUs>
       <Testimonial></Testimonial>
        <ContactUs></ContactUs>
        
        </div>
    );
};

export default Home;