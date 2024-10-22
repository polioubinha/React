import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"

const ProtectedRoute = ({children}) => {
    const { isAutheticated } = useAuth();

    if(!isAutheticated){
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;