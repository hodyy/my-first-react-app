import {createContext, useState} from "react";
import './styles/App.css';
import Notification from "./components/Notification/Notification";
import Router from "./components/Router/Router";

export const FavoriteMoviesContext =  createContext({});
export const NotificationContext =  createContext({});
export const ColorMode =  createContext({});

const App = () => {

    const [favoritesMovies, setFavoriteMovies] = useState([]);
    const [notification, setNotification] = useState(null);
    const [notificationAllowed, setNotificationAllowed] = useState(true);
    const [colorMode, setColorMode] = useState("dark");

    if(colorMode=="dark"){
        document.body.style.backgroundColor = "black";
    }else{
        document.body.style.backgroundColor = "white";
    }

    return(
        <ColorMode.Provider value={[colorMode, setColorMode]}>
            <div id="background" className={colorMode}>
                <NotificationContext.Provider value ={[notification, setNotification, notificationAllowed, setNotificationAllowed]}>
                {notification && notificationAllowed && <Notification/>}
                    <FavoriteMoviesContext.Provider value ={[favoritesMovies, setFavoriteMovies]}>
                        <Router/>
                    </FavoriteMoviesContext.Provider>
                </NotificationContext.Provider>
            </div>
        </ColorMode.Provider>
    )
};

export default App;