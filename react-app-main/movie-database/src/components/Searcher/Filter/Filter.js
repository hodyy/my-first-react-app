import {useEffect, useState} from "react";
import YearSelector from "./YearSelector";
import "../../../styles/Filter.css";
import CountrySelector from "./CountrySelector";

const compare = (selectedValue, value) =>{

    if(selectedValue==value || selectedValue =="all")
        return true
    else{
        return false
    };
};

const Filter = ({searchedData, setSearchedData, setIsPageChanged}) => {

    const {currentPage, searchedValue} = searchedData;
    const [dataOnPage, setDataOnPage] = useState([]);
    const [selectedYear, setSelectedYear] = useState("all");
    const [selectedCountry, setSelectedCountry] = useState("all");
    const [defaultFilter, setDefaultFilter] = useState(false);
    const [showFilter, setShowFilter] = useState(false);

    const filter = () =>{

        const currentYear = document.getElementById("year-selector").value;
        const currentCountry = document.getElementById("country-selector").value;

        setSelectedCountry(currentCountry);
        setSelectedYear(currentYear);

        if (currentYear != "all" || currentCountry != "all"  ){

            let filteredData = dataOnPage.filter((movie)=>{

                const {start_date, country} = movie;
                let year = new Date(start_date).getFullYear();
                return compare(currentYear, year) && compare(currentCountry,country)

            })

            setSearchedData({...searchedData, moviesData: filteredData});
            setDefaultFilter(false);

        }else{

            setDefaultFilter(true);
            setSearchedData({...searchedData, moviesData: dataOnPage});

        };

        setIsPageChanged(false);

    };

    const cancelFilter = () => {

        setSearchedData({...searchedData, moviesData: dataOnPage});
        setDefaultFilter(true);
        setIsPageChanged(false);

    }

    useEffect(()=>{

       setDataOnPage(searchedData.moviesData);
       setDefaultFilter(true);

    }, [currentPage, searchedValue]);

    return<>
        <div className={`${showFilter ? "filter" : "filter hide"}`}>
            <div className="selectors-section">
                    <YearSelector
                        searchedData ={searchedData}
                        setSelectedYear={setSelectedYear}
                        defaultFilter={defaultFilter}
                        setDefaultFilter={setDefaultFilter}
                        selectedYear = {selectedYear}
                        filter = {filter}
                        />
                    <CountrySelector
                        searchedData ={searchedData}
                        setSelectedCountry={setSelectedCountry}
                        defaultFilter = {defaultFilter}
                        setDefaultFilter={setDefaultFilter}
                        selectedCountry={selectedCountry}
                        filter = {filter}
                    />
                    <button type="button" className = "filter-button btn" onClick={cancelFilter}>Zrušit</button>
            </div>
        </div>
        <button type="button" className = "show-filter-button btn" onClick={()=>setShowFilter(!showFilter)}>{`${showFilter ? "Skrýt filter" : "Zobrazit filter"}`}</button>
    </>
};

export default Filter;
