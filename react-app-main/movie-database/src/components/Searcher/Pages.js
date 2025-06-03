import "../../styles/Page.css";
import {useEffect, useMemo} from "react";

const Pages = ({searchedData, isPageChanged, setIsPageChanged, sendRequest}) => {

    const {totalPages, currentPage, searchedValue, emptyRequest} = searchedData;

    const makeButtons = useMemo(() =>{

        const buttonsArray = [];
        let maxShowedButtons;

        if(totalPages>currentPage + 1 && currentPage !==1) {

            maxShowedButtons = currentPage + 1;

        }else if(totalPages>currentPage + 2 && currentPage ===1){

            maxShowedButtons = currentPage + 2;

        }else{

            maxShowedButtons = totalPages;

        };

        let firstButtonNumber;
        if(currentPage>1 && currentPage!==totalPages){

                firstButtonNumber = currentPage - 1;

        }else if(currentPage===totalPages && totalPages>2 ){

            firstButtonNumber = currentPage - 2;

        } else if(currentPage===totalPages && totalPages===2 ){

            firstButtonNumber = currentPage - 1;

        }
        else{

            firstButtonNumber = currentPage;

        };

        for(let button = firstButtonNumber; button <=maxShowedButtons; button++){

            if(button === currentPage){

                buttonsArray.push(
                    <button type="button" className="current-page" onClick={()=>showMoviesOnPage(button)}>
                        {button}
                    </button>)
            }else {
                buttonsArray.push(
                    <button type="button" key={button} className="other-page btn" onClick={()=>showMoviesOnPage(button)}>
                        {button}
                    </button>)
            };
        }
        return buttonsArray

    }, [searchedValue, currentPage, totalPages]);


    const showMoviesOnPage = (pageNumber) =>{
        sendRequest(searchedValue, pageNumber);
        setIsPageChanged(true);
    };

    const gotToNextPage = () =>{
        if(currentPage < totalPages);
        showMoviesOnPage(currentPage + 1);
    };

    const gotToPreviousPage = () =>{
        if(currentPage > 1){
            showMoviesOnPage(currentPage - 1)
        };
    };

    const goToLastPage = () =>{
        showMoviesOnPage(totalPages);
    };

    const goToFirstPage = () =>{
        showMoviesOnPage(1)
    };

    useEffect(()=>{
        console.log(isPageChanged)
        if(isPageChanged) {
                window.scrollTo({ top: document.body.scrollHeight})
         }
        isPageChanged=false
    });

    if(!emptyRequest){
        return <div className="page-buttons">
            <button type="button" key="<<" className="other-page btn" onClick={goToFirstPage}>{"<<"}</button>
            <button type="button" key="<" className="other-page btn" onClick={gotToPreviousPage}>{"<"}</button>
            {makeButtons.map((button)=>{return button})}
            <button type="button" key=">" className="other-page btn" onClick={gotToNextPage}>{">"}</button>
            <button type="button" key=">>" className="other-page btn" onClick={goToLastPage}>{">>"}</button>
        </div>
    };
};

export default Pages;
