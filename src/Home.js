import React from 'react'
import Soundcard from './Soundcard'

function Home() {
    const audioSrcs = [
        "/sounds/fire.mp3",
        "/sounds/birds.mp3",
        "/sounds/ocean_waves.mp3",
        "/sounds/raining.mp3",
        "/sounds/thunder.mp3",
        "/sounds/night.mp3"
    ]
    const imgSrcs = [
        "/icons/fire.png",
        "/icons/bird.png",
        "/icons/waves.png",
        "/icons/rain.png",
        "/icons/thunder.png",
        "/icons/night.png"
    ]

    const Sounds =
        audioSrcs.map((audio, i) =>
            <Soundcard audioSrc={audio} imgSrc={imgSrcs[i]} />
        )

    return (
        <div>
            <h1>White Noise</h1>
            <div className='Sounds'>
                {Sounds}
            </div>
        </div>
    )
}

export default Home
