import MainDash from "./mainDash/MainDash";
import RightSide from "./rightSide/RightSide";
import Sidebar from "./sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div className="App">
           <div className="AppGlass">
                <Sidebar></Sidebar>
                <MainDash></MainDash>
                <RightSide></RightSide>
           </div>
        </div>
    );
};

export default Dashboard;