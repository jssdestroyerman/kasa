import { NavLink } from "react-router-dom";
import database from "../database.json";

function HomeCard() {
    const data = database;

    return (
        <div className="card-container">
            {data.map((logement) => {
                return (
                    <NavLink
                        key={logement.id}
                        className="card"
                        to={`/logement/?id=${logement.id}`}
                    >
                        <img src={logement.pictures[0]} alt="" />
                        <p>{logement.title}</p>
                    </NavLink>
                );
            })}
        </div>
    );
}

export default HomeCard;
