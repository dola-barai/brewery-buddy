import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;