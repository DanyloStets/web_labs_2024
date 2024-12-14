import './css/AirplanePage.css'
import {useLocation} from "react-router-dom";
import AirplanePageHeader from "./AirplanePageHeader";
import AirplaneMainContent from "./AirplaneMainContent";
import BuyButton from "./BuyButton";
import {useState} from "react";

import image777 from "../../img/777.jpeg"
import image747 from "../../img/747.jpg"
import image737 from "../../img/737.jpg"
import image787 from "../../img/787.jpg"

const AirplanePage = () => {
    const [initialAirplanes , setInitialAirplanes] = useState([
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
    ]);
    const route = useLocation();
    const AirplaneId = parseInt(route.search.substring(4, 5));
    const AirplaneData = initialAirplanes.find(e => e.id === AirplaneId)

    return (
        <div className={'Airplane-page-wrapper'}>
            <AirplanePageHeader/>
            <AirplaneMainContent AirplaneData={AirplaneData}/>
            <BuyButton price={AirplaneData.priceInUah}/>
        </div>
    )
}

export default AirplanePage