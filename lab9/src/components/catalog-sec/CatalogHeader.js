import React, {useEffect, useState} from 'react';
import FilterBlock from './FilterBlock';
import {getFilteredAirplanes} from "../../services/apiService";

const CatalogHeader = (props) => {
    const [open, setOpen] = useState(false);
    const [filteredAirplanes, setFilteredAirplanes] = useState(props.data);
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

    async function submitFilters() {
        const {price, pass, author} = filterObject;
        if (price < 0) {
            alert('Minus value')
        }
        let filteredResult = null;
        await getFilteredAirplanes(filterObject)
            .then(res => {
                filteredResult = res;
            });
        if (filteredResult.length === 0) {
            alert('NotFound Airplane by filter');
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