import { useContext, useEffect } from "react"
import { AuthContext } from "../../App"
import { Navigate, Outlet } from "react-router"
import { toast } from "sonner"

const ProtectedRoute = () => {
    const [user] = useContext(AuthContext)


    if (user?.email) {
        return <Outlet />
    } else {
        return <Navigate to="/sign-in" />
    }


}

export default ProtectedRoute