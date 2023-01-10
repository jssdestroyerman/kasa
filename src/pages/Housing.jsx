import database from "../database.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import { useState } from "react";
import Star from "../components/Star";

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

    const equipements = data.equipments.map((equipement, index) => {
        return <li key={index}>{equipement}</li>;
    });

    return (
        <>
            <Header />
            <div className="housingBanner">
                <svg
                    className={
                        data.pictures.indexOf(image) === 0
                            ? "none"
                            : "leftArrow"
                    }
                    onClick={() => {
                        decreaseImage();
                    }}
                    width="28"
                    height="28"
                    viewBox="0 0 25 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z"
                        fill="white"
                    />
                </svg>
                <img className="contentImage" src={image} alt={data.picture} />
                <svg
                    className={
                        data.pictures.indexOf(image) ===
                        data.pictures.length - 1
                            ? "none"
                            : "rightArrow"
                    }
                    onClick={() => {
                        increaseImage();
                    }}
                    width="28"
                    height="28"
                    viewBox="0 0 25 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z"
                        fill="white"
                    />
                </svg>
            </div>

            <div className="informations">
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
                    <div className="hostInformations">
                        <p>{data.host.name}</p>
                        <img src={data.host.picture} alt="propriétaire" />
                    </div>
                    <div className="rating">
                        <Star rating={data.rating} />
                    </div>
                </div>
            </div>
            <div className="housingCollapse">
                <div className="collapse">
                    <Collapse name={"Description"} content={data.description} />
                </div>
                <div className="collapse">
                    <Collapse name={"Équipements"} content={equipements} />
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Housing;
