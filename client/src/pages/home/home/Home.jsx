import Banner from "../banner/Banner";
import OurServices from "../ourServices/OurServices";
import HomeContact from "./homeContact/HomeContact";
import Specialities from "./specialities/Specialities";
import TopDoctors from "./topDoctors/TopDoctors";

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <HomeContact></HomeContact>
         <TopDoctors></TopDoctors>
         <OurServices></OurServices>
         <Specialities></Specialities>
        </div>
    );
};

export default Home;