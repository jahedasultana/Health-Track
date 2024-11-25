import Banner from "../banner/Banner";
import OurServices from "../ourServices/OurServices";
import HomeContact from "../homeContact/HomeContact";
import TopDoctors from "../topDoctors/TopDoctors";
import WhyChooseUs from "../banner/whyChooseUs/WhyChooseUs";
import Parallax from "../parallax/Parallax";
import ContactUs from "../../contactUs/ContactUs";
import Testimonial from "../testimonial/Testimonial";
import OurDoctors from "../ourDoctors/OurDoctors";
import Specialties from "../specialties/Specialties";
import OurUrgentCareServiceS from "../ourUrgentCareServiceS/OurUrgentCareServiceS";
import AboutUs from "../aboutUs/AboutUs";
import Faq from "../faq/Faq";



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
         <WhyChooseUs></WhyChooseUs>
         <Faq></Faq>
       
        <OurUrgentCareServiceS></OurUrgentCareServiceS>
     
       <AboutUs></AboutUs>
       <Testimonial></Testimonial>
        <ContactUs></ContactUs>
        
        </div>
    );
};

export default Home;