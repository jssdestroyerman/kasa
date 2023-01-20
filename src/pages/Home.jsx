import Header from "../components/Header";
import Footer from "../components/Footer";
import database from "../database.json";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Home() {
    const [data, setData] = useState(database);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    const pages = [];

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = data.slice(firstPostIndex, lastPostIndex);

    for (let i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <>
            <Header />
            <div className="homeBanner">
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <div className="card-container">
                {currentPosts.map((logement) => {
                    return (
                        <NavLink
                            key={logement.id}
                            className="card"
                            to={`/logement/${logement.id}`}
                        >
                            <img src={logement.pictures[0]} alt="" />
                            <p>{logement.title}</p>
                        </NavLink>
                    );
                })}
            </div>
            <div className="pagination">
                {pages.map((page, index) => {
                    return (
                        <button
                            onClick={() => setCurrentPage(page)}
                            key={index}
                            className={page === currentPage ? "isActive" : ""}
                        >
                            {page}
                        </button>
                    );
                })}
            </div>
            <Footer />
        </>
    );
}

export default Home;
