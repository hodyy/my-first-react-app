import {useContext} from "react";
import {FavoriteMoviesContext, NotificationContext} from "../../App";
import Movie from "../Movie/Movie";
import "../../styles/FavoritesMovies.css";

const FavoritesMovies = () => {
    const [favoriteMovies, setFavoriteMovies] = useContext(FavoriteMoviesContext);
    const [notification, setNotification] = useContext(NotificationContext);

    const removeAllFavorites = () =>{
        setFavoriteMovies([]);
        setNotification({text: "Všechny filmy odebrány z oblíbených"});
    };

    return (
        <div id="favorites-section">
            <h1>Moje oblíbené pořady</h1>
            {favoriteMovies.length > 0 &&
                <button id="delete-all-favorites" className="btn" onClick={removeAllFavorites}>Odebrat vše</button>}
            <div className="all-api-movie">
                {favoriteMovies.map((movie)=> {
                    return <Movie movie = {movie} isFavorite = {true}></Movie>
                })}
            </div>
        </div>
)
};

export default FavoritesMovies;
