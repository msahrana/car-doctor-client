import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices] = useState([])
    const [asc, setAsc] = useState(true)

    useEffect(()=>{
        fetch(`https://car-doctor-server-wine-theta.vercel.app/services?sort=${asc ? 'asc' : 'dsc'}&search=${'search'}`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[asc])

    const handleSearch = e => {
        e.preventDefault()
        const searchText = e.target.search.value
        console.log(searchText)

    }

    return (
        <div className="py-5">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-[#FF3811]">Services</h2>
                <h1 className="text-5xl font-bold py-5">Our Service Area</h1>
                <p className="">The majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable. </p>
                <form onSubmit={handleSearch}>
                    <input className="border-2" type="text" name="search" id="" />
                    <input type="submit" value="Search" className="btn btn-sm my-4 bg-[#FF3811]"/>
                </form>
                <button onClick={()=> setAsc(!asc)} className="btn bg-[#FF3811]">
                    {asc ? 'Price : High to Low' : "Price : Low to High"}
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {services.map(service => <ServicesCard 
                key={service._id} service={service}></ServicesCard>)}
            </div>
            <div className="card-actions justify-center">
                <button className="btn btn-outline btn-secondary my-12">More Services</button>
            </div>
        </div>
    );
};

export default Services;