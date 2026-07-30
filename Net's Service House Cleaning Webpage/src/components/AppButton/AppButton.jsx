import {NavLink} from "react-router-dom";
import "./AppButton.css";

const AppButton = ({ text, link }) => {
    return (
        <NavLink className="button" to={link}>
            {text}
        </NavLink>
    )
}

export default AppButton;