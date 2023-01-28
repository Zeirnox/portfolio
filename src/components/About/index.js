import './index.scss'
import {useState} from 'react'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {

    const [letterClass] = useState('text-animate');

    return ( 
    <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArr={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={5}
                    />
                </h1>
                <h2>   Ad consectetur aliqua mollit ipsum duis tempor. Nisi excepteur incididunt magna fugiat id occaecat nisi aute dolore nostrud amet. Duis duis sint consectetur ipsum pariatur laborum exercitation dolor adipisicing deserunt. Ut in elit aliqua ad eiusmod exercitation sint excepteur sint. Laborum voluptate occaecat cillum ullamco exercitation aliquip tempor Lorem.
                </h2>
                <h2>
                        Deserunt Lorem ut ut excepteur. Lorem sint commodo Lorem ut ullamco incididunt. Esse mollit esse veniam non ad proident ex deserunt ullamco laborum consequat consequat dolor. Voluptate excepteur nostrud deserunt est sunt elit eiusmod id ex labore velit tempor cupidatat ea. Irure qui eiusmod aliquip et ut anim incididunt esse dolor exercitation qui. Consectetur eiusmod eu aliquip sit quis. Mollit ipsum aliqua mollit nulla cillum dolor ipsum anim in nulla esse exercitation reprehenderit Lorem.
                </h2>
            </div>
        </div>
    </>
    )
}

export default About