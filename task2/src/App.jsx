import CategoryPage from "./pages/CategoryPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./NavBar"; 
import ViewFood from "./pages/ViewFood";
import ViewDetails from "./pages/ViewDetails";

export default function App() {

    return (
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' index={true} element={<CategoryPage />} />
					{/* Insert additional route here   */}
					<Route path='/meals/:category' element={<ViewFood />} />
					<Route path='/meals/:category/:id' element={<ViewDetails />} />
				</Routes>
			</BrowserRouter>
		);

}


