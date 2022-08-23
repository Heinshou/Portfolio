import React, { useState } from 'react'
import './Skills.css'
import { cssImg, htmlImg, javascriptImg, reactImg, teamWorkImg, weatherGif, pokedexGif, commerceGif, staticGIF, screenOffGif, creativityGif, atittudeGif } from '../../utils/images';
import { softSkills, skills, portfolio } from '../../utils/description';
import { skillsTitles, softSkillsTitles, portfolioTitles} from '../../utils/titles'

const softSkillsDescription = softSkills

const skillsDescription = skills

const portfolioDescription = portfolio

const staticTV = [
    <img className='image__static' src={staticGIF} alt='static' />
]

const skillsImg = [
    <img className='image__skill' src={javascriptImg} alt="javascript" />,
    <img className='image__skill' src={cssImg} alt="Css" />,
    <img className='image__skill' src={htmlImg} alt="Html" />,
    <img className='image__skill' src={reactImg} alt="React" />,

]
const softSkillsImg = [
    <img className='image__skill teamWork__image' src={teamWorkImg} alt="TeamWork" />,
    <img className='image__skill creativity__image' src={creativityGif} alt="Creativity" />,
    <img className='image__skill creativity__image' src={atittudeGif} alt="Creativity" />,

]

const portfolioImg = [
    <img className=' image__skill portfolio__pokedex' src={pokedexGif} alt="Pokedex" href="https://pokedex-mike-dev.netlify.app/" />,
    <img className=' image__skill portfolio__weather' src={weatherGif} alt="Pokedex" href="https://pokedex-mike-dev.netlify.app/" />,
    <img className=' image__skill portfolio__weather' src={commerceGif} alt="Pokedex" href="https://pokedex-mike-dev.netlify.app/" />
]

const tvOff = [
    <img className='image__skill screen__off' src={screenOffGif} alt='screen off gif'/>
]

const Skills = () => {

    const [category, setCategory] = useState([tvOff]);
    const [index, setIndex] = useState(0);
    const [powerButton, setPowerButton] = useState('')

    const clickNext = () => {
        const nextClass = index + 1
        if (nextClass >= category.length) {
            setIndex(0)
        } else {
            setIndex((state) => state + 1)
        }
        console.log(index)
    }

    const clickPrev = () => {
        const prevClass = index - 1
        if (prevClass < 0) {
            setIndex(category.length - 1)
        } else {
            setIndex(prevClass)
        }
        console.log(index)
    }

    const handleCategory = (array) => {
        setCategory(array);
        setIndex(0);
    }

    const turnTV = () => {
        if(powerButton === ''){
            setPowerButton('prendio')
            setIndex(0)
            setCategory(skillsImg)
        } else {
            setPowerButton('')
            setCategory([tvOff])
        }
    }

    console.log(index)
    return (
        <div className='skills__container'>
            <h3 className='skills__tittle'>Skills</h3>
            <div className='television__container'>
                <div className='television__frame'>
                    <div className="television__frame__two">
                        <div className="left__side">
                            <div className="left__side__square">
                                <div className="circle__one">
                                    <div className="circle__two"></div>
                                </div>
                            </div>
                            <div className="left__side__rectangle">
                                {/* <div className="left__side__rectangle__two"> */}
                                    <p className='tv__titles'> 
                                        {category === skillsImg ? skillsTitles[index] : ''}
                                        {category === softSkillsImg ? softSkillsTitles[index] : ''}
                                        {category === portfolioImg ? portfolioTitles[index] : ''}
                                    </p>
                                {/* </div> */}
                            </div>
                            <div className="left__side__bluelines">
                            <p className='description__text'>
                                        {category === skillsImg ? skillsDescription[index] : ''}
                                        {category === softSkillsImg ? softSkillsDescription[index] : ''}
                                        {category === portfolioImg ? portfolioDescription[index] : ''} 
                                    </p>
                            </div>
                        </div>
                        <div className="screen__frame">
                            <div className="screen">
                                {/* <div className={`skills__slider ${skillsImg[index]}`}> */}
                                {index === 0 && category[index]}
                                {index === 1 && category[index]}
                                {index === 2 && category[index]}
                                {index === 3 && category[index]}
                                {/* </div> */}
                                <div className="soft__skills">
                                </div>
                            </div>
                        </div>
                        <div className="right__side">
                            <div className="right__side__square">
                                <div className="circle__one"></div>
                            </div>
                            <div className="right__side__rectangle">
                                <div onClick={clickPrev} className="circle__rectangle change__channel">&#60;</div>
                                <div className="circle__rectangle">
                                    <div onClick={() => turnTV()} className={`power__button ${powerButton}`}>
                                        <div className="power__button__circle">
                                            <div className={`power__button__rectangle ${powerButton}`}></div>
                                        </div>
                                    </div>
                                </div>
                                <span onClick={clickNext} className="circle__rectangle change__channel">&#62;</span>
                            </div>
                            <div className="right__side__bluelines">
                                <div className="bluelines">
                                    <button className='button__bluelines' onClick={() => handleCategory(skillsImg)}>Skills
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                                <div className="bluelines">
                                    <button className='button__bluelines' onClick={() => handleCategory(softSkillsImg)}>SoftSkills
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                                <div className="bluelines">
                                    <button className='button__bluelines' onClick={() => handleCategory(portfolioImg)}>Portfolio
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                                <div className="bluelines">
                                    <button className='button__bluelines'>Contact
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills