import React, { useState, useEffect } from 'react'
import Sound from 'react-sound'
// import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

function Soundcard(props) {
    const { audioSrc, imgSrc } = props
    console.log(audioSrc, imgSrc)
    const [isPaused, setIsPaused] = useState(true)
    const [volume, setVolume] = useState(50)

    const handleClick = () => {
        if (isPaused) {
            setIsPaused(false)
        } else {
            setIsPaused(true)
        }

    }

    return (
        <div className='SoundCard'>
            <img src={process.env.PUBLIC_URL + imgSrc} style={{ width: '100px', height: '100px', opacity: isPaused ? 0.5 : 1.0 }} alt="click to hear sound" onClick={handleClick} />
            {!isPaused &&
                <Sound
                    volume={volume}
                    url={process.env.PUBLIC_URL + audioSrc}
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={0}
                    loop
                />
            }
            <RangeSlider
                size='sm'
                value={volume}
                tooltip='off'
                tooltipPlacement='top'
                onChange={changeEvent => {
                    setVolume(changeEvent.target.value)
                }}
            />
        </div>
    )
}

export default Soundcard
