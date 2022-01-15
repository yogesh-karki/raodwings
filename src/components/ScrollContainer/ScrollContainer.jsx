import React, {useRef, useEffect} from 'react'

import './style.scss';

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const ScrollContainer = () => {
    const serviceData = [
        {   
            title: 'Total Care Services ',
            titleSpan: 'for your Bike ',
            text: 'We have experts of automobile to deliver excellence at your doorsteps. Reliable maintenance, reasonable price, quality assurance and customized care. Maintaining your Bike and timely servicing is our responsibility',
            img: './images/bike2.png'
        },
        {
            title: 'Easy Pick & Drop',
            titleSpan: 'Anyplace / Anytime',
            text: 'Your precious time shouldn’t be consumed for your two-wheeler maintenance. Either from home or office or even on your way, Road Wings users are hassle-free. One small buzz on your mobile app and Third wheel assistance are right there.',
            video: './video/video5.mp4'
        },
        
        {
            title: 'Road Wings ',
            titleSpan: 'Pacakge Options',
            text: 'For anything to operate and function optimally, it must be maintained regularly. Everything, from your microwaves to your vehicles, needs to be treated like royalty and serviced regularly. This is precisely why Annual Maintenance Contracts, or AMCs, are so prevalent and vital.',   
            video: './video/Untitled design.mp4'
        }

    ]
    
    const container = useRef()


    const count = (num) => {
        if(num < 10) {
            return("0" + num )
        }
        else return num
    }


    return (
        <section className="service-container" ref={container}>
        


            {
                serviceData.map((val,index)=> {
                    return(
                        <div className="content" key={index}>
                            <div className="text">
                                <div className="count">
                                    <span>{count(index + 1)}</span><span> / { count(serviceData.length)}</span>
                                </div>
                                <h2>{val.title} <span>{val.titleSpan}</span> </h2>
                                <p>{val.text}</p>
                            </div>

                            <div className="video">
                                {
                                    ( val.img ) 
                                    ? <picture><img src= {val.img} alt="" /> </picture>
                                    :   <video poster="" autoPlay="autoPlay" playsInline="playsInline" muted="muted" loop="loop">
                                            <source src={val.video} type="video/mp4" />
                                        </video> 
                                }

                                

                                
                            </div>
                        </div>
                        
                    )
                })
            }

        </section>
    )
}

export default ScrollContainer
