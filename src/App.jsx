import './css/app.scss';
import Home from './pages/Home'
import Apt from './pages/Apt'
import About from './pages/About'
import Error from './pages/Error'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/apt/:id",
    element: <Apt/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "*",
    element: <Error/>,
  }
]);

export default function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	)
}