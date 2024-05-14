import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const AddService = () => {
    const {user} =useContext(AuthContext)
    const navigate = useNavigate()

    const handleAddServices = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const Area = form.Area.value;
        const description = form.description.value;
        const price = form.price.value;
        const image = form.image.value;
        const status = 'pending'
        const providerEmail = user.email;
        const providerName =user.displayName
        const providerImage = user.photoURL

        const services = { name, Area, description, price, status, image, providerEmail, providerName, providerImage}

        // console.log(services);

        fetch('https://assignment11-royal-service.vercel.app/card',{
            method: "POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(services)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.insertedId){
                toast.success('Successfully add service!')
                  event.target.reset()
                  navigate('/manageService')
            }
        })
    }
    return (
        <div className="bg-base-200 p-6 md:p-24 container mx-auto mt-10">
           <Helmet>
                <title>Royal Service | Add Service</title>
            </Helmet>
            <h2 className="text-3xl font-extrabold">Add Service</h2>
            <form onSubmit={handleAddServices}>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Service Name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Service Area</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Area" placeholder="Service Area" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Service description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Service description" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="price" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image URL of the Service</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Service" className="btn btn-block font-bold bg-[#F9A51A]" />
            </form>
        </div>
    );
};

export default AddService;