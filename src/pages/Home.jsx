import Header from "../components/Header";
import Footer from "../components/Footer";
import homeBanner from "../assets/homeBanner.jpg";
import database from "../database.json";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <>
            <Header />
            <div className="homeBanner">
                <img src={homeBanner} alt="bannière" />
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <div className="card-container">
                {database.map((logement) => {
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
            <Footer />
        </>
    );
}

export default Home;
