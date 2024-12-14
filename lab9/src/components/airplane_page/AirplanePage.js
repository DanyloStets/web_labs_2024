import './css/AirplanePage.css'
import {useLocation} from "react-router-dom";
import AirplanePageHeader from "./AirplanePageHeader";
import AirplaneMainContent from "./AirplaneMainContent";
import BuyButton from "./BuyButton";
import {useEffect, useState} from "react";
import {getAllAirplanesRequest} from "../../services/apiService";
import FancyLoader from "../utils-component/FancyLoader";

const AirplanePage = () => {
    const [initialAirplanes, setInitialAirplanes] = useState([]);
    const route = useLocation();
    const airplaneId = parseInt(route.search.substring(4, 5));
    const airplaneData = initialAirplanes.find(e => e.id === airplaneId)

    useEffect(() => {
        getAllAirplanesRequest()
            .then(resp => setInitialAirplanes(resp))
    }, [])

    return (
        <div className={'airplane-page-wrapper'}>
            {initialAirplanes.length === 0 ? <FancyLoader/> : (
                <>
                    <AirplanePageHeader/>
                    <AirplaneMainContent aiprlaneData={airplaneData}/>
                    <BuyButton price={airplaneData.priceInUah}/>
                </>
            )}
        </div>
    )
}

export default AirplanePage;