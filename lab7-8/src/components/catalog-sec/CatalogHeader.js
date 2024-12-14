import React, {useState} from 'react';
import FilterBlock from './FilterBlock';

const CatalogHeader = (props) => {
    const [open, setOpen] = useState(false);
    const [filteredAirplane, setFilteredAirplanes] = useState(props.data);
    const [filterObject, setFilterObject] = useState({
        'price': '',
        'pass': '',
        'author': '',
    });

    function openFilter() {
        setOpen(!open);
        setFilterObject({'price': '', 'pass': '', 'author': ''});
    }

    function clearFilter() {
        props.clearFilters(true);
        setFilterObject({'price': '', 'pass': '', 'author': ''});
    }

    function readInput(type, event) {
        setFilterObject({
            ...filterObject,
            [type]: event.target.value,
        });
    }

    function submitFilters() {
        const {price, pass, author} = filterObject;
        if (price < 0) {
            alert('Minus value')
        }

        let filteredResult = props.data.filter((airplane) =>
            (!price || airplane.priceInUah === parseFloat(price)) &&
            (!pass || airplane.countOfPass === parseInt(pass)) &&
            (!author || (airplane.author && airplane.author.toLowerCase().includes(author.toLowerCase())))
        );

        if (filteredResult.length === 0) {
            alert('Airplane not found');
            return;
        }

        setFilteredAirplanes(filteredResult);
        props.sendFilterUp(filteredResult);
    }

    return (
        <div className={'catalog-header'}>
            <h2 className={'title'}> Full catalog </h2>
            <div className={'filter-wrapper'}>
                <FilterBlock
                    open={open}
                    filterObject={filterObject}
                    clearFilter={clearFilter}
                    readInput={readInput}
                    submitFilters={submitFilters}
                />
                <div onClick={openFilter} className={'filter-icon'}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default CatalogHeader;