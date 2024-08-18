import Navbar from "../component/Navbar"
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <div  className='container mx-auto'>
                <Outlet />
            </div>
        </>
    );
};

export default Main;