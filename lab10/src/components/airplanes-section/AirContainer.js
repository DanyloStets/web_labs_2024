import './scss/AirContainer.css'
import AirCard from "./AirCard";
import SectionHeader from "./SectionHeader";
import {useEffect, useState} from "react";
import {getAllAirplanesRequest} from "../../services/apiService";
import FancyLoader from "../utils-component/FancyLoader";


const AirplanesContainer = () => {
    const [fetchedAirplanes, setFetchedAirplanes] = useState([]);
    const [countOfShown, setCountOfShown] = useState(4);
    const [viewMore, setViewMore] = useState('View more')
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getAllAirplanesRequest().then((airplanes) => {
            setFetchedAirplanes(airplanes);
            setIsLoading(false);
        });
    }, []);

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
                {isLoading ? <FancyLoader/> : ''}
                {(Array.isArray(fetchedAirplanes) ? fetchedAirplanes : [])
                    .slice(0, countOfShown)
                    .map((airplanes) => (
                        <AirCard
                            key={airplanes.id}
                            author={airplanes.author}
                            title={airplanes.title}
                            image={airplanes.image}
                            priceInUah={airplanes.priceInUah}
                        />
                    ))}
            </div>
            <div className={'airplanes-footer'}>
                <button className={'view-more-btn'} onClick={viewMoreAirplanes}> {viewMore} </button>
            </div>
        </div>
    )
}

export default AirplanesContainer