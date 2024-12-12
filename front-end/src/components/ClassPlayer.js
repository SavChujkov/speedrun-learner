import React, { Component } from "react";

import ReactPlayer from "react-player";

import { connect } from 'react-redux';



class PlayerEl extends Component {
    constructor(props) {
        super(props)
        this.controls = this.props.controls
        this.light = this.props.light
        this.muted = this.props.muted
        this.url = this.props.url
        this.played = this.props.played
        this.duration = this.props.duration
        this.ph_timing = this.props.ph_timing
    }

    //states controll
    PlayerStateSetter = (player_state) => {
        this.props.dispatch({
            type: "PLAYER_STATE_CHANGE",
            played: player_state.played,
        })
        this.props.dispatch({
            type: 'PLAYER_STATE_CHANGE',
            ph_timing: player_state.played * this.props.duration,
        });
    }

    SetPlayerReference = (player_object) => {
        //метод чтобы получить плеер текущего рендера, для выполнения с ним действий
        this.player = player_object
    }


    //useEffect плеера для разных состояния
    componentDidUpdate(prevProps, prevState) {
        // Проверяем, изменилось ли булевое состояние

        if (this.props.need_to_seek) {
            this.props.dispatch({
                type: "PLAYER_TIMING_CHANGE_SET",
            })
            this.player.seekTo(this.props.seek_timing, "seconds")
        }

        if (this.duration == 0) {
            //если дюрейшн не подсосался из  плеера, то обновить редакс хранилище

            this.props.dispatch({
                type: 'PLAYER_MAIN_SETTINGS_CHANGE',
                duration: this.player.getDuration()
            });
        }
    }
    render() {
        //а это из редакса
        const {
            url,
            played,
            controls,
            muted,
            loaded,
            ph_timing } = this.props

        return (
            <div className='player-wrapper'>
                <h1>Video progress: {ph_timing}</h1>
                <ReactPlayer
                    ref={this.SetPlayerReference}
                    url={url}
                    onProgress={this.PlayerStateSetter}
                    onDuration={this.DurationSetter}
                    controls={controls}
                    muted={muted}
                    playing={false}
                    played={played}
                    loaded={loaded}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    //связываем значения из редакса с классовым компонентом
    controls: state.playerMainSettings.controls,
    muted: state.playerMainSettings.muted,
    url: state.playerMainSettings.url,
    duration: state.playerMainSettings.duration,

    played: state.playerState.played,
    ph_timing: state.playerState.ph_timing,

    need_to_seek: state.playerTiming.need_to_seek,
    seek_timing: state.playerTiming.seek_timing
});



export default connect(mapStateToProps)(PlayerEl);