import Navbar from "../component/Navbar"
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet/>
        </div>
    );
};

export default Main;