import React from 'react';
import './css/CatalogHeader.css'
const FilterBlock = ({open, filterObject, clearFilter, readInput, submitFilters}) => {
    return (
        <div className={open ? 'filter-block' : 'filter-block hidden-element'}>
            <button className={'clear-filters'} type={'button'} onClick={clearFilter}>
                <span></span>
                <span></span>
            </button>
            <input
                type="number"
                min={0}
                value={filterObject['price']}
                onChange={(event) => {
                    readInput('price', event);
                }}
                placeholder={'Price'}
            />
            <input
                type="number"
                min={0}
                value={filterObject['pass']}
                onChange={(event) => {
                    readInput('pass', event);
                }}
                placeholder={'Count of pass'}
            />
            <input
                type={'text'}
                value={filterObject['author']}
                onChange={(event) => {
                    readInput('author', event);
                }}
                placeholder={'author'}
            />
            <button type={'button'} className={'apply-filters'} onClick={submitFilters}>
                Apply
            </button>
        </div>
    );
};

export default FilterBlock;