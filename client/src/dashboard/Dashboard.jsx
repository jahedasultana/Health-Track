import MainDash from "./mainDash/MainDash";
import Sidebar from "./sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div className="App">
           <div className="AppGlass">
                <Sidebar></Sidebar>
                <MainDash></MainDash>
           </div>
        </div>
    );
};

export default Dashboard;