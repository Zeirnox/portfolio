import { useState } from 'react';
import LogoTitle from '../../assets/images/J1.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArr = ['a', 'm', 'e', 's,']
    const jobArr = ['a', ' ','w', 'e', 'b', ' ']
    const jobArrL = ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>Hello,<br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt="J" />
                        <AnimatedLetters letterClass={letterClass}
                            strArr={nameArr}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArr={jobArr}
                            idx={14}
                        />
                        <AnimatedLetters className="jobL" letterClass={letterClass} 
                            strArr={jobArrL}
                            idx={20}
                        />
                    </h1>
                    <h2>HTML / CSS / Javascript</h2>
                </div>
            </div>
        </>
    )
}

export default Home