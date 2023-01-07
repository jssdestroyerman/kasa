import Header from "../components/Header";
import aboutBanner from "../assets/aboutBanner.jpg";
import AboutCollapse from "../components/AboutCollapse";
import Footer from "../components/Footer";

function About() {
    return (
        <>
            <Header />
            <div className="aboutBanner">
                <img src={aboutBanner} alt="bannière montagne" />
            </div>
            <AboutCollapse />
            <Footer />
        </>
    );
}

export default About;
