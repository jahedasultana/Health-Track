import "./Sidebar.css";
import Logo from "../../assets/dashboardImage/logo (1).png";

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
        </div>
    );
};

export default Sidebar;