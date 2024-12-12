import React from 'react'
import { useEffect, useMemo, useState } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { getGamesAllAction } from '../../services/actions/games-actions/games-all-action';
import GamesElement from '../GamesElement';
import { apiName } from '../../services/configs/params';

export default function GamesPage() {
    const BaseURL = `http://${apiName}:80/api`
    const dispatch = useDispatch()

    const {
        gamesAllFetching,
        gamesAllSuccessFetching,
        gamesAllFailedFetching,
        gamesAllList }
        = useSelector(state => state.gamesAll);

    console.log(gamesAllList, "this is game all")
    useEffect(() => {
        dispatch(getGamesAllAction(BaseURL))
    }, [])

    return (
        <div>
            {
                gamesAllFetching ? <p>анимация загрузки</p> :
                    gamesAllFailedFetching ? <p>при загрузке произошла ошибка, повторит позже </p> :
                        (<GamesElement
                            sorted_games={gamesAllList}
                        />)
            }

        </div>
    )
}
