import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Components/AuthContext";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    
    if(user){
        return children;
    }
    return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRoute;