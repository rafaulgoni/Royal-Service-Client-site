import About from "../../Components/About";
import Banner from "../../Components/Banner";
import Feature from "../../Components/Feature";
import SixCard from "../../Components/SixCard";
import Team from "../../Components/Team";


const Home = () => {
    return (
        <div>
            <div className="mt-10 mb-10">
                <Banner></Banner>
            </div>
            <div>
                <SixCard></SixCard>
            </div>
            <div className="mb-20" style={{
                    "border-radius": "88px 88px 0px 0px"
                    , "border-top": "2px solid var(--primary-700, #F9A51A)"
                }}>
                <Feature></Feature>
            </div>
            <div>
                <Team></Team>
            </div>
            <div className="mb-16">
                <About></About>
            </div>
        </div>
    );
};

export default Home;