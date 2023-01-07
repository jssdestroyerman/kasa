import homeLogo from "../assets/homeLogoWhite.svg";

function Footer() {
    return (
        <div className="footer">
            <h3>
                K
                <img src={homeLogo} alt="logo kasa" />
                sa
            </h3>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;
