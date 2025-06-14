import React from 'react'

function TypeFilter({ types, selectedType, onTypeChange }) {
    return (
        <div className="type-filter">
            <h2 className="filter-title">Filter by Type</h2>
            <div className="type-filter-select">
                <select
                    value={selectedType || ''}
                    onChange={(e) => onTypeChange(e.target.value || null)}
                    className="type-select"
                >
                    <option value="">All Types</option>
                    {types.map(type => (
                        <option key={type} value={type}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default TypeFilter
