
import { FaSubscript } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import MenuItem from "./ManuItem";

const AdminMenu = () => {
    return (
        <div>
                <MenuItem
              label='All Users'
              address='all-users'
              icon={FaSubscript}
              ></MenuItem>
             
              {/* All Trainers*/}
              <MenuItem
              label='All Doctors'
              address='all-doctors'
              icon={MdHomeWork}
              ></MenuItem>
              {/* add doctor */}
              
        </div>
    );
};

export default AdminMenu;