import React, { useState, useEffect } from 'react'
import './Skills.css'
import { cssImg, htmlImg, javascriptImg, reactImg, teamWorkImg, weatherGif, pokedexGif, commerceGif, staticGIF, screenOffGif, creativityGif, atittudeGif } from '../../utils/images';
import { softSkills, skills, portfolio } from '../../utils/description';
import { skillsTitles, softSkillsTitles, portfolioTitles } from '../../utils/titles'

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
    <img className='image__skill screen__off' src={screenOffGif} alt='screen off gif' />
]

const Skills = () => {

    const [category, setCategory] = useState(tvOff);
    const [index, setIndex] = useState(0);
    const [powerButton, setPowerButton] = useState('buttons__off');
    const [cellCategories, setCellCategories] = useState('cell__categories__off');
    const [customScreen, setCustomScreen] = useState('menu__cell__screen');
    const [homeButton, setHomeButton] = useState('fa-solid fa-power-off fa-lg');
    const [formDisplay, setFormDisplay] = useState('hidden')


    const clickNext = () => {
        const nextClass = index + 1
        if (nextClass >= category.length) {
            setIndex(0)
        } else {
            setIndex((state) => state + 1)
        }

    }

    const clickPrev = () => {
        const prevClass = index - 1
        if (prevClass < 0) {
            setIndex(category.length - 1)
        } else {
            setIndex(prevClass)
        }

    }

    const handleCategory = (array) => {
        if (category === tvOff) {

            console.log('aqui2')
        }  else  {  
            setCategory(array)
            setIndex(0);
            console.log('aqui3')
        }       
    }

    const turnTV = () => {
        if (powerButton === 'buttons__off') {
            setPowerButton('buttons__on')
            setIndex(0)
            setCategory(skillsImg)
        } else {
            setPowerButton('buttons__off')
            setCategory(tvOff)
        }
    }

    // console.log(formDisplay)
    // console.log(category);
    // console.log(powerButton);
    // console.log(cellCategories);
    // console.log(customScreen);
    // console.log(homeButton);

    const turnCell = () => {
        if (powerButton === 'buttons__off' && cellCategories === 'cell__categories__off' && homeButton === 'fa-solid fa-power-off fa-lg') {
            setCellCategories('right__side__bluelines')
            setCategory('')
            setFormDisplay('hidden')
        } else if (powerButton === 'buttons__off' && cellCategories === 'right__side__bluelines' && homeButton === 'fa-solid fa-power-off fa-lg') {
            setCategory(tvOff)
            setCellCategories('cell__categories__off')
        } else if (powerButton === 'buttons__off' && cellCategories === 'cell__categories__off' && homeButton === 'fa-solid fa-house fa-lg') {
            setCategory('')
            setCellCategories('right__side__bluelines')
        } 
    }

    const switchForm = () => {
        if (category === ''){
            setFormDisplay('form')
            setCellCategories('cell__categories__off')
        } else {

        }
    }

    useEffect(() => {
        if (category !== '') {
            setCellCategories('cell__categories__off')
            setCustomScreen('images__cell__screen')
        } else{
            setCellCategories('right__side__bluelines')
            setCustomScreen('menu__cell__screen')
        }

    }, [category])

    useEffect(() => {
        if (category !== '' && category !== tvOff) {
            setHomeButton('fa-solid fa-house fa-lg')
        } else {
            setHomeButton('fa-solid fa-power-off fa-lg')
        }
    },[category] )

    return (
        <section className='skills__container'>
            <h3 className='skills__title'>Skills</h3>
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
                                <p className='tv__titles'>
                                    {category === skillsImg ? skillsTitles[index] : ''}
                                    {category === softSkillsImg ? softSkillsTitles[index] : ''}
                                    {category === portfolioImg ? portfolioTitles[index] : ''}
                                </p>
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
                                {index === 0 && category[index]}
                                {index === 1 && category[index]}
                                {index === 2 && category[index]}
                                {index === 3 && category[index]}
                                <div className="soft__skills">
                                </div>
                                
                            </div>
                        </div>
                        <div className="right__side">
                            <div className="right__side__square">
                                <div className="circle__one"></div>
                            </div>
                            <div className="right__side__rectangle">
                                <div onClick={clickPrev} className={` circle__rectangle change__channel ${powerButton}`}>
                                    <i className="fa-solid fa-angle-left"></i>
                                </div>
                                <div className="circle__rectangle">
                                    <div onClick={() => turnTV()} className={`power__button ${powerButton}`}>
                                        <i className="fa-solid fa-power-off fa-md"></i>
                                    </div>
                                </div>
                                <span onClick={clickNext} className={` circle__rectangle change__channel ${powerButton}`}>
                                    <i className="fa-solid fa-angle-right"></i>
                                </span>
                            </div>
                            <div className="right__side__bluelines">
                                <div className="bluelines">
                                    <button className='button__bluelines' onClick={() => handleCategory(skillsImg)}>Skills</button>
                                </div>
                                <div className="bluelines">
                                    <button className='button__bluelines' onClick={() => handleCategory(softSkillsImg)}>SoftSkills</button>
                                </div>
                                <div className="bluelines">
                                    <button className='button__bluelines' onClick={() => handleCategory(portfolioImg)}>Portfolio</button>
                                </div>
                                <div className="bluelines">
                                    <button className='button__bluelines' onClick={() => switchForm()}>Contact</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cell__container">
                <span className='cell__audio'></span>
                <div className={`cell__screen ${customScreen}`}>
                    <div className={`${cellCategories}`}>
                        <div className='bluelines'>
                            <button className='button__bluelines' onClick={() => handleCategory(skillsImg)}>
                                <i className=" fa-solid fa-book fa-2xl"></i>
                                <p className='cell__app__text skills__text'>Skills</p>
                            </button>
                        </div>
                        <div className="bluelines">
                            <button className='button__bluelines' onClick={() => handleCategory(softSkillsImg)}>
                                <i className=" fa-solid fa-people-group fa-2xl"></i>
                                <p className='cell__app__text'>SoftSkills</p>
                            </button>
                        </div>
                        <div className="bluelines">
                            <button className='button__bluelines ' onClick={() => handleCategory(portfolioImg)}>
                                <i className=" fa-sharp fa-solid fa-briefcase fa-2xl"></i>
                                <p className='cell__app__text'>Portfolio</p>
                            </button>
                        </div>
                        <div className="bluelines cell__contact">
                            <button className='button__bluelines ' onClick={() => switchForm()}>
                                <i className=" fa-solid fa-link fa-2xl"></i>
                                <p className='cell__app__text contact__text'>Contact</p>
                            </button>
                        </div>
                    </div>
                    <p className='cell__titles'>
                        {category === skillsImg ? skillsTitles[index] : ''}
                        {category === softSkillsImg ? softSkillsTitles[index] : ''}
                        {category === portfolioImg ? portfolioTitles[index] : ''}
                    </p>
                    {index === 0 && category[index]}
                    {index === 1 && category[index]}
                    {index === 2 && category[index]}
                    {index === 3 && category[index]}
                    <p className='cell__description__text'>
                        {category === skillsImg ? skillsDescription[index] : ''}
                        {category === softSkillsImg ? softSkillsDescription[index] : ''}
                        {category === portfolioImg ? portfolioDescription[index] : ''}
                    </p>
                    <form className={`${formDisplay}`} name='contact' method='POST' data-netlify="true">
                        <input placeholder='Name' type="text" className="name " id='name'/>
                        <br />
                        <input placeholder='Email' type="email" className='email' id='email' />
                        <br />
                        <textarea placeholder='Message' className="message" cols='5' rows='5' id='message' />
                        <input type="submit" className='form__button' value='Enviar' />
                    </form>
                </div>
                <div className="buttons__container">
                    <button className='cell__button' onClick={clickPrev}>
                        <i className="fa-solid fa-arrow-left-long"></i>
                    </button>
                    <button className="cell__power__button" onClick={() => turnCell()}>
                        <i className={`${homeButton}`}></i>
                    </button>
                    <button className="cell__button" onClick={clickNext}>
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                </div>
            </div>
        </section>

    )
}

export default Skills