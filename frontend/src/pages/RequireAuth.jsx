import {useLocation,Navigate,Outlet} from "react-router-dom"
import useAuth from "../hooks/useAuth";

function RequireAuth(){
    const {auth}=useAuth();
    const location=useLocation();
    console.log("RequireAuth");
    console.log(auth);
    return(
        auth
           ?<Outlet/>
           :<Navigate to="/login" state={{from:location}} replace/>
        );
    }
export default RequireAuth    