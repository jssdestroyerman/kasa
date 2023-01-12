import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import collapsedatabase from "../collapsedatabase.json";

function About() {
    const aboutData = collapsedatabase;
    return (
        <>
            <Header />
            <div className="aboutBanner"></div>
            <div className="aboutCollapse">
                <div className="collapse">
                    {aboutData.map((data) => {
                        return (
                            <Collapse
                                name={data.name}
                                content={data.content}
                                key={data.id}
                            />
                        );
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
