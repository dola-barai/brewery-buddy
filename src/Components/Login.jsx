import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { AuthContext } from './AuthContext';

const Login = () => {
    const navigate = useNavigate()
    const { login } = useContext(AuthContext)

    const handleLogin = () => {
        login();
        navigate('/beers');
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required/>
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-sm bg-[#141E46] text-white hover:text-black">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
