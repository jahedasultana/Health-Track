import Banner from "../banner/Banner";
import OurServices from "../ourServices/OurServices";
import HomeContact from "../homeContact/HomeContact";
import TopDoctors from "../topDoctors/TopDoctors";
import Faq from "../faq/Faq";
import WhyChooseUs from "../banner/whyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <HomeContact></HomeContact>
         <TopDoctors></TopDoctors>
         <OurServices></OurServices>
         {/* <Specialties></Specialties> */}
         <Faq></Faq>
         <WhyChooseUs></WhyChooseUs>
        
        </div>
    );
};

export default Home;