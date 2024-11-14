import "./Sidebar.css";
import Logo from "../../assets/dashboardImage/logo (1).png";
import { SidebarData } from "../data/Data";
import {UilSignOutAlt} from "@iconscout/react-unicons"
const Sidebar = () => {
  return (
    <div className="Sidebar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      {/* menu */}
      <div className="menu">
       {
        SidebarData.map((item, index) =>{
            return(
                <div key={item.heading} className="menuItem">
                    <item.icon/>
                    <span>
                        {item.heading}
                    </span>
                </div>
            )
        })
       }

       <div className="menuItem">
            <UilSignOutAlt/>
       </div>
       
      </div>
    </div>
  );
};

export default Sidebar;
