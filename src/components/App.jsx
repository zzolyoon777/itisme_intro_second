import '../App.css';
import {createContext, useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import SettingProfilePage from "./setting_profile/SettingProfilePage";
import MainPage from "./main/MainPage";

export const ProfileContext = createContext(undefined);

export const TimeContext = createContext(undefined);

function App() {
    const [date, setDate] = useState(new Date());
    const [isMainPage, setIsMainPage] = useState(false);
    const [infoValues, setInfoValues] = useState({});

    const [timeClock, setTimeClock] = useState(1);

    useEffect(() => {
        console.log("abcd");
        console.log(isMainPage)
        const interval = setInterval(() => {
            setDate(new Date())
            setTimeClock(date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [date]);

    function setInfoValue(k, v) {
        setInfoValues({
            ...infoValues,
            [k]: v
        });
        if(v !== "" && Object.keys(infoValues).length === 7) setIsMainPage(true);
        console.log(v, Object.keys(infoValues).length);
        console.log(isMainPage);
    }

    return (
        <div className="App">
            <TimeContext.Provider value={{timeClock: timeClock}}>
                <ProfileContext.Provider value={{infoValues, setInfoValue}}>
                    <Routes>
                        <Route path={""} element={!isMainPage ? <SettingProfilePage isMainPage={isMainPage}/> : <MainPage/>}/>
                        <Route path={"settingProfile"}
                               element={
                                   <SettingProfilePage
                                       isMainPage={isMainPage}
                                   />
                               }/>
                        <Route path={"/main"} element={<MainPage/>}/>
                    </Routes>
                </ProfileContext.Provider>
            </TimeContext.Provider>
        </div>
    );
}

export default App;
