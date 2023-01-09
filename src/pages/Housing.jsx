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

    function increaseImage() {
        let index = data.pictures.indexOf(image);
        index++;
        setImage(data.pictures[index]);
    }

    function decreaseImage() {
        let index = data.pictures.indexOf(image);
        index--;
        setImage(data.pictures[index]);
    }

    return (
        <>
            <Header />
            <div className="housingBanner">
                <img
                    className={
                        data.pictures.indexOf(image) === 0
                            ? "none"
                            : "leftArrow"
                    }
                    src={arrow}
                    alt="arrow"
                    onClick={() => {
                        decreaseImage();
                    }}
                />
                <img className="contentImage" src={image} alt={data.picture} />
                <img
                    className={
                        data.pictures.indexOf(image) > data.pictures.length - 2
                            ? "none"
                            : "rightArrow"
                    }
                    src={arrow}
                    alt="arrow"
                    onClick={() => {
                        increaseImage();
                    }}
                />
            </div>

            <div className="information">
                <div className="left">
                    <h1>{data.title}</h1>
                    <p>{data.location}</p>
                    <ul>
                        {data.tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className="right">
                    <p>{data.host.name}</p>
                    <img src={data.host.picture} alt="propriétaire" />
                </div>
            </div>
        </>
    );
}

export default Housing;
