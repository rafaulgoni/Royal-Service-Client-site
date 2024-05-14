import { useEffect, useState } from "react";
import CardService from './CardService';
import { Helmet } from "react-helmet-async";


const AllService = () => {
    const [search, setSearch] = useState('');
    const [card, setCard] = useState([])
   
    useEffect(() => {
        fetch(`https://assignment11-royal-service.vercel.app/cardAll?name=${search}`)
            .then(res => res.json())
            .then(data => {
                setCard(data)
            })
    }, [search])


    const handleSearch = e =>{
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText)
        // console.log(searchText);
    }
    return (
        <div className="container mx-auto mt-10 mb-10">
            <Helmet>
                <title>Royal Service | All Service </title>
            </Helmet>
            <form onSubmit={handleSearch} className="mb-5">
                <label className="input input-bordered flex items-center gap-2 max-w-sm">
                    <input type="text" name="search" className="grow " placeholder="Search" />
                    <button className="btn btn-sm bg-[#F9A51A]">Search</button>
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