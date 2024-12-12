import React from 'react'
import Guide from './UI/Guide'
import "./styles/GuidesList.css"
import { useState, useMemo } from 'react'

export default function GuidesElement({ sorted_guides }) {

    const [nameFilter, setNameFilter] = useState('')


    const filterElements = (value) => {
        setNameFilter(value)
    }

    const filteredData = useMemo(() => {
        //if (!nameFilter.trim()) return sorted_games;
        return sorted_guides.filter(element =>
            element.set_name.toLowerCase().includes(nameFilter.toLowerCase())
        );
    }, [nameFilter, sorted_guides]);




    return (

        <>
            <input type="text"
                placeholder="Filter..."
                value={nameFilter}
                onChange={(e) => filterElements(e.target.value)}
            />
            <div className="guides-containeer">
                {filteredData.map((guide_element, index) =>
                    <Guide guide_element={guide_element}
                        index={index}
                    />
                )
                }
            </div>
        </>


    )
}