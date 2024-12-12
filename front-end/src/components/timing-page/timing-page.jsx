import '../../App.css';
import TimingsElement from '../TimingsElement';
import PlayerEl from '../ClassPlayer';
import { useEffect, useMemo, useState } from 'react';
//router
import { useParams } from 'react-router';
import { Navigate, useNavigate } from 'react-router';
//redux
import { useDispatch, useSelector } from 'react-redux';
//timings related actions
import { getTimingsAllAction } from '../../services/actions/timings-actions/timings-all-action';
//import { getTimingsGuideAction } from './services/actions/timings-actions/timings-guide-action';
//import { addTimingAction } from './services/actions/timings-actions/timings-add-action';
import { getGuidesGameAction } from '../../services/actions/guides-actions/guides-game-action';
import { GET_TIMINGS_GUIDE_FLUSH, getTimingsGuideAction } from '../../services/actions/timings-actions/timings-guide-action';
import { apiName } from '../../services/configs/params';
function TimingPage() {
    const BaseURL = `http://${apiName}:80/api`
    const dispatch = useDispatch()
    //значения всех таймингов redux хранилища

    const { gameAlias, guideId } = useParams()

    const { sortedGuides, sortGuides } = useState([])

    const {
        timingsAllFetching,
        timingsAllSuccessFetching,
        timingsAllFailedFetching,
        timingsAllList }
        = useSelector(state => state.timingsAll);

    const {
        timingsGuideFetching,
        timingsGuideSuccessFetching,
        timingsGuideFailedFetching,
        timingsGuideList
    } = useSelector(state => state.timingsGuide)

    const {
        guidesGameFetching,
        guidesGameSuccessFetching,
        guidesGameFailedFetching,
        guidesGameList
    } = useSelector(state => state.guidesGame)

    const {
        played,
        ph_timing,
        ph_range
    } = useSelector(state => state.playerState)

    const navigate = useNavigate()

    //const {
    //  need_to_seek,
    //  seek_timing
    //} = useSelector(state => state.playerState)

    const getAllTimings = () => {
        //на скорое будущее
    }
    const getGuideTimings = () => {
        //на скорое будущее
    }

    const addTiming = () => {
        //на будущее
    }

    const addTimings = () => {
        //на будущее
    }

    const fetchDependentData = () => {
        //1 - fetch guides of game
        //2 - fetch guide with particular id

        //1-st phase 
        dispatch(getGuidesGameAction(BaseURL, { id: gameAlias }))
        console.log(guidesGameList, "this is guides of game ")
        const guideById = guidesGameList.find(function (guideElement) {
            return guideElement.id == guideId
        })
        if (!guideById) {
            console.log("navigated from not found guide")
            navigate('/home', { replace: true });
        }
        return
        //2-nd phase if no 404 error dropped
        dispatch(getTimingsGuideAction(BaseURL, { id: guideId }))

    }

    useEffect(() => {
        dispatch(getGuidesGameAction(BaseURL, { id: gameAlias }))
    }, [])

    useEffect(() => {
        //dispatch(getTimingsAllAction(BaseURL))
        //dispatch(getTimingsGuideAction(BaseURL, requestForm))
        if (guidesGameSuccessFetching) {
            dispatch(getTimingsGuideAction(BaseURL, { id: guideId }))
        }
        if (guidesGameFailedFetching) {
            navigate('/home', { replace: true });
        }
    }, [guidesGameSuccessFetching, guidesGameFailedFetching])


    const timings_in_range = useMemo(() => {
        //фильтруем только гайды в рейндже от плейхэда
        return timingsGuideList.filter(timing_element =>
            (timing_element.timing <= ph_timing + ph_range && timing_element.timing >= ph_timing)
            ||
            (timing_element.timing >= ph_timing - ph_range && timing_element.timing <= ph_timing)
        )
    }, [ph_timing])

    const getCurrentElement = () => {
        if (!timingsGuideFetching && !timingsGuideFailedFetching && !timingsGuideSuccessFetching) {
            return (<div>красивая анимация загрузки</div>)
        }
        else if (timingsGuideSuccessFetching) {
            return (
                <div>
                    <PlayerEl
                    />
                    <TimingsElement
                        timings_in_range={timings_in_range}
                    />
                </div>

            )
        }
        else if (timingsGuideFailedFetching) {
            //тут сделать так чтобы указывало что неправильно указан пароль логин
            //подсветка полей либо сверху оповещение
            dispatch({ type: GET_TIMINGS_GUIDE_FLUSH })
            return (<Navigate to="/home" replace={true}></Navigate>)
        }
        else {
            return (<div>красивая анимация загрузки</div>)
        }
    }

    //<PlayerElement ph_timing={video_playhead_timing} set_ph_timing={setVideoPlayheadTiming} />
    return (
        getCurrentElement()
    );
}

export default TimingPage;
