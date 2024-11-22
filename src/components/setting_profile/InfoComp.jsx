

const InfoComp = ({ infoCompTitle }) => {
    return (
        <article className={"InfoComp"}>
            <p className={"infoCompTitle"}>{infoCompTitle}</p>
            <input className={"infoCompInput"} />
        </article>
    );
};

export default InfoComp;