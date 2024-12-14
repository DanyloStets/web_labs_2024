import './css/AirplanePage.css'
import {useLocation} from "react-router-dom";
import AirplanePageHeader from "./AirplanePageHeader";
import AirplaneMainContent from "./AirplaneMainContent";
import BuyButton from "./BuyButton";
import {useEffect, useState} from "react";
import {getAirplaneById} from "../../services/apiService.js";
import FancyLoader from "../utils-component/FancyLoader";

const AirplanePage = () => {
    const route = useLocation();
    const [airplaneData , setAirplaneData] = useState();
    const airplaneId = parseInt(route.search.substring(4));

    useEffect(() => {
        getAirplaneById(airplaneId)
            .then(resp => {
                    setAirplaneData(resp)
                    console.log(airplaneData)
                }
            )
    }, [])

    return (
        <div className={'airplane-page-wrapper'}>
            {airplaneData == null ? <FancyLoader/> : (
                <>
                    <AirplanePageHeader/>
                    <AirplaneMainContent airplaneData={airplaneData}/>
                    <BuyButton airplaneData={airplaneData}/>
                </>
            )}
        </div>
    )
}

export default AirplanePage;
