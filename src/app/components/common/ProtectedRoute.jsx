import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUser } from "../../../features/slices/authSlice";

export default function ProtectedRoute({ children}) {
    const userInfo = useSelector(selectUser)

    return userInfo ? children : <Navigate to="/sign-in" />
}