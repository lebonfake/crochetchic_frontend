import {createBrowserRouter} from 'react-router-dom';
import Navbar from './Componentx/LandingComponents/Navbar';
import Landing from './pages/Landing';
const router = createBrowserRouter([
  {
    path: '',
    element: <Landing/>, // App can be a layout with <Outlet />
   },
 
])

export default router;