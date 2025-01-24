
import { FaSubscript } from "react-icons/fa";
import MenuItem from "./ManuItem";

const DoctorManu = () => {
    return (
        <div>
                <MenuItem
              label='User Request'
              address='doctor-service'
              icon={FaSubscript}
              ></MenuItem>

                 <MenuItem
              label='Profile'
              address='doctor-profile'
              icon={FaSubscript}
              ></MenuItem>
             
              {/* added if need another things */}
        </div>
    );
};

export default DoctorManu;