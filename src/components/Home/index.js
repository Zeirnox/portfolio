import { useState } from 'react';
import LogoTitle from '../../assets/images/J1.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArr = ['a', 'm', 'e', 's,']
    const jobArr = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>Hello,<br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters letterClass={letterClass}
                            strArr={nameArr}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArr={jobArr}
                            idx={19}
                        />
                    </h1>
                    <h2>HTML / CSS / Javascript</h2>
                </div>
            </div>
        </>
    )
}

export default Home