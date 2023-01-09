import database from "../database.json";
import Header from "../components/Header";

function Logement() {
    let url = new URL(window.location.href);
    let pageId = url.searchParams.get("id");

    const data = database.find((element) => element.id === pageId);
    console.log(data);

    // try use Effect

    return (
        <>
            <Header />
            <div className="housingBanner">
                <img src={} alt="" />
            </div>
        </>
    );
}

export default Logement;
