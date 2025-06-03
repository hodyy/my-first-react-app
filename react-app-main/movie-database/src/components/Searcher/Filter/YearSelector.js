import {useEffect,useState} from "react";
import "../../../styles/Selector.css";

const YearSelector = ({filter, searchedData, defaultFilter, selectedYear, setSelectedYear}) => {

    const {searchedValue, currentPage, moviesData, emptyRequest } = searchedData;
    const [yearsOnPage, setYearsOnPage] = useState([]);

    useEffect(()=>{
        let yearsArray = [];

        if(emptyRequest){
            setYearsOnPage([]);
        } else {

            if(moviesData.length>0){
                moviesData.forEach((movie) => {

                    let date = new Date(movie.start_date);
                    let year = date.getFullYear();
                    yearsArray.push(year);
                })
                yearsArray = [...new Set(yearsArray)];
                yearsArray.sort();
                setYearsOnPage(yearsArray);
            };
        };

    },[searchedValue, currentPage, moviesData]);

    if(defaultFilter == true){
        document.getElementById("year-selector").value = "all";
        setSelectedYear("all");
    };


    return <div className="selector-wrapper">
                <label className="year">Rok:</label>
                <select id = "year-selector" onChange={filter}>
                    {selectedYear != "all" ?
                        <>
                            <option key="all" value="all">-</option>
                            <option  value={selectedYear} selected>{selectedYear}</option>

                        </>
                        :
                        <>
                            <option value="all" selected>-</option>
                            {yearsOnPage.map((year, index)=>{
                                return <option key={index} value={year}>{year}</option>
                            })}
                        </>
                    }
                </select>
        </div>
};

export default YearSelector;
