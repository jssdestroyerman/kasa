import database from "../database.json";
import Header from "../components/Header";
import { useState } from "react";
import arrow from "../assets/arrow.svg";

function Housing() {
    let url = new URL(window.location.href);
    let pageId = url.searchParams.get("id");

    const data = database.find((element) => element.id === pageId);
    console.log(data);
    const [image, setImage] = useState(data.pictures[0]);

    return (
        <>
            <Header />
            <div className="housingBanner">
                <img src={image} alt="" />
            </div>
        </>
    );
}

export default Housing;
