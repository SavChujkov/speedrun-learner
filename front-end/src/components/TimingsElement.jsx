import React from "react";
import Timing from "./UI/Timing";
import "./styles/TimingsList.css"
import { useState, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux";


function TimingsElement({ timings_in_range }) {

    const [nameFilter, setNameFilter] = useState('')

    const filterElements = (value) => {
        setNameFilter(value)
    }

    const filteredData = useMemo(() => {
        //if (!nameFilter.trim()) return sorted_games;
        return timings_in_range.filter(element =>
            element.timing_name.toLowerCase().includes(nameFilter.toLowerCase())
        );
    }, [nameFilter, timings_in_range]);


    return (
        <>
            <input type="text"
                placeholder="Filter..."
                value={nameFilter}
                onChange={(e) => filterElements(e.target.value)}
            />
            <div className="timings-containeer">
                {filteredData.map((timing_element, index) =>
                    <Timing timing_element={timing_element}
                        index={index}
                    />
                )
                }
            </div>

        </>

    );
}

export default TimingsElement;
