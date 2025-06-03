import "../../styles/Searcher.css"
import {useEffect, useMemo, useState} from "react";
import ApiMovies from "./ApiMovies";
import Pages from "./Pages";
import {searchMoviesRequest} from "../../libraries/ApiLibrary";
import Filter from "./Filter/Filter";
import {useSearchParams} from "react-router-dom";

const Searcher = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isPageChanged, setIsPageChanged] = useState(false);

    const [searchedData, setSearchedData] = useState({
                    moviesData: [{}],
                    emptyRequest: true,
                    loading: true,
                    totalPages: 0,
                    searchedValue: 0,
                    currentPage: 0,
                    showFilter: false,
                    defaultPage: true
    });

    const  setCurrentData = (value, response) =>{

        setSearchedData({
            ...searchedData,
            moviesData: response["tv_shows"],
            emptyRequest: Number(response["total"]) === 0 ? true: false,
            loading: false,
            totalPages: response["pages"],
            searchedValue: value,
            currentPage: response["page"],
        });

        setSearchParams({...searchParams, value: value, page: response["page"]});
    };

    const getMovies =  (value = "", page = 1) => {

       if(value == null){
           value = ""
       };

       if(page == null){
           page = 1
       };

       searchMoviesRequest(value, page, searchedData, setCurrentData);
    };

    const searchMoviesByInput = () =>{

        let timeoutId;

        return (e)=>{
            clearTimeout(timeoutId);
            timeoutId = setTimeout(()=>{
                getMovies(e.target.value);
            },1000);

            setSearchParams({value: e.target.value});
        };
    };

    useEffect(()=>{

        let urlValue = searchParams.get('value');
        let urlPage = searchParams.get('page');

        if(Number(urlPage) === 0){
            urlPage=1;
        };

        getMovies(urlValue, Number(urlPage));

        if(urlValue){
            document.getElementById("input").value = urlValue;
        };

     },[]);

    const debounceSearchMovies = useMemo(()=> searchMoviesByInput(), []);

    return<div className="searcher-section">
                    <h1>Filmová Databáze</h1>
                    <input
                        className="name-input"
                        placeholder="Zadej název filmu"
                        onChange={debounceSearchMovies}
                        id="input"
                        type="text"
                    />
                     <Filter
                         searchedData ={searchedData}
                         setSearchedData={setSearchedData}
                         isPageChanged ={isPageChanged}
                         setIsPageChanged ={setIsPageChanged}
                     />
                <div className="data">
                    {searchedData.loading ?
                        <div id="loader">
                         <h1>Načítání...</h1>
                        </div>
                    :
                        <div>
                            <ApiMovies searchedData={searchedData}/>
                            <Pages
                                searchedData={searchedData}
                                sendRequest={getMovies}
                                isPageChanged ={isPageChanged}
                                setIsPageChanged ={setIsPageChanged}/>
                        </div>

                    }
               </div>
        </div>

};

export default Searcher;