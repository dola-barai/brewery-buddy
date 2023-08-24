import { Link } from 'react-router-dom';
import logo from './../../public/logo-nav.png'
import { useAuth } from './AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();
    return (
        <div className=''>
            <div className="navbar bg-black fixed bg-opacity-40">
                <div className="flex-1">
                    <img className='h-12 ps-8 me-12' src={logo} alt="" />
                    <Link to='/'><span className='font-serif me-4 text-white hover:text-orange-700'>Home</span></Link>
                    <Link to='/beers'><span className='font-serif text-white hover:text-orange-700'>Beers</span></Link>
                </div>

                <div className="flex-none gap-2">
                    {user ? (
                        <>
                            <button className='btn btn-sm bg-[#FF6969] text-white' onClick={logout}>Logout</button>
                        </>
                    ) : (
                        <Link to='/login'><button className='btn btn-sm bg-[#141E46] hover:text-black text-white'>Login</button></Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;