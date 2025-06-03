import "../../styles/Popular.css";
import {useEffect, useState} from "react";
import {searchPopular} from "../../libraries/ApiLibrary";
import Slider from "./Slider";

const Popular = () => {
    const [popularMovies, setPopularMovies] = useState(null)

    const setCurrentData = (response)=>{
        setPopularMovies(response["tv_shows"])
    }

    useEffect(()=>{
        searchPopular(setCurrentData)
    }, [])


    return (
        <div id="popular-section">
            <h1>Populární pořady</h1>
            {
                popularMovies == null ?
                    <div>Načítám</div>
                    :
                    <Slider popularMovies = {popularMovies}></Slider>
            }
        </div>
)
};

export default Popular;
