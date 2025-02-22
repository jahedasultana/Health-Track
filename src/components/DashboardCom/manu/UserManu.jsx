
import { FaSubscript } from "react-icons/fa";
import MenuItem from "./ManuItem";
import { FaUser } from "react-icons/fa";

const UserManu = () => {
    return (
        <div>
                <MenuItem
              label='My Request'
              address='user-profile'
              icon={FaUser}
              ></MenuItem>
             
              {/* added if need another things */}
        </div>
    );
};

export default UserManu;