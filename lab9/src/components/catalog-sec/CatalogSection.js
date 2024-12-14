import './css/CatalogSection.css'
import CatalogAirCard from "./CatalogAirCard";
import CatalogHeader from "./CatalogHeader";
import {useEffect, useState} from "react";
import {getAllAirplanesRequest} from "../../services/apiService";
import FancyLoader from "../utils-component/FancyLoader";

const CatalogSection = (props) => {
    const [initialAirplanes, setInitialAirplanes] = useState([]);
    const [fetchedAirplanes, setFetchedAirplanes] = useState(initialAirplanes);
    const [filteredAirplanes, setFilteredAirplanes] = useState([]);
    const [initialFilteredAirplanes, setInitialFilteredAirplanes] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getAllAirplanesRequest()
            .then(resp => {
                setInitialAirplanes(resp)
                setFetchedAirplanes(resp)
                setIsLoading(false)
            })
    }, [])

    function handleFilteredAirplanes(airplanes) {
        setFilteredAirplanes(airplanes)
        setInitialFilteredAirplanes(airplanes)
        setIsFiltered(true)
    }

    function showNotFilteredData(clear = false) {
        if (clear) {
            setFilteredAirplanes([])
            setInitialFilteredAirplanes([])
            setIsFiltered(false)
        }
    }

    useEffect(() => {
        if (props.title === '') {
            if (isFiltered) {
                setFetchedAirplanes(initialFilteredAirplanes);
            } else {
                setFetchedAirplanes(initialAirplanes);
                setIsFiltered(false)
            }
        } else {
            const filterByTitle = isFiltered
                ? initialFilteredAirplanes.filter(airplane => airplane.title.toLowerCase().trim().includes(props.title.toLowerCase().trim()))
                : initialAirplanes.filter(airplane => airplane.title.toLowerCase().trim().includes(props.title.toLowerCase().trim()));
            if (isFiltered) {
                setFilteredAirplanes(filterByTitle);
            } else {
                setFetchedAirplanes(filterByTitle);
            }
        }
    }, [props.title, isFiltered]);

    return (
        <div className={'airplanes-container'}>
            <CatalogHeader
                sendFilterUp={handleFilteredAirplanes}
                clearFilters={showNotFilteredData}
                title={props.title}
                data={initialAirplanes}/>
            <div className={'catalog'}>
                {<FancyLoader/> ? isLoading : "" }
                {
                    (filteredAirplanes.length !== 0 ?
                        filteredAirplanes : fetchedAirplanes).map(airplane => (
                        <CatalogAirCard
                            id={airplane.id}
                            key={airplane.id}
                            title={airplane.title}
                            author={airplane.author}
                            priceInUah={airplane.priceInUah}
                            countOfPass={airplane.countOfPass}
                            image={airplane.image}
                        />
                    ))

                }
            </div>
        </div>
    )
}

export default CatalogSection