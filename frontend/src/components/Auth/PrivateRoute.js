import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const PrivateRoute = () => {
  let auth = Cookies.get()
  return (
    auth.token ? <Outlet/> : <Navigate to="/" />
  )
}

export default PrivateRoute