import "../../styles/Settings.css";
import {useContext, useEffect} from "react";
import {ColorMode, NotificationContext} from "../../App";

const Settings = () => {
   const [colorMode, setColorMode] = useContext(ColorMode);
   const [notification, setNotification, notificationAllowed, setNotificationAllowed] = useContext(NotificationContext);

    const setMode = ()=>{

        if(document.getElementById("color-mode-switch").checked){
            setColorMode("light");
        }else{
            setColorMode("dark");
        };

    };

    const allowNotification = ()=>{

        if(document.getElementById("notification-switch").checked){
            setNotification(null);
            setNotificationAllowed(true);
        }else{
            setNotificationAllowed(false);
        };

    };

    useEffect(()=>{
        const colorModeInput = document.getElementById("color-mode-switch");
        const notificationInput = document.getElementById("notification-switch");

        if(colorMode === "dark"){
            colorModeInput.checked = false;
        }else {
            colorModeInput.checked = true;
        };

        if(notificationAllowed){
            notificationInput.checked = true;
        }else {
            notificationInput.checked = false;
        };

    });

    return <div className = "settings-section">
            <h1 >Nastavení</h1>
                <div className="settings-option">
                     <label id = "color-mode-label" >Light mode</label>
                     <label className="switch">
                        <input
                         type ="checkbox"
                         id ="color-mode-switch"
                         onClick ={setMode}>
                        </input>
                        <span className="slider"></span>
                    </label>
                </div>
        <div className="settings-option">
            <label id = "color-mode-label" >Notifikace</label>
            <label className="switch">
                <input
                    type ="checkbox"
                    id ="notification-switch"
                    onClick ={allowNotification}>
                </input>
                <span className="slider"></span>
            </label>
        </div>
    </div>

};

export default Settings;
