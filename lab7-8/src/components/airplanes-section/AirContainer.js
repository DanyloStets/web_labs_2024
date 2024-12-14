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
        },
        {
            id: 5,
            countOfPass: 400,
            author: "USA",
            title: "AMERIKA BUS 333",
            description: "",
            priceInUah: 750,
            image: image777,
        },
        {
            id: 6,
            countOfPass: 300,
            author: "USA",
            title: "Boeing 656",
            description: "",
            priceInUah: 450,
            image: image737
        },
        {
            id: 7,
            countOfPass: 320,
            author: "USA",
            title: "AMERIKA BUS 444",
            description: "",
            priceInUah: 500,
            image: image747
        },
        {
            id: 8,
            countOfPass: 450,
            author: "USA",
            title: "Boeing 676",
            description: "",
            priceInUah: 900,
            image: image787
        },

    ];

    const [countOfShown, setCountOfShown] = useState(4);
    const [viewMore, setViewMore] = useState('View more')

    function viewMoreAirplanes() {
        const newCount = countOfShown === 4 ? 8 : 4;
        const newLabel = countOfShown === 4 ? 'View less' : 'View more';
        setCountOfShown(newCount);
        setViewMore(newLabel);
    }


    return (
        <div className={'airplanes-container'}>
            <SectionHeader/>
            <div className="airplanes">
                {fetchData.slice(0, countOfShown).map((airplanes) => (
                    <AirCard
                        key={airplanes.id}
                        author={airplanes.author}
                        title={airplanes.title}
                        image={airplanes.image}
                        priceInUah={airplanes.priceInUah}/>
                ))}
            </div>
            <div className={'airplanes-footer'}>
                <button className={'view-more-btn'} onClick={viewMoreAirplanes}> {viewMore} </button>
            </div>
        </div>
    )
}

export default AirContainer