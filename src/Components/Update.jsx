import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
    const card = useLoaderData()
    const navigate = useNavigate()

    const { name, description, price, Area, image, _id } = card
    
    const handleUpdateServices =event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const Area = form.Area.value;
        const description = form.description.value;
        const price = form.price.value;
        const image = form.image.value;
       const servise = { name, Area, description, price, image }

        fetch(`http://localhost:5000/card/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(servise)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Successfully update service!')
                    navigate('/manageService')
                }
            })
    }
    
    return (
        <div className="bg-base-200 p-6 md:p-24 container mx-auto mt-10">
            {/* <Helmet>
                <title>Artful Abode | Add Craft</title>
            </Helmet> */}
            <h2 className="text-3xl font-extrabold">Add Service</h2>
            <form onSubmit={handleUpdateServices}>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Service Name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Service Area</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Area" defaultValue={Area} placeholder="Service Area" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Service description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={description} placeholder="Service description" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image URL of the Service</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={image} name="image" placeholder="Image URL" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Service" className="btn btn-block font-bold bg-[#F9A51A]" />
            </form>
        </div>
    );
};

export default Update;