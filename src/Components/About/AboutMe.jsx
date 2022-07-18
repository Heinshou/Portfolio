import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <section className='about__me'>
      <div className='tunnel__container'>
        <div className='frame__one'>
          <div className='frame__two'>
            <div className='frame__three'>
              <div className='frame__four'>
                <div className='frame__five'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='description__container'>
        <h1 className='name'>Miguel Chávez</h1>
        <h2 className='web__desing'>
          <svg id="text" width="525" height="193" viewBox="0 0 525 193" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="525" height="193" fill="#F5F5F5" />
            <rect width="525" height="193" fill="#031321" />
            <g filter="url(#filter0_dd_0_1)">
              <path d="M78.3361 58C75.3214 58 75.8278 53.2472 76.5583 51.0556C77.8585 47.1552 84.9439 42.004 88.6694 40.4444C98.0942 36.4992 93.4477 59.3147 92.5583 62.2222C87.2072 79.7163 83.057 96.913 83.3361 115.333C83.6236 134.305 105.668 112.492 109.614 106.5C113.618 100.42 117.546 91.7878 120.114 85C120.803 83.1784 123.322 72.599 122.225 80.5556C121.029 89.2297 113.81 108.985 124.336 114.833C136.355 121.51 146.508 104.002 149.336 95.3889C154.601 79.3544 158.885 63.2787 161.447 46.5556C162.898 37.0874 162.174 25.2599 167.336 17" stroke="#8A0063" strokeWidth="6" strokeLinecap="round" />
            </g>
            <g filter="url(#filter1_dd_0_1)">
              <path d="M153 122.967C166.028 117.177 170.066 106.462 168.222 92.6337C167.924 90.397 168.494 87.1296 165.778 86.1893C162.908 85.196 162 87.5684 162 89.9671C162 91.6522 162 93.3374 162 95.0226C162 98.1132 163.707 99.6464 164 102.189C164.72 108.43 172.911 117.967 179.222 117.967C193.03 117.967 190 95.5399 190 85.8559C190 78.3149 188.735 72.174 186.5 65.0226C185.357 61.3661 186 68.6173 186 69.5782C186 75.1419 185.607 80.8726 186.222 86.4115C186.811 91.7132 186.876 96.7072 188.556 101.745C189.859 105.655 188.713 109.941 190.056 113.967C192.241 120.525 201.251 123.89 204.778 116.967C209.039 108.603 208.179 101.739 206 93.0226C204.715 87.8839 198.183 83.7122 198 91.7448C197.84 98.7764 199.724 102.088 207.111 98.8559C214.747 95.5151 223.566 87.574 225 78.9671" stroke="#8A0063" strokeWidth="6" strokeLinecap="round" shapeRendering="crispEdges" />
            </g>
            <g filter="url(#filter2_dd_0_1)">
              <path d="M252 49.1875C252 46.735 252 48.672 252 49.7431C252 51.754 253.83 51.7405 254 53.1875C254.288 55.6386 255 58.1589 255 60.4097C255 67.0046 256 73.4424 256 80.1875C256 86.5557 258.88 123.617 252 123.187C249.753 123.047 252.11 121.187 253.5 121.187C255.259 121.187 257.019 121.187 258.778 121.187C262.533 121.187 267.559 122.092 271.222 120.965C278.693 118.667 295.487 106.772 297.222 98.9653C300.59 83.8109 299.257 69.0877 288 57.1875C282.856 51.7493 277.803 49.3118 270.222 49.1875C256.518 48.9628 248.427 61.9041 241 72.1875" stroke="#8A0063" strokeWidth="6" strokeLinecap="round" shapeRendering="crispEdges" />
            </g>
            <g filter="url(#filter3_dd_0_1)">
              <path d="M315 123C315.57 120.722 320.459 117.915 321.5 115C323.276 110.028 323 105.544 323 100.222C323 98.7922 319.67 87.0781 317.111 91.5556C315.225 94.8563 317.937 102.646 319.056 106C321.321 112.797 324.8 122.113 334.556 117.778C340.724 115.036 341 107.31 341 101.444C341 99.9233 343.284 91.8379 343.778 92.2222C346.546 94.3756 348.036 97.7538 348.778 101C349.66 104.861 349 109.485 349 113.444C349 114.782 349.628 117.852 347.778 118C346.667 118.089 343.887 119.78 344.556 118.889C346.846 115.836 351.871 116.802 354.556 113.222C357.009 109.951 358.508 107.063 360.222 103.444C361.48 100.79 361 91.7293 361 94.6667C361 99.1111 361 103.556 361 108C361 112.869 361.872 113.342 365.222 115.778C369.14 118.627 373 113.308 373 110C373 105.708 374 101.409 374 97C374 91.2644 374 103.746 374 105.778C374 107.35 374 117.226 374 112.389C374 107.014 375.966 99.2754 380.444 95.6111C386.216 90.8887 383.057 106.5 383 108.556C382.93 111.082 382.421 113 385.444 113C387.417 113 389.807 113.735 390 111.222C390.407 105.937 392.933 99.5418 397 96.0556C400.188 93.3234 397.947 95.4541 395.444 97C392.923 98.5575 393 105.746 393 108.5C393 109.553 392.33 114.32 393.611 114.889C395.581 115.764 401.065 113.192 402.333 111.778C404.435 109.433 403 101.133 403 98.1667C403 94.2033 402.326 93.8131 403.444 97.6667C405.714 105.483 410.452 112.284 413 120C415.746 128.314 416.807 139.219 415.889 147.944C415.153 154.936 411.344 156 405.222 156C398.289 156 397.17 149.513 398.667 143.389C400.493 135.917 405.354 129.452 410 123.5C415.896 115.946 420.373 108.077 424 99.2222C426.548 93.0017 426.885 84.6073 425.833 77.9444C424.509 69.5565 416.838 69.9117 410 69" stroke="#8A0063" strokeWidth="6" strokeLinecap="round" shapeRendering="crispEdges" />
            </g>
            <g filter="url(#filter4_dd_0_1)">
              <path d="M362.67 69C358.807 69 360.108 72.123 360.67 71" stroke="#8A0063" strokeWidth="6" strokeLinecap="round" />
            </g>
            <defs>
              <filter id="filter0_dd_0_1" x="69.0001" y="3.9996" width="105.336" height="130.93" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="5" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0 0 0 0 0 0.388235 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="-6" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0 0 0 0 0 0.388235 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
              </filter>
              <filter id="filter1_dd_0_1" x="145.999" y="51" width="86.0012" height="83.9678" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="5" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0 0 0 0 0 0.388235 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="-6" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0 0 0 0 0 0.388235 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
              </filter>
              <filter id="filter2_dd_0_1" x="234" y="36.1846" width="71.8414" height="99.0072" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="5" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0 0 0 0 0 0.388235 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="-6" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0 0 0 0 0 0.388235 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
              </filter>
              <filter id="filter3_dd_0_1" x="307.999" y="55.9996" width="125.393" height="112" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="5" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0 0 0 0 0 0.388235 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="-6" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0 0 0 0 0 0.388235 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
              </filter>
              <filter id="filter4_dd_0_1" x="353.001" y="56" width="16.6684" height="27.2468" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="5" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0 0 0 0 0 0.388235 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="-6" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0 0 0 0 0 0.388235 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
              </filter>
            </defs>
          </svg>
        </h2>
        <div className='description'>
          <p>Full-Stack web programming student at Academlo, looking for new knowledge and new challenges
            to make my stack of abilities bigger so i can archive my goals and my dreams, i consider my self a commited person,
            I like to put a good face on problems, I am very ingenious both to find solutions and to joke around. I encourage
            others just as I like to explain or help others in case they have a problem. In my knowledge I have high intermediate
            English, JS, CSS, React</p>
        </div>
        <div className='icons__wrapper'>
          <i className="fa-brands fa-github icon firstone"></i>
          <i class="fa-brands fa-linkedin icon secondone"></i>
          <i class="fa-brands fa-twitter icon thirdone"></i>
        </div>
      </div>
    </section>
  )
}

export default AboutMe