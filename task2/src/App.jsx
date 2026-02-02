import CategoryPage from "./pages/CategoryPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./NavBar";


function App() {

    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" index={true} element={<CategoryPage/>}/>
                {/* Insert additional route here   */}
            </Routes>
        </BrowserRouter>

    );

}

export default App;
