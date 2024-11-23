import {useContext} from "react";
import {ProfileContext} from "../App";


const InfoComp = ({ infoCompTitle }) => {
    const {infoValues, setInfoValue} = useContext(ProfileContext);
    return (
        <article className={"InfoComp"}>
            <p className={"infoCompTitle"}>{infoCompTitle}</p>
            <input className={"infoCompInput"} onChange={(e) => {
                setInfoValue(infoCompTitle, e.target.value)
            }}/>
        </article>
    );
};

export default InfoComp;