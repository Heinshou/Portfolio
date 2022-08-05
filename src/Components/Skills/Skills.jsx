import React, { useState } from 'react'
import './Skills.css'
import { useRef } from 'react';
import { cssImg, htmlImg, javascriptImg, reactImg } from '../../utils/images';

const skillsImg = [
    <img className='image__skill' src={javascriptImg} alt="" />,
    <img className='image__skill' src={cssImg} alt="" />,
    <img className='image__skill' src={htmlImg} alt="" />,
    <img className='image__skill' src={reactImg} alt="" />,
]
const softSkillsImg = [
    <img className='image__skill' src="https://cdn4.vectorstock.com/i/1000x1000/98/93/cartoon-sun-vector-489893.jpg" alt="" />,
]

const Skills = () => {

    const [category, setCategory] = useState([]);
    const [index, setIndex] = useState(0);

    const clickNext = () => {
        const nextClass = index + 1
        if(nextClass >= category.length){ 
            setIndex(0)
        } else  {
            setIndex((state) => state + 1)
        }
        console.log(index)
    }

    const clickPrev = () => {
        const prevClass = index - 1
        if (prevClass < 0){
            setIndex(category.length - 1)
        } else {
            setIndex((state) => state - 1)
        }
    }

    const handleCategory = (array) => {
        setCategory(array);
        setIndex(0);
    }


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
                                <div className="left__side__rectangle__two"></div>
                            </div>
                            <div className="left__side__bluelines">
                                <div className="bluelines"></div>
                                <div className="bluelines"></div>
                                <div className="bluelines"></div>
                                <div className="bluelines"></div>
                                <div className="bluelines"></div>
                                <div className="bluelines"></div>
                                <div className="bluelines"></div>
                                <div className="bluelines"></div>
                                <div className="bluelines"></div>
                                <div className="bluelines"></div>
                            </div>
                        </div>
                        <div className="screen__frame">
                            <div className='screen__static'></div>
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
                                <div onClick={clickPrev} className="circle__rectangle">&#60;</div>
                                <div className="circle__rectangle button"></div>
                                <span onClick={clickNext} className="circle__rectangle button__left">&#62;</span>
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
                                    <button className='button__bluelines'>Portfolio
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
            <span onClick={clickNext} className="circle__rectangle button__left">&#62;</span>
        </div>

    )
}

export default Skills