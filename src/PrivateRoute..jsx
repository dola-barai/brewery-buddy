import { Navigate } from "react-router-dom";
import { useAuth } from "./Components/AuthContext";


const PrivateRoute = ({ children }) => {
    const { user } = useAuth()
    
    if(user){
        return children;
    }
    return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRoute;