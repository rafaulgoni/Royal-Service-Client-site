

const Feature = () => {
    return (
        <div>
           <div className=''>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative mb-16 mt-6'>
                         <img src={'https://i.ibb.co/vzjkDfq/service.jpg'} className="w-3/4 rounded-lg shadow-2xl" />
                         <img src={'https://i.ibb.co/k4spkMj/services-400.jpg'} className="absolute w-1/2 right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                    </div>
                   
                    <div className='lg:w-1/2 md:mt-20'>
                        <p className='text-xl font-bold text-[#F9A51A]'>About Us</p>
                        <h1 className="text-5xl font-bold">WAffordable Price For All Servicing</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or random words which do not look even slightly believable. </p>
                        <p className="py-6">the majority have suffered alteration in some form, by injected humour, or random words which don ot look even slightly believable.</p>
                        <button className="btn bg-[#F9A51A] text-white">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Feature;