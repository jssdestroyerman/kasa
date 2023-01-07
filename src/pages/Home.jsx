import Header from "../components/Header";
import HomeCard from "../components/HomeCard";
import Footer from "../components/Footer";
import homeBanner from "../assets/homeBanner.jpg";

function Home() {
    return (
        <>
            <Header />
            <div className="homeBanner">
                <img src={homeBanner} alt="bannière" />
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <HomeCard />
            <Footer />
        </>
    );
}

export default Home;
