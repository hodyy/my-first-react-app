import '../../styles/App.css';
import Menu from "../Menu/Menu";
import Searcher from "../Searcher/Searcher";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Detail from "../MovieDetail/Detail";
import FavoritesMovies from "../Favorites/FavoritesMovies";
import Settings from "../Settings/Settings";
import Popular from "../Popular/Popular";

const Router = () => {

    return(
        <BrowserRouter>
                    <Routes>
                        <Route path = "/" element={<Menu/>}>
                            <Route index  element={<Searcher />}></Route>
                            <Route path = "/searcher"  element={<Searcher />}></Route>
                            <Route path = "/settings"  element={<Settings/>}></Route>
                            <Route path = "/favorites"  element={<FavoritesMovies />}></Route>
                            <Route path = "/popular"  element={<Popular />}></Route>
                        </Route>
                        <Route path = "/movie/:movieId"  element={<Detail />}></Route>
                    </Routes>
        </BrowserRouter>
    )
};

export default Router;