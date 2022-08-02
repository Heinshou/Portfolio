import React, { useState } from 'react'
import './Skills.css'
import { useRef } from 'react'

const classImg = ['first__img', 'second__img', 'third__img', 'fourth__img']

const Skills = () => {

    const [indexClass, setIndexClass] = useState(0)

    const clickNext = () => {
        const nextClass = indexClass + 1
        if(nextClass >= classImg.length){ 
            setIndexClass(0)
        } else  {
            setIndexClass(nextClass)
        }
        console.log(indexClass)
    }

    const clickPrev = () => {
        const prevClass = indexClass - 1
        if (prevClass < 0){
            setIndexClass(classImg.length - 1)
        } else {
            setIndexClass(prevClass)
        }
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
                                <div className={`skills__slider ${classImg[indexClass]}`}>
                                <img className='image__skill' src="data:image/png;base64,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" alt="" />
                                <img className='image__skill second__img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="" />
                                <img className='image__skill third__img' src="data:image/png;base64,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"/>
                                <img className='image__skill fourth__img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAYFBMVEX///9h2vtW2PtT2Pv6/v/1/f9k2/vb9v7k+P7g9/7D8P3U9P5j2/vs+v6Q5Pyw6/1/4Px03vuV5fy47f2f5/yr6v3N8v6H4vzp+f7H8f2t6v143/y+7v2j6PzX9P7P8v4W3NfkAAAUM0lEQVR4nNU958KjuK4fpqZAaIFk0t7/LW9IQbItG8sQ9h792dmZYCwkq0v++5sNcXo9tkVRtP+uu3z+cgpE2flffamSIKn62zVbfH02xM0lEEIEAzz/K5KyWXBXp6bff1d/vyC5Lf9RORC3sJ1xW2HSpkssnh8uobb6c/k6XmJ1PzgQO3rvKjjMJUVXGhZ/rn5dZPd8iEvDlt4M2M8gdHRNLGsHolgOCwbke8ueBgjLh+fSh70N3wHly6KouEE+ge8L58oH50aXDf8fUI4SB4yfOys3zIU7Kz/Dwqszdu+0ryfwROupDB3XFYef4UZCI2/sqShDIWhuFGHjump0I/F9Lh4G+yCU1w9XtUakQyyCvnlssnR3bQdrhNhx5cbaO4qhRXA5nrM4iqL80Qb4B+WPkZSgRm8Ob4ht490tIPRoeJxeM6p1Aouw6PChkJggPC+OlxEyhFOiMVdaB7ohlkxp57v+UHjZRurPdvjViyE0CZjElG0VN5WOs13SHPUHCvIj7YDKYjUix+ilJtJ1lcqjojQL7fiiIhwWJsF0gJ9Ws1FxBHinsJzPTqOz6Aw/3Wn49ifzwhf4GVfZ+0I1vjLRzhmGq3o0xY38ncrRotrZlk3DifUWhwzeOGEFRK3C2qLUP1GkGjOTtkUJX9wfCw4AU4dWEg+QKQdU7FVGzBUlHBaTNhocgpXYGs6Ri23bqBSUBWwaKLB1WNOdHRaBGN5nkkQS5IobHeJdbhVrtXcywttxxVVcqBQQcPQRFDKH9fgvRwVhRwv8zt7CLID9Oxu2mayoRvnVyn9dufoGiM3WOMj1+LZ/7g8VoYzbC+VC9oUYHu8oSsQaIa9RGwtOgGMrc3byNE5lMe7uU/4hDS5a7vY9YKRWyApXbuSwWLJRBNqds9iZf7L8IR8x3k9qYwkU21n+n4QX7AUjaM96zgs248vYmqHW/KMvwj1zpYhhBM2Gx/gy7jYlt0dCuJ5+VIExrhhaXI6FYDtHaJypOFbIkPlfGE1ro7u6HIx0snmKRkh1KnspmGJ82jcL4A6gGDjqZISNhrBXIAOMAhc7fB6MdpLnu3IltG91hY1wm/fdWQBf18mP0KGXELbHFIwAZ+v33lMxE2NVRVVeKM+TJjyYKTNuqugSXlZTsyLG9SyMD0QU3idn9t9g7MHVpD722fR/gzFfVt9pm4vlNr1hTckF2oltOZwwwvjPIfuAHFfE2N8CkZLs4iAxNjczuqY+9j9B2CF+MnKKz3TCjFfNtYM44O1J4BjPK5lwxozNTCHNtoMY0I375GkV7Cl+3ENcaMD0GEfDTfhZqRwA74dlOuwwdt8nbzKfM2AM7a2QlTiNW+cw4onmYJxyCjnUGsOLvGCbF0RALHeLWK6Fgk1GFf33k+tB1Ie1eT+Al7nLV0xLKageY4zdmQbCiwFj574A8WrngCtOEIeycM10geYAIEzWKBMA58lVFeISAE2LYx3lvCI8xA8v8uHINUEw5xKOEmYA4RiZBLN6jSqBK/f7XhDGFBPiQ+4YEgE++72RiR0gtzOEla6gxDEW5I5H2UOWzICcl7zdTavcjHuU4Ru5HoN5AK9zsHdijI3Js8OBAheTAtkzv0/C/OF8gIOHDHU5tnOPU+cO6axuVeWEfdNp7wn7D0kc56dsk6b3+323e+x2z/+m6SY75XGEpJuD+P03rsrPWPnA2fkLx3IxnjCD9LNuilXBc1qnKwZ8CVMqM0/PTdtfKrcGAA1EUl36W9OlJskIv1xDVEuSUk3sne7XW1+Z6+k5aA91+UFV3K6pKsvAqhYrNXsBU43CN8p3TV1pDLoAvNa8tA3C2/1YLQVH2erKu1uZLI+qgveT3v3h8UK7XVlwYaMieRx7tWPjt3gnRbNZt7ZpABQUWA1ZjPb4x/XaYSrLhtYEsRK+m4NbP9vvIdmuEOUaeo64nDzomVAE+6SqLmXZ90VRv6Eoir4sL1WV7IPhJx4rV4efcvajTjwObrLtdps8jmOzKRU9/zXf7Lotn3t+iHTa6h1J5A7CMLignYecrAEOayeXF90dXhlemsXZOz9MU3fQHZf60G1inDZlJhtQ0cTThIw352Nx2U/jLUQ5aY1z4N7bXzkcwKpodvn3pYjEzBwaDoh8+z6iU3cokin5IZLjQoSOmsTaIfvkqXabSXihYB07NYx71qTQYZw2dWKaLfDZSb+AZ5HfJk5vpZcJZmjT/CKP2mZhxPcLtQl4XzWzsy+vp0+QzrU47sF3bnCwl0jmTVk/IplhesY30/QL9B102/aKiOTzxVHUS5+DgfLsxukZiWcWPboZesZF1e4QHVU6YBr5ZQxwVZ/KIygiFm8Lw4kTic+X3pIBDPGUiK/DBYRU2RqfQz+HHfe+qqG0RPqXuDMgHbInNmz0BuJhnf3xK0sgaq1EmLHY8q3DaYzCC1Js34BP1BUke4c1Rz+TEwxEUGPZDzJTZmskS/0jFEg8ycFcYGrUpBldS+IACqeGwDekBEOL6iqzKNBB4l3U5RP6l7cj+SSzEJBYNuU2lAksSkeTRCewCPUOd8TWKNsVoYfmhGRwhS7iTmjSCFVbI7pShpKLBMv11vCgpb4VSGvEeCitJubYuRFaB0Xsx5wi2Xn80EcrOZzmnUZfcaMlLpLWo3RB1QozY1BYqY/fG/Ur0omLVMNZVBO5OGWWy5OfjyYNAzoEXg80sImtKN0e27o9blMLAZDwGi1V+AzGoqZUG5Njr/jSuuBry9kHQ+HbWIYNIpPYiq8XlH25XE0fFK/1PbNogIF5Wzv1WNoGmCkV/RPTaSDD9y0uB81kElu5KlMNQkLezIdfIM9s1/RbRVeZf10oP5w4iUguv61JVMRisLaoMXXCMAIn1jQUiEWy1gA9qgzMMQ3ZkSns0ODeKioZnHm6KOZEGnJG6YIyse9jA/8/WSCpmBQhSWV5KoeLqIWmzRffINuQLGDR5pygt1HSBYVDXusDCzl0hSmDOSh0pBYGkTjVV0iSBG0wpOy7sxlhg1uJtxRLbreLqu9kKmuSFFefOEcukKX5QIl7UjPtrKEjuigGScIb5ii3ym7FllIPKQ4tOJeFIeHSo1NG7T63Ufj1UkIY3ZHwipHUcIxPy9NklLMvVU66V4Uhi6M3rv2C6VQVVfGCFu3h0Lj7ZFgYy8VuyDq0KmwVyHYequjJ0GstPUbI0xO5PiPAIZXPYb5GtOK58RTpCCEQTyNMlzi0xIOs5k60AD7+J0uYxQ7q1J6ALkHTJ6xRGBNKnPhUzOJTdJbRzhC7M8ch6DuiPlmk/sgABPGIaXS8zAPW6uPWYu/lCLajVuhcSByQnTyR9ig35g9aDc4DcgnYsbiT6m1Rp6II3IBCRpV5/FgSMse/KSFEJ+5qcgJiAEL8OM7IpWWS+jA/XAhnaiQHxIA9WluVQkRKrExaH+PT1JmShaPPoAUg8tetBvPNJ9kuKSiyiM7iQigYk+EKaSCQz2Q9CKF/eoVAzXuNMcBTmWjNcXXGmDR+rkbDyREidULMZlzRq6VfKvonRT2htA0Y0/jgk+wVIIWSt7c56NmJOAKy5GjN4WBifjZEqwr0Ar/UHdTAvzHO5nE1JgFdCzuTxth+8RtcBI0kb0EFboRXoyc2L2hhv3XGmBTERB8vD8DC+obfQEP7DF6QyhRIIm/swQBEQeqLy1YX2yj8w7mbb1njrKmqssNIfjOpHdMK1Pc6Tiv8CQAv+yuo0Kxifse2PKaH3rRr5Srlxqifi5/OOulGNKgnvrTOVbuaooE22oYGp2f5GhloAhYW0IBdfqXP6SGInLkdZCp+pbuj3JOHIqJgkyP1wRylpHu+JKHsRVhfoJhaZw/mdAh0LQJiD/88N6F4vB1kChXKCeGdPCxDEDWRyuPlfQmZRH4zF9lF+YHUwEnWrFuUUJYlAF6QcZSJQYG0B0b+UAbK1c/I9RlsiJOHsgDo8LgOdxe0hqdQZIBiu8nYHqnJYVFxQwP3nWWNNFhHqRypJ21FAlBTTIlMI60qRX05hTD1mXBOIkKJNkcFJc2d1SSqPFjJbVQ4LgXpMBUpoRvZjzKpI1De6Yh36Bb5yaR4kf6MpDNF4BQ/gx09vS4k8MlMYWzIHr/eV1GfGOcWI3wwSCZSQR74TmkQOdtJ55hlQNcsDOdgKn+sXaMA2+nJ36NI88DHyLybjuBGcsEDPSxWnvonLpNeClgH72i/kuEm3mCoEZj89VvMIhN+6tQpFyeZulPUOfhTdSCA4Vvs4ApFekt5r9ubYU9/Wr0OBCKEE1tTL04yl3krKkSU1ojDA8utF4BwMurMrMYdHs8/1iZ7Qq/1+XOUXVu1nshil6rjLK16CmUaPscQaRNzOCU+t8mnmitpz0b2RGGEUVCh20rMceZUvUfI7gJvVZT3RoaIiCoFt5q9oZ9nk25OVkMCOR+jnELVr6bAQKafm4kgvHZribgYFBWcWqDnj+sykeyig5CnQpWNtlulvpvW1GbYkxwKb0fk/HHtLfhgVK1JpuEbhE5BIrU4c+g60OkMrjpWLtjvnHPVA07S4i8Hf62JxofOzyJw9IoexM1yWufUVVHGH1imhn5jOh3oS0gsFFNXy7oay8Pzha42RfJP0ptkQfnfQn0SaBF59VTTiANsiNv/WH0ST+ioJcIe+j9zkzWwRC8MFluKDAGV/JXgeaNdgvd6kHsxdETGH0VQfJBGbpNiMi3Q74TElnpckTvx+inZBmPRMDY40R7tB2mQ1KprOL+nDfvq6jdD3ssjb2h0PXva/oZqdDrq+mRvRGLNPcc86dNBiPtxdd8fudmmrspgxii6s8mnRXyn+wHzelNxbIIILUylZsX+MK/Z/Dw1f4mI1uCCOH7/8c0stgawJypFMBPfAR72S5iT4tipZJ7TY45lvWzDRJttW1mbzMNqoWnWaWHtux6coP4oNdYjxtwz+Rqd09F2juJhMlRgnxcixBI99V/Ij5O3x7+GK92u9xe9UXiaydc4V/C0MaLs0dQuk6FEclh6rGI3MS/ig7cIw6RsD4hSrAos6WblugzcBsEIUfxkcHfcXBwnvig/u78nvthEShQNQ1/uD7eUnPKyXr8YejHIDpXHmBtyqk/7mewjD/bho1tefz3N6NRMZBdc97rEIr05arQoOFeW/hpWm8EWWxX07/GcqphbHiBsm1Q/niioIRvu+wNoMM/7sNgAdmD/F6WDbbDCcMHBzinf5h3w2Ap3D74Ayhw/Ln+82R7L4AfDMj+oCiFNhkIF4TOn+DhCNBY8y/mrYZjW0z7ymR5nwjQUVd82O5WScEfKOle3awXaMkTZ7vrEvEqeGtYPcyGeyrtvD+e7QdWCB77KHdfIX7PnHeI8kzO0rrOND7aRfAOgkrtFMTMB3DQ0HZHGkxiS7JRlm/Q1vPrx6B6fCdbDAOuoRRhPh4rQzIhVRBdUKzt4o70TKg9MZAczCorif3/1zx+eHu3QSCLNoTdlKnEw0GmkF7DZ7y8tk/pF2XcNGBK5eCa7U7EWiJI1phvv3ATXCNKdIKTwxUkmt7pQGBayhrCGAhdHqxaHNqmPJN2t4FaBiCx79417A5wh10IyhDFxfzcuq3Lt9kYdTCtY1jCT3bXsFzcWaFZSjFtpnH2hkW9WuLUMXSHu/DJcXqLKYhxfcHeF5t3eygSwMd3jDzh5L38oLLUYbZNwi8fv71uEUg+Oc2q6j+2Kqc/YfLOiQt54KYYTxhgKnaUTzlGtHcPSnQs7FA7gPEbdtyj1BLA0652rImfA2dPcaXRyxlKEkBWVnNlPywLvG8RrTUdJFe68nD6kL3+Psf/Nw8rduPKFmsw4LMjP31+U4n/jsxTmDs83m10yBWBm+t11z4EZ9/Aa77jm31cfe+lIP4CL//jOuKkHiE+nNTGedfMweVd9sOfnyv4bjH0y8moB9+tIezgD/zsYE52XrBs2vuBn6/rB3Pu01U5Ev3tAT/8jkusFclO61+gCbHP9Xh/PviVeidr7efRgV/8+0NXO9Ey1Tgwvl75b0a72tzJfoI6L9swPssOLMwB8cZ+8HjXSnzGtcoTjiv5x5+ktvoBqGff6diBNfh8DufufoMhUJcSvV4Wk/e9z5v6aMDeX8YoLs0rJfJHpD8AnljnAXcaxlwmesMa/QTuUZ2MCC+DzskwQZVxe/xfJ1eos9gRG20//eDaA0cUQGpHcT/Q+uHIHdsiQuiA+/ToxeHDwEF0b+Qh/hbPSBz7d4/2F2zyjgAkoxux6hpQhbKCA1YZBV86GMoU1rnxGRRhulrU6cB8/pphgjlcUZfyPPgsgo++kRtXmFVkqKxN/ROIiDm8rWtUDoE7vaYqkKoHVORiZNADUicyo13tGZxMDUFvZlNzI1ZbPUDdNVUtsusPS+SaNxQAlCq30iPVxZWSMW50ILUqrOYKCwOswtTSXz+YDHNQ6eZEY3H/VZ37qa4tEQrNv/oOKcqPdFR+1ctSwMHKEfn9KaLogR5osPx8XR8AX2JIbO1F3j9qOpzqzZCjirEneRvFfzxiZD+CupL2+r0evF92KakLI6IPpRFjqCl9Kyq7TFvIC7NmHNwnn04Fqf3NQIzExAedJ6B1GS7rfRvxbGi3b7uRtVfV2d4rj033bkv1QjtcAnqmWIBGUxy6LoyjKO/k6rLWaJN5wVSOSIgxNxfPuIwyoiQ2fxQcml1cn7875IRhnben75USx7paxZcqyvw/pyTAxRA42VjBrvq9u3W78lPNsyKd35XNF7aDJXdormNejLwLxVL+9MAwEmgTTzcto6d/XQlAQW1s2TRaE29IH6+ek5/KtAdRlgh/yJs1MtjubRwb4JDGWAvJmdxFWtyVqgE9HCmlhvedzBcgPqFnzNUmub/y5WYWsKfG8hGH523+L7wvy7lD3l6oqi1vzsI+S84Ao2x6LS5UESdXftgt8zP8D6jDUb+3ZBrwAAAAASUVORK5CYII="/>
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
                                <span onClick={clickNext} className="circle__rectangle button__left">&#62;</span>
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
            <span onClick={clickNext} className="circle__rectangle button__left">&#62;</span>
        </div>

    )
}

export default Skills