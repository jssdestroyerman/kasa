import database from "../database.json";

function HomeCard() {
    const data = database;

    return (
        <div className="card-container">
            {data.map((logement) => {
                return (
                    <div key={logement.id} className="card">
                        <img src={logement.pictures[0]} alt="" />
                        <p>{logement.title}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default HomeCard;
