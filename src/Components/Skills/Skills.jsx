import React from 'react'
import './Skills.css'
import { useRef } from 'react'

const Skills = () => {


    const clickPrev = () => {
        console.log('clikeado')
    }

    const clickNext = () => {
        console.log('clikeadoN')
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
                        <div className="screen_frame">
                            <div className="screen">
                                <div className='skills__slider'>
                                <img className='img__skills' name="image__one" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
                                 </div>
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
                                <div onClick={clickNext} className="circle__rectangle">&#62;</div>
                            </div>
                            <div className="right__side__bluelines">
                                <div className="bluelines">
                                    <button className='button__bluelines'>Skills
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                                <div className="bluelines">
                                    <button className='button__bluelines'>SoftSkills
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
        </div>

    )
}

export default Skills