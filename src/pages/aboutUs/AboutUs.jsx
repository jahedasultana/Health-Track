import { Link } from "react-router-dom";
import WhoWeAre from "./WhoWeAre";
import MeetOurHealthCareTeam from "./MeetOurHealthCareTeam";
import OurHospitalUpdates from "./OurHospitalUpdates";
import PageBanner from "../../components/PageBanner";

const AboutUs = () => {
  return (
    <div>
      {/* Parallax Section */}
      <PageBanner title={'About Us'} pageAddress={'/aboutUs'} pageDirection={'About Us'}/>

    <div>
      <WhoWeAre/>
    </div>

    <div>
     <MeetOurHealthCareTeam/>
    </div>
    <div>
     <OurHospitalUpdates/>
    </div>
    </div>
  );
};

export default AboutUs;
