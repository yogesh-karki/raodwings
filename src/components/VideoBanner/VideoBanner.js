import React from 'react'
import PlayButton from '../Button/PlayButton';



import './style.scss';

const VideoBanner = () => {
    return (
        <section className="video-banner">
            <video className="video" poster="" autoPlay="autoPlay" playsInline="playsInline" muted="muted" loop="loop">
                <source src="./images/bannervideo.mp4" type="video/mp4" />
            </video>

            <div className="text">

                <h1>
                    JOY OF THE <span>Best RIDE</span>
                </h1>

                <p>
                    Riding a Motorcycle is Like an Art: Something You Do Because You Feel Something Inside
                </p>

                <PlayButton />
            </div>
        </section>
    )
}

export default VideoBanner
