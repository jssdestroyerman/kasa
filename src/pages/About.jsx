import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutList from "../components/AboutList";
import aboutBanner from "../assets/aboutBanner.jpg";

const aboutData = [
    {
        name: "Fiabilité",
        content:
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
        id: 1,
    },
    {
        name: "Respect",
        content:
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        id: 2,
    },
    {
        name: "Service",
        content:
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        id: 3,
    },
    {
        name: "Sécurité",
        content:
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        id: 4,
    },
];

function About() {
    return (
        <>
            <Header />
            <div className="aboutBanner">
                <img src={aboutBanner} alt="bannière montagne" />
            </div>
            <ul>
                {aboutData.map((data) => {
                    return (
                        <AboutList
                            name={data.name}
                            content={data.content}
                            key={data.id}
                        />
                    );
                })}
            </ul>
            <Footer />
        </>
    );
}

export default About;
