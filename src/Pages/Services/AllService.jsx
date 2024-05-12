import { useEffect, useState } from "react";
import CardService from './CardService';


const AllService = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/card')
            .then(res => res.json())
            .then(data => {
                setCard(data)
            })
    }, [])
    return (
        <div className="container mx-auto mt-10 mb-10">
            <form className="mb-5">
                <label className="input input-bordered flex items-center gap-2 max-w-sm">
                    <input type="text" className="grow " placeholder="Search" />
                    <span className="btn btn-sm bg-[#F9A51A]">Search</span>
                </label>
            </form>
            <div className="grid gap-8">
                {
                    card.map(car => <CardService
                        key={car._id}
                        cards={car}
                    ></CardService>)
                }
            </div>
        </div>
    );
};

export default AllService;