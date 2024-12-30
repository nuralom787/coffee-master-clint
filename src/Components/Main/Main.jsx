import { Outlet } from "react-router";
import Header from "../Header/Header";

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto px-2">
            <Header></Header>
            <Outlet />
        </div>
    );
};

export default Main;