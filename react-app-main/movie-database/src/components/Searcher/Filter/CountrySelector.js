import {useEffect, useState} from "react";
import "../../../styles/Selector.css";

const CountrySelector = ({searchedData, defaultFilter, setSelectedCountry, selectedCountry, filter}) => {

    const {searchedValue, currentPage, moviesData, emptyRequest } = searchedData;
    const [countriesOnPage, setCountriesOnPage] = useState([]);

    useEffect(()=>{

        let countryArray = [];
        if(emptyRequest){
            setCountriesOnPage([]);
        }
        else {
            if(moviesData.length>0){
                moviesData.forEach((movie) => {
                    let country = movie.country;
                    countryArray.push(country);
                });
                countryArray = [...new Set(countryArray)];
                setCountriesOnPage(countryArray);
            };
        };

    },[searchedValue, currentPage, moviesData]);

    if(defaultFilter == true){
        document.getElementById("country-selector").value = "all";
        setSelectedCountry("all");
    };

    return <div className="selector-wrapper">
                <label className="country">Země:</label>
                <select id = "country-selector" onChange={filter}>
                    {selectedCountry != "all" ?
                        <>
                            <option value="all">-</option>
                            <option value={selectedCountry} selected>{selectedCountry}</option>
                        </>
                        :
                        <>
                            <option value="all" selected>-</option>
                            {countriesOnPage.map((year, index) => {
                                return <option key={index} value={year}>{year}</option>
                            })}
                        </>
                    }
                </select>
        </div>
};

export default CountrySelector;
