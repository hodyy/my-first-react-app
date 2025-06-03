import "../../styles/Notification.css"
import {useContext} from "react";
import {NotificationContext} from "../../App";

let timoutId;
const Notification = () => {
    const [notification, setNotification] = useContext(NotificationContext);
    const {text} = notification;

    clearTimeout(timoutId);

    timoutId = setTimeout(()=>{
        setNotification(null);
    }, 1200);

    return <div className="notification">
        <span>{text}</span>
    </div>
};

export default Notification;
