import React from "react";
import "./Timing.css"
import { useSelector, useDispatch } from "react-redux";

function Timing({ timing_element, index }) {

    const dispatch = useDispatch()

    function jump_to_timing(timing_timing) {
        dispatch({ type: "PLAYER_TIMING_CHANGE_INIT", seek_timing: timing_timing })
    }

    return (
        <div className="timing-element" key={timing_element.id}>
            <span className="timing-row-item">id:{index}</span>
            <span className="timing-row-item">at {timing_element.timing}sec</span>
            <span className="timing-row-item">name:{timing_element.timing_name}</span>
            <button className="timing-row-item" onClick={() => jump_to_timing(timing_element.timing)}>show timing at pb</button>
        </div>

    );
}

export default Timing;
