import "../../styles/ApiMovie.css";
import {useContext} from "react";
import {FavoriteMoviesContext} from "../../App";
import Movie from "../Movie/Movie";

const ApiMovies = ({searchedData}) => {
    const {emptyRequest, moviesData} = searchedData;
    const [favoriteMovies, setFavoriteMovies] = useContext(FavoriteMoviesContext);

    return <div>
            {
                emptyRequest === true || moviesData.length === 0 ?
                <div className="no-data-div">
                    <h1>Nic jsme nenašli</h1>
                </div>
            :
                <div className="all-api-movie">
                    {moviesData.map((movie)=> {
                        const isFavorite =
                            favoriteMovies.find((favoriteMovie) =>
                            {return movie.id == favoriteMovie.id }) ? true : false

                    return <Movie movie = {movie} isFavorite = {isFavorite}></Movie>
                })}
                </div>
            }
    </div>
};

export default ApiMovies;
