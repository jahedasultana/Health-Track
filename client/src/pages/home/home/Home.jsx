import Banner from "../banner/Banner";
import OurServices from "../ourServices/OurServices";
import HomeContact from "../homeContact/HomeContact";
import TopDoctors from "../topDoctors/TopDoctors";
import Faq from "../faq/Faq";
import WhyChooseUs from "../banner/whyChooseUs/WhyChooseUs";
import Parallax from "../parallax/Parallax";
import ContactUs from "../../contactUs/ContactUs";
import Testimonial from "../testimonial/Testimonial";

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <HomeContact></HomeContact>
         <TopDoctors></TopDoctors>
         <OurServices></OurServices>
        
         {/* <Specialties></Specialties> */}
         <Faq></Faq>
         <Parallax></Parallax>
   
       <WhyChooseUs></WhyChooseUs>
       <Testimonial></Testimonial>
        <ContactUs></ContactUs>
        
        </div>
    );
};

export default Home;