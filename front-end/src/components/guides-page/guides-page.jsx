import React from 'react'
import { useEffect, useMemo, useState } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { getGuidesAllAction } from '../../services/actions/guides-actions/guides-all-action';
import { getGuidesGameAction } from '../../services/actions/guides-actions/guides-game-action';
import GuidesElement from '../GuidesElement';
//router
import { redirect, useNavigate, useParams } from 'react-router';
import { apiName } from '../../services/configs/params';

export default function GuidesPage() {
    const BaseURL = `http://${apiName}:80/api`
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { gameAlias } = useParams()

    const {
        timingsAllFetching,
        timingsAllSuccessFetching,
        timingsAllFailedFetching,
        guidesAllList }
        = useSelector(state => state.guidesAll);

    const {
        guidesGameFetching,
        guidesGameSuccessFetching,
        guidesGameFailedFetching,
        guidesGameList
    } = useSelector(state => state.guidesGame)

    useEffect(() => {
        if (gameAlias) {
            dispatch(getGuidesGameAction(BaseURL, { id: gameAlias }))
        }
        else {
            dispatch(getGuidesAllAction(BaseURL))
        }
    }, [])

    const sorted_guides = useMemo(() => {
        //фильтруем только гайды в рейндже от плейхэда
        return guidesAllList.filter(guide_element =>
            true
        )
    }, [])



    const getCurrentElement = () => {
        if (gameAlias) {
            if (guidesGameList.length == 0 && guidesGameSuccessFetching) {
                navigate("/home", { replace: true })
            }
            return (
                <>
                    <p>
                        {`Гайды по игре ${gameAlias}`}
                    </p>
                    <div>
                        {
                            guidesGameFetching ? <p>анимация загрузки</p> :
                                guidesGameFailedFetching ? <p>при загрузке произошла ошибка, повторит позже </p> :
                                    (<GuidesElement
                                        sorted_guides={guidesGameList}
                                    />)
                        }
                    </div>
                </>

            )
        }
        else {
            return (
                <>
                    <p> "Все существующие гайды"
                    </p>
                    <div>
                        <GuidesElement
                            sorted_guides={guidesAllList}
                        />
                    </div>
                </>
            )
        }
    }

    return (getCurrentElement())
}
