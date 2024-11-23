import Header from "./Header";
import Body from "./Body";
import './SettingProfile.css';
import {FaCheckCircle} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import {TimeContext} from "../App";

const SettingProfilePage = ({isMainPage}) => {

    const navigate = useNavigate();

    function navigateToMain() {
        navigate("/main");
    }

    return (
        <div className={"SettingProfilePage"}>
            <Header/>
            <Body/>
            {isMainPage && (
                <button className={"btn-main"} onClick={navigateToMain}>
                    <FaCheckCircle/>
                </button>
            )}
        </div>
    );
};

export default SettingProfilePage;