import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className="py-5">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-[#FF3811]">Services</h2>
                <h1 className="text-5xl font-bold py-5">Our Service Area</h1>
                <p className="">The majority have suffered alteration in some form, by injected humour, or randomized <br />
                    words which do not look even slightly believable. </p>
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