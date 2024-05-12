
import { FaMapLocationDot } from 'react-icons/fa6';

const SingleCard = ({ data, handleBookingConfirm }) => {
    return (
        <div>
            <div className='w-full'>
                <div className="card lg:card-side bg-base-100 border">
                    <figure><img data-aos="zoom-in" data-aos-duration="1500" className='w-96 h-60' src={data.image} alt="Album" /></figure>
                    <div className="card-body">
                        <div className="">
                            <div className="flex items-center space-x-2">
                                <img src={data.providerImage} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
                                <div className="-space-y-1">
                                    <h2 className="text-sm font-semibold leading-none">{data.providerName}</h2>
                                    <span className="inline-block text-xs leading-none dark:text-gray-600">{data.providerEmail}</span>
                                </div>
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
                        <div className="card-actions flex justify-end">
                           {
                            data.status === 'confirm' ? <span className="font-bold text-[#F9A51A]">Book Confirm</span> :
                             <button onClick={() => handleBookingConfirm(data._id)} data-aos="zoom-in" data-aos-duration="2500" className="btn bg-[#F9A51A] btn-sm">Book Now</button>
                           }
                        </div>
                        {/* {
                            data.status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                                <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;