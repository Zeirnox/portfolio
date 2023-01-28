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
                <h2>    Hi, I'm James Liu. I am currently a computer technician and I build workstations, test bench, and servers for fortune 500 companies. 
                    I love building websites because I love the feeling of learning new technology and ideas to finally solve a problem I've been stuck on.
                    I pride myself on being able to pick up new things and learn new things quickly.
                </h2>
                <h2>
                        I have experience in using HTML, CSS, JavaScript, React and Three js. I have attended IVC pursuing computer science as well as learning on my own using 
                    online resources to further my knowledge. I'm currently learning to use React Three Fiber to create and display animated 3D objects in React. 
                    I would love the opportunity to learn and work on projects in a professional setting.
                </h2>
            </div>
        </div>
    </>
    )
}

export default About