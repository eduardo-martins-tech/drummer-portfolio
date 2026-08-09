import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Highlights from "../../components/Highlights/Highlights";
import Videos from "../../components/Videos/Videos";
import Footer from "../../components/Footer/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Highlights />
            <Videos />
            <Footer />
        </>
    );
}

export default Home;