import { Link } from "react-router-dom";
import { FaMapLocationDot, FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ services }) => {

    return (
        <div className="">
            <div className='w-full'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img data-aos="zoom-in" data-aos-duration="1500" className='w-96 h-60' src={services.image_url} alt="Album" /></figure>
                    <div className="card-body">
                        <div className="flex justify-between">
                            <div className="flex items-center space-x-2">
                                <img src={services.provider_image} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
                                <div className="-space-y-1">
                                    <h2 className="text-sm font-semibold leading-none">{services.provider_name}</h2>
                                    <span className="inline-block text-xs leading-none dark:text-gray-600">Full time available</span>
                                </div>
                            </div>
                            <div className="card-actions">
                                <Link to={'/allService'} data-aos="zoom-in" data-aos-duration="2500" className="btn bg-[#F9A51A] w-full btn-sm"><FaArrowRight /></Link>
                            </div>
                        </div>
                        <hr className="border-dashed" />
                        <h2 data-aos="fade-left" data-aos-duration="2200" className="card-title">{services.service_name}</h2>
                        <p data-aos="fade-left" data-aos-duration="2400">{services.description}</p>
                        <hr className="border-dashed" />
                        <div className=' flex justify-around'>
                            <p data-aos="fade-left" data-aos-duration="1800" className='text-[#F9A51A]'>Price :{services.price}</p>
                            <p data-aos="fade-left" data-aos-duration="2000" className='text-[#F9A51A] flex gap-1 items-center'><FaMapLocationDot></FaMapLocationDot>Whole Bangladesh</p>
                        </div>
                        <div className="card-actions">
                            <Link to={`/serviceDetails/${services._id}`} data-aos="zoom-in" data-aos-duration="2500" className="btn bg-[#F9A51A] w-full btn-sm">View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

