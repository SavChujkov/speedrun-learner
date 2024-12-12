import React from 'react'
import { useState, useMemo, } from 'react';
import Game from "./UI/Game";
import "./styles/GamesList.css"


export default function TimingsElement({ sorted_games }) {
    console.log(sorted_games, "this is sorted games")


    const [nameFilter, setNameFilter] = useState('')


    const filterElements = (value) => {
        setNameFilter(value)
    }

    const filteredData = useMemo(() => {
        //if (!nameFilter.trim()) return sorted_games;
        return sorted_games.filter(element =>
            element.game_name.toLowerCase().includes(nameFilter.toLowerCase())
        );
    }, [nameFilter, sorted_games]);


    return (

        <>
            <input type="text"
                placeholder="Filter..."
                value={nameFilter}
                onChange={(e) => filterElements(e.target.value)}
            />
            <div className="guides-containeer">
                {filteredData.map((game_element, index) =>
                    <Game game_element={game_element}
                        index={index}
                    />
                )
                }
            </div>
        </>

    )
}
