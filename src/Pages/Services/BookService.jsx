
import { useLoaderData } from 'react-router-dom';


const BookService = () => {
    const data = useLoaderData()
    return (
        <div className="container mx-auto mt-10 mb-10">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Provider Name</th>
                            <th>Price</th>
                            <th>Area</th>
                            <th>Booked</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data.map(d => <tr key={d._id}>
                                <th>

                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={d.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{d.name}</div>
                                            <div className="text-sm opacity-50">whole Bangladesh</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {d.providerName}
                                </td>
                                <td>
                                    {d.price}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Varies by service/price</span>
                                </td>
                                <td>{d.Area}</td>
                                <th>
                                    <button className="btn btn-sm text-[#F9A51A] font-bold ">{d.status}</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default BookService;