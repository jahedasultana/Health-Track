
import { FaSubscript } from "react-icons/fa";
import MenuItem from "./ManuItem";
import { FaUser } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const DoctorManu = () => {
    return (
        <div>
                <MenuItem
              label='User Request'
              address='doctor-service'
              icon={FaUser}
              ></MenuItem>

                 <MenuItem
              label='Profile'
              address='doctor-profile'
              icon={CgProfile}
              ></MenuItem>
             
              {/* added if need another things */}
        </div>
    );
};

export default DoctorManu;