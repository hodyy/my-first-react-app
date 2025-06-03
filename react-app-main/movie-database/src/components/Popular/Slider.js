import {useState} from "react";
import "../../styles/Slider.css";
import {Link} from "react-router-dom";
let timeoutId;
const Slider = ({popularMovies}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [wayBack, setWayBack] = useState(false)

    const slide = ()=> {
        timeoutId = setTimeout(() => {
            if (!wayBack && activeIndex != popularMovies.length - 1) {
                showNext()
            } else if (activeIndex == popularMovies.length - 1) {
                setWayBack(true)
                showPrevious()
            } else if (wayBack && activeIndex != 0) {
                showPrevious()
            } else if (wayBack && activeIndex == 0) {
                setWayBack(false)
                showNext()
            }
        }, 5000)
    }
    const showPrevious = ()=>{
        clearTimeout(timeoutId)
        if(activeIndex-1<0){
            setActiveIndex(popularMovies.length-1)
        }else{
            setActiveIndex(activeIndex-1)
        }
    }

    const showNext = ()=>{
        clearTimeout(timeoutId)
        if(activeIndex+1>popularMovies.length-1){
            setActiveIndex(0)
        }else{
            setActiveIndex(activeIndex+1)
        }
    }

    slide()

    return (
        <div className="slider-wrapper">
            <div className="slider-content-section">
                {
                    popularMovies.map((movie, index)=>{
                        let status;
                                if(index===activeIndex){
                                    status = "active"
                                }else if(index === activeIndex-1){
                                    status = "previous"
                                }else if(index === activeIndex+1){
                                    status = "next"
                                }else{
                                    status = "other"
                                }

                        return <Link id = "detail-link"to={`/movie/${movie.id}`}>
                                    <img className ={`movie-image ${status}`} src ={movie.image_thumbnail_path}></img>
                            </Link>
                    })
                }

            </div>
            {activeIndex != 0 &&  <button id="left-arrow" onClick={showPrevious}>{"<<"}</button>}
            {activeIndex != popularMovies.length-1 &&   <button id="right-arrow" onClick={showNext}>{">>"}</button>}
        </div>
        )
};

export default Slider;
