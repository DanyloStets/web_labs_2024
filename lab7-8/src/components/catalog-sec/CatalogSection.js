import './css/CatalogSection.css'
import CatalogHeader from "./CatalogHeader";
import CatalogAirCard from "./CatalogAirCard";
import {useEffect, useState} from "react";
import image777 from "../../img/777.jpeg"
import image747 from "../../img/747.jpg"
import image737 from "../../img/737.jpg"
import image787 from "../../img/787.jpg"

let initialAirplanes = [
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
        author: "AMERIKA",
        title: "Boeing 737",
        description: "",
        priceInUah: 45000,
        image: image737
    },
    {
        id: 3,
        countOfPass: 320,
        author: "AMERIKA",
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

const CatalogSection = (props) => {
    const [fetchedAirplanes, setFetchedAirplanes] = useState(initialAirplanes);
    const [filteredAirplanes, setFilteredAirplanes] = useState([]);
    const [initialFilteredAirplanes, setInitialFilteredAirplanes] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false)

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
                : initialAirplanes.filter(airplanes => airplanes.title.toLowerCase().trim().includes(props.title.toLowerCase().trim()));
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