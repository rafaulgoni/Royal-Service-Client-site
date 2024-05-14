import { Helmet } from "react-helmet-async";
import { FaArrowRight, FaMapLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";


const Details = () => {
    const data = useLoaderData()
    return (
        <div>
            <div className="container mx-auto mt-20 mb-20">
            <Helmet>
                <title>Royal Service | Service Details</title>
            </Helmet>
                <div className='w-full'>
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img data-aos="zoom-in" data-aos-duration="1500" className='w-96 h-96' src={data.image} alt="Album" /></figure>
                        <div className="card-body">
                            <div className="flex justify-between">
                                <div className="flex items-center space-x-2">
                                    <img src={data.providerImage} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
                                    <div className="-space-y-1">
                                        <h2 className="text-sm font-semibold leading-none">{data.providerName}</h2>
                                        <span className="inline-block text-xs leading-none dark:text-gray-600">Full time available</span>
                                    </div>
                                </div>
                                <div className="card-actions">
                                    <Link to={'/allService'} data-aos="zoom-in" data-aos-duration="2500" className="btn bg-[#F9A51A] w-full btn-sm"><FaArrowRight /></Link>
                                </div>
                            </div>
                            <hr className="border-dashed" />
                            <h2 data-aos="fade-left" data-aos-duration="2200" className="card-title">{data.name}</h2>
                            <p data-aos="fade-left" data-aos-duration="2400">{data.description}</p>
                            <hr className="border-dashed" />
                            <div className=' flex justify-around'>
                                <p data-aos="fade-left" data-aos-duration="1800" className='text-[#F9A51A]'>Price :{data.price}</p>
                                <p data-aos="fade-left" data-aos-duration="2000" className='text-[#F9A51A] flex gap-1 items-center'><FaMapLocationDot></FaMapLocationDot>{data.Area}</p>
                            </div>
                            <div className="card-actions">
                                <Link to='/' data-aos="zoom-in" data-aos-duration="2500" className="btn bg-[#F9A51A] w-full btn-sm">Book now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;