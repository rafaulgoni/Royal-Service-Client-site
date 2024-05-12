import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageService = () => {
    const { user } = useContext(AuthContext)
    const [manage, setManage] = useState([])
    const url = `http://localhost:5000/card?providerEmail=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setManage(data)
            })
    }, [url])

    const handleDelete = _id => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
    
            fetch(`http://localhost:5000/card/${_id}`, {
              method: 'DELETE'
            })
              .then(res => res.json())
              .then(data => {
                if (data.deletedCount > 0) {
                  Swal.fire(
                    'Deleted!',
                    'Your service has been deleted.',
                    'success'
                  )
                  const remaining = manage.filter(cof => cof._id !== _id);
                  setManage(remaining);
                }
              })
    
          }
        })
      }
    return (
        <div className="container mx-auto mt-10 mb-10">
            <div className="grid md:grid-cols-3 gap-8">
                {
                    manage.map(man => <div key={man._id}><div className="card bg-base-100 shadow-xl">
                        <figure className="h-64"><img src={man.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {man.name}
                                <div className="badge bg-[#F9A51A]">NEW</div>
                            </h2>
                            <p>{man.subcategory}</p>
                            <div className='flex justify-around'>
                                <p className='text-[#F9A51A]'>Price: {man.price}</p>
                                <p className='flex items-center text-[#F9A51A]'>Area: {man.Area}</p>
                            </div>
                            <p className='text-black'>Description: {man.description}</p>
                            <div className="card-actions justify-end">
                                <div onClick={() => handleDelete(man._id)} className="btn btn-sm outline outline-red-600">Delate</div>
                                <Link to={`/update/${man._id}`} className="btn btn-sm outline outline-[#F9A51A]">Update</Link>
                            </div>
                            <hr className="border-dashed" />
                            <div className="flex items-center space-x-2">
                                <img src={man.providerImage} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
                                <div className="-space-y-1">
                                    <h2 className="text-sm font-semibold leading-none">{man.providerName}</h2>
                                    <span className="inline-block text-xs leading-none dark:text-gray-600">{man.providerEmail}</span>
                                </div>
                            </div>
                        </div>
                    </div></div>)
                }
            </div>
        </div>
    );
};

export default ManageService;