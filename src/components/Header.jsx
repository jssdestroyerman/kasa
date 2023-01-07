import { NavLink } from "react-router-dom";
import homeLogo from "../assets/homeLogoSalmon.svg";

function Header() {
    return (
        <div className="header">
            <h1>
                K
                <img src={homeLogo} alt="logo kasa" />
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
