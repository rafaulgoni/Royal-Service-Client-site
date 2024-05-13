import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaMapLocationDot } from 'react-icons/fa6';

const ServiceToDo = () => {
    const [serviceData, setServiceData] = useState([])
    const handleButton = (status) => {
        fetch(`http://localhost:5000/cardToDo?status=${status}`)
            .then(res => res.json())
            .then(data => {
                if (data.status === "confirm") {
                    setServiceData('confirm')
                } else if (data.status === "pending") {
                    setServiceData('pending')
                }
                setServiceData(data)
            })

    }
    return (
        <div className="container mx-auto mt-10 mb-10">
            <div className="flex justify-end">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#F9A51A]">filter by <FaChevronDown /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-40">
                        <li><a onClick={() => handleButton('confirm')}>Confirm</a></li>
                        <li><a onClick={() => handleButton('pending')}>Pending</a></li>
                    </ul>
                </div>
            </div>
            <div className="space-y-8">
                {
                    serviceData.map(data => <div key={data._id} className="card lg:card-side bg-base-100 border">
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
                                <button className="font-bold text-[#F9A51A]">{data.status}</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ServiceToDo;