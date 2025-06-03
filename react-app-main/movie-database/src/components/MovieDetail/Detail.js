import "../../styles/Detail.css";
import {useParams} from "react-router-dom";
import {searchDetail} from "../../libraries/ApiLibrary";
import {useEffect, useState} from "react";

const Detail = () => {
    const [movieDetail, setMovieDetail] = useState({tvShow: null});
    const {movieId} = useParams();

    const replaceTags = (str) =>{
        return str.replace(/<br\s*\/?>/gi, ' ')
                    .replace(/<b\s*\/?>/gi, ' ')
                        .replace(/<\/b\s*\/?>/gi, ' ')
    };

    useEffect(()=>{
        searchDetail(movieId, setMovieDetail)
    }, []);


    return <div>
        {movieDetail.tvShow == null ?
            "LOADING"
            :
            <div className="movie-detail">
              <h1>{movieDetail.tvShow.name}</h1>
                <p className="description">{replaceTags(movieDetail.tvShow.description)}</p>
            </div>
        }
    </div>
};

export default Detail;
