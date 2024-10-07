import Banner from "../banner/Banner";
import OurServices from "../ourServices/OurServices";
import HomeContact from "./homeContact/HomeContact";

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <HomeContact></HomeContact>
         <OurServices></OurServices>
        </div>
    );
};

export default Home;