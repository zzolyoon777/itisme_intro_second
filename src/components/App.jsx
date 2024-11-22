import '../App.css';
import {createContext, useState} from "react";
import {Route, Routes} from "react-router-dom";
import SettingProfilePage from "./setting_profile/SettingProfilePage";

const ProfileContext = createContext(undefined);

function App() {
    const [isMainPage, setIsMainPage] = useState(false);
    const [infoValues, setInfoValues] = useState({});

    return (
        <div className="App">
            <ProfileContext.Provider value={}>
                <Routes>
                    <Route path={""} element={isMainPage ? <SettingProfilePage/> : null}/>
                    <Route path={"settingProfile"}
                           element={
                        <SettingProfilePage
                            setIsMainPage={() => {setIsMainPage(true)}}

                        />
                    }/>
                </Routes>
            </ProfileContext.Provider>
        </div>
    );
}

export default App;
