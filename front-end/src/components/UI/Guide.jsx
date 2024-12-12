import React from "react";
import "./Guide.css"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function Guide({ guide_element, index }) {

    const navigate = useNavigate()

    function jump_to_timings_set(gameId, guideId) {
        navigate(`/guides/${gameId}/${guideId}`)
    }
    return (
        <div className="guide-element" key={guide_element.id}>
            <span className="guide-row-item">id:{index}</span>
            <span className="guide-row-item">guide name:{guide_element.set_name}</span>
            <span className="guide-row-item">creator:{guide_element.creator}</span>
            <span className="guide-row-item">creator:{guide_element.url_to_pb}</span>
            <button className="guide-row-item" onClick={() => jump_to_timings_set(guide_element.fk_game_id, guide_element.id)}>show guide</button>
        </div>

    );
}

export default Guide;
