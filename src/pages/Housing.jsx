import database from "../database.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import { useState } from "react";
import Star from "../components/Star";
import Arrow from "../components/Arrow";
import { useLocation } from "react-router-dom";
import { redirect } from "react-router-dom";
import Error from "../pages/Error";

function Housing() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search).get("id");
    const data = database.find((element) => element.id === searchParams);
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

    const rightArrowCond = data.pictures.indexOf(image) === 0;
    const leftArrowCond =
        data.pictures.indexOf(image) === data.pictures.length - 1;

    return (
        <>
            <Header />
            <div className="housingBanner">
                <Arrow
                    indexOf={rightArrowCond}
                    decreaseImage={decreaseImage}
                    theClassName={"leftArrow"}
                />
                <img className="contentImage" src={image} alt={data.picture} />
                <Arrow
                    indexOf={leftArrowCond}
                    decreaseImage={increaseImage}
                    theClassName={"rightArrow"}
                />
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
                    <Collapse
                        name={"Équipements"}
                        content={data.equipments.map((equipement, index) => {
                            return <li key={index}>{equipement}</li>;
                        })}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Housing;
