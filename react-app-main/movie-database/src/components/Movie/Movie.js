import "../../styles/ApiMovie.css";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {FavoriteMoviesContext, NotificationContext} from "../../App";

const Movie = ({movie, isFavorite} ) => {

    const {id, name, image_thumbnail_path,start_date, country } = movie;

    const [favoriteMovies, setFavoriteMovies] = useContext(FavoriteMoviesContext);
    const [notification, setNotification] = useContext(NotificationContext);

    const addToFavorites = (selectedMovie) => {
        favoriteMovies.push(selectedMovie);

        setFavoriteMovies([...favoriteMovies]);
        setNotification({text: `"${selectedMovie.name}" PŘIDÁN do oblíbených!`});
    };

    const removeFromFavorite = (selectedMovie) => {
        const favoriteMoviesFiltered = favoriteMovies.filter((favoriteMovie) => {
           return favoriteMovie.id != selectedMovie.id;
       });

        setFavoriteMovies(favoriteMoviesFiltered);
        setNotification({text: `"${selectedMovie.name}" ODEBRÁN z oblíbených!`});
    };

    return <div className="one-api-movie" key={id}>
                <img src={image_thumbnail_path} alt=" "/>
                <h2>{name}</h2>
                <p>{country} - {new Date(start_date).getFullYear()}</p>
                <div className="movie-buttons">
                    <Link id = "detail-link"to={`/movie/${id}`}>
                        <button type="button" id="detail" className="movie-btn">
                            Detail
                        </button>
                    </Link>
                    {!isFavorite ?
                        <button type="button" className="movie-btn btn" onClick={() => addToFavorites(movie)}>Přidat</button>
                        :
                        <button type="button" className="movie-btn btn" onClick={() => removeFromFavorite(movie)}>Odebrat</button>
                    }
               </div>
        </div>

};

export default Movie;
