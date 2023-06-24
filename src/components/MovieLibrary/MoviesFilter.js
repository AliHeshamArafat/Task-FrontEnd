import React from "react";

const MoviesFilter = (props) => {
    const filterHandler = (event) => {
        props.onChangeFilter(event.target.value)
    };
    return (
        <div>
            <div>
                <label>Filter by Name</label>
                
            </div>
        </div>
    );
};