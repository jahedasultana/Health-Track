
import { FaSubscript } from "react-icons/fa";
import MenuItem from "./ManuItem";

const UserManu = () => {
    return (
        <div>
                <MenuItem
              label='My Request'
              address='user-profile'
              icon={FaSubscript}
              ></MenuItem>
             
              {/* added if need another things */}
        </div>
    );
};

export default UserManu;