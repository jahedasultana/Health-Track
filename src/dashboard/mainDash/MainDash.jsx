
import Cards from "../cards/Cards";
import BasicTable from "../table/BasicTable";

import "./MainDash.css";
const MainDash = () => {
    return (
       <div className="MainDash">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Cards/>
        <h2>Recent Orders</h2>
        <BasicTable></BasicTable>
       </div>
    );
};

export default MainDash;