import {useContext} from "react";
import {TimeContext} from "../App";

const Header = () => {
    const {timeClock} = useContext(TimeContext);
    return (
        <header className={"Header"}>
            <article className={"settingProfileTitle"}>{timeClock}</article>
            <article className={"settingProfileTitle"}>여러분의 자기소개 앱을 위한 기본 프로필 작성을 도와주세요!</article>
        </header>
    );
};

export default Header;