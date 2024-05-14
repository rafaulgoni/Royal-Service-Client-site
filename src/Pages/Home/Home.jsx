
import { Link, useLoaderData } from "react-router-dom";
import About from "../../Components/About";
import Banner from "../../Components/Banner";
import Feature from "../../Components/Feature";
import Team from "../../Components/Team";
import ServiceCard from "../../Components/ServiceCard";
import { Helmet } from 'react-helmet-async';



const Home = () => {
    const service = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>Royal Service | Home</title>
            </Helmet>
            <div className="mt-10 mb-10">
                <Banner></Banner>
            </div>
            <div className="container mx-auto mt-20 mb-14">
                <div className='border-l-4 border-[#F9A51A] mb-4'>
                    <div className='ml-2'>
                        <p className='text-[#F9A51A] font-bold'>Services</p>
                        <h1 className='text-4xl font-bold'>Our Services Ara</h1>
                        <p className='max-w-[600px]'>the majority have suffered alteration in some form, by injected humour, or random words which do not look even slightly believable.</p>
                    </div>
                </div>
                <div className=" grid md:grid-cols-2 gap-12">
                    {
                        service.map(ser => <ServiceCard
                            key={ser._id}
                            services={ser}
                        ></ServiceCard>)
                    }

                </div>
                <div className="text-center mt-5">
                    <Link to ='/allService' className="btn bg-[#F9A51A]">Show All</Link>
                </div>
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