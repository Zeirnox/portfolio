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
                <h2>    Irure excepteur occaecat nostrud laborum officia eiusmod pariatur minim in velit Lorem sit amet id. Elit laborum dolore commodo labore enim proident aliqua. Enim est laboris Lorem ad dolore laborum voluptate occaecat esse nisi magna.
                </h2>
                <h2>
                        Laboris elit voluptate do aliqua proident laborum minim veniam. Reprehenderit consectetur dolor exercitation mollit officia incididunt non minim esse aute reprehenderit nostrud do sunt. Magna eiusmod aliqua id nulla dolore proident eiusmod eu. Ut nisi cupidatat officia reprehenderit ex esse aliqua commodo.
                </h2>
            </div>
        </div>
    </>
    )
}

export default About