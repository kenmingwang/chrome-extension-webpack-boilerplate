import ReactJkMusicPlayer from 'react-jinke-music-player'
import React from "react";
import { hot } from "react-hot-loader";

export class Player {
    constructor(props) {
        super(props)
        this.audio = {},
        this.state = {
            unmount: false,
            params: {
                ...options,
                getAudioInstance: (audio) => {
                    this.audio = audio
                },
            },
        }
    }
}

export const Player = function()