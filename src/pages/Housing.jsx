import database from "../database.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import Star from "../components/Star";
import { redirect, useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import { useEffect } from "react";

function Housing() {
    const { id } = useParams();
    const data = database.find((element) => element.id === id);

    if (!data) {
        console.log("abc");
    }

    return (
        <>
            <Header />
            <Carrousel data={data} />

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
