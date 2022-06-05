import './index.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import solarSystem from '../../assets/images/solarSystem.png'
import mondstadt from '../../assets/images/mondstadt.png'

const Projects = () => {

    const [letterClass] = useState('text-animate');

    return (
        <>
            <div className="container projects-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArr={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={5}
                        />
                    </h1>

                    <div className="project-showcase">
                        <article className="project-item">
                            <h2>Solar System</h2>
                            <div className="project-img">
                                <img src={solarSystem} alt="" />
                            </div>
                            <div className="project-btn">
                                <a href="https://github.com/Zeirnox/Solar-System" className='btn' target="_blank" rel="noreferrer">Github</a>
                                <a href="https://zeirnox.github.io/Solar-System/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                            </div>
                        </article>

                        <article className="project-item">
                            <h2>Mondstadt</h2>
                            <div className="project-img">
                                <img src={mondstadt} alt="" />
                            </div>
                            <div className="project-btn">
                                <a href="https://github.com/Zeirnox/Mondstadt" className='btn' target="_blank" rel="noreferrer">Github</a>
                                <a href="https://zeirnox.github.io/Mondstadt/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                            </div>
                        </article>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects

