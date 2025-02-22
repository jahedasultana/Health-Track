

import { MdHomeWork } from "react-icons/md";
import MenuItem from "./ManuItem";
import { FaUser } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

const AdminMenu = () => {
    return (
        <div>
                <MenuItem
              label='All Users'
              address='all-users'
              icon={FaUser}
              ></MenuItem>
             
              {/* All Trainers*/}
              <MenuItem
              label='All Doctors'
              address='all-doctors'
              icon={FaUserDoctor}
              ></MenuItem>
              {/* add doctor */}
              
        </div>
    );
};

export default AdminMenu;