import './scss/AirContainer.css'
import AirCard from "./AirCard";
import SectionHeader from "./SectionHeader";
import {useState} from "react";
import image777 from "../../img/777.jpeg"
import image747 from "../../img/747.jpg"
import image737 from "../../img/737.jpg"
import image787 from "../../img/787.jpg"

const AirContainer = () => {
    let fetchData = [
        {
            id: 1,
            countOfPass: 400,
            author: "USA",
            title: "Boeing 777",
            description: "",
            priceInUah: 75000,
            image: image777,
        },
        {
            id: 2,
            countOfPass: 300,
            author: "USA",
            title: "Boeing 737",
            description: "",
            priceInUah: 45000,
            image: image737
        },
        {
            id: 3,
            countOfPass: 320,
            author: "USA",
            title: "Boeing 747",
            description: "",
            priceInUah: 50000,
            image: image747
        },
        {
            id: 4,
            countOfPass: 450,
            author: "USA",
            title: "Boeing 787",
            description: "",
            priceInUah: 90000,
            image: image787
        }

    ];

    const [airplanes, setAirplanes] = useState(fetchData);

    return (
        <div className={'airplanes'}>
            <SectionHeader/>
            <div className="airplanes-container">
                {
                    airplanes.map(airplanes => (
                        <AirCard
                            key={airplanes.id}
                            author={airplanes.author}
                            title={airplanes.title}
                            image={airplanes.image}
                            priceInUah={airplanes.priceInUah}/>
                    ))
                }
            </div>
        </div>
    )
}

export default AirContainer