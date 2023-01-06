import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <h1>
                K
                <img src={require("../assets/homeLogo.png")} alt="logo kasa" />
                sa
            </h1>

            <nav>
                <ul>
                    <NavLink
                        to={"/"}
                        className={(homePage) =>
                            homePage.isActive ? "navIsActive" : ""
                        }
                    >
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink
                        to={"/about"}
                        className={(aboutPage) =>
                            aboutPage.isActive ? "navIsActive" : ""
                        }
                    >
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
