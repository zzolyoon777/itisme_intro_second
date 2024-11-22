import InfoComp from "./InfoComp";

const infoCompTitles = [
    "이름",
    "생년월일",
    "성별",
    "취미",
    "옷 입는 스타일",
    "인생 좌우명",
    "좋아하는 음식"
]

const Body = () => {
    return (
        <main className={"Body"}>
            {infoCompTitles.map(e => <InfoComp infoCompTitle={e}/> )}
        </main>
    );
};

export default Body;