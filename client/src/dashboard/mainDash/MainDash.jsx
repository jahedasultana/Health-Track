
import Cards from "../cards/Cards";
import "./MainDash.css";
const MainDash = () => {
    return (
       <div className="MainDash">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Cards/>
       </div>
    );
};

export default MainDash;