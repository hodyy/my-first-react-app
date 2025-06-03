export function searchMoviesRequest(value, page,pageData, setDataFunction) {
    let url = `https://www.episodate.com/api/search?q=${value}&page=${page}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {setDataFunction(value, data, page)});
};

export function searchDetail(movieId, setDetailData) {

    fetch(`https://www.episodate.com/api/show-details?q=${movieId}`)
        .then((response)=>response.json())
        .then((data) => {
            setDetailData(data)
        } );
};

export function searchPopular(setPopularMovies) {

    fetch(`https://www.episodate.com/api/most-popular?page=1`)
        .then((response)=>response.json())
        .then((data) => {
            setPopularMovies(data)
        } );
};