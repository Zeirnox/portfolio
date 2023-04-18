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
                <p>
                Hi, I'm James Liu and I am a web developer. I have always been interested in technology since 
                I was young and I have been learning new things ever since. I love to explore and find new ways 
                to solve a problem or to improve workflow. 
                </p>
                <p>
                I have prior experience as a computer technician. In that role, I built workstations, test benches, 
                and servers for large-scale projects of over 100 systems per week. This experience helped me develop 
                strong technical skills and attention to detail, which have proven invaluable in my work as a web developer. 
                </p>
                <p>
                I'm proficient in several programming languages, including HTML, CSS, JavaScript, and Java, and I'm constantly 
                expanding my skillset and exploring new technologies. I have experience working with popular web development 
                frameworks like React and ThreeJS.
                </p>
            </div>
        </div>
    </>
    )
}

export default About