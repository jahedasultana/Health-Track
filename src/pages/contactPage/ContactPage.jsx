import { Link } from "react-router-dom";
import GetInTouchWithUs from "./GetInTouchWithUs";
import GoogleMap from "./GoogleMap";
import AdditionalSupportResource from "./AdditionalSupportResource";
import PageBanner from "../../components/PageBanner";

const ContactPage = () => {
    return (
        <div>
            {/* Parallax Section */}
            <PageBanner title={'Conatct Us'} pageAddress={'/contactUs'} pageDirection={'Contact Us'}/>

      <div>
        <GetInTouchWithUs/>
      </div>
      <div>
        <AdditionalSupportResource/>
        
      </div>
      <div>
        <GoogleMap/>
      </div>
        </div>
    );
};

export default ContactPage;