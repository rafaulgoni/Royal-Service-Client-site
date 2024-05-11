import { useContext } from "react";
import { Navigate, useLocation} from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from '../Providers/AuthProvider';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname);

    if (loading) {
            return <span className="loading loading-bars loading-lg text-[#F9A51A] text-center"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={location.pathname} replace={true}></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
}