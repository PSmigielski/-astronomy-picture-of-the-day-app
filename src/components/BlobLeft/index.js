import React,{useRef, useEffect} from 'react';
import './index.css';
import gsap from 'gsap';

const BlobLeft = () => {
  const wrapper = useRef(null);
  
  useEffect(()=>{
    const [elements] = wrapper.current.children;

    const particles = elements.getElementById('particles')
    gsap.set([...particles.children], {autoAlpha: 0});
    
    const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}})

    tl.to(particles.children, {duration:2.5, autoAlpha:1, stagger: 0.3})
       .fromTo(particles.children, {scale: 1}, {duration:1, scale: 0 , stagger:0.2}, '-=0.15').repeat(-1).repeatDelay(1)
  })

  return(
    <div ref={wrapper} className="blobLeft">
      <svg className="blobLeft" viewBox="0 0 680 714" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="left">
          <path id="Vector 1" d="M148 203C147.333 164.833 116.8 77.4 0 33L1 714.5H680C571.6 714.5 525.5 636.5 516 597.5C503.333 531.5 443.6 397.8 306 391C168.4 384.2 143.333 262.833 148 203Z" fill="#0B3D91" stroke="#0B3D91"/>
          <g id="particles">
            <circle id="Ellipse 6" r="12.5" transform="matrix(-1 0 0 1 191 90.5)" fill="#0B3D91"/>
            <circle id="Ellipse 5" r="7.5" transform="matrix(-1 0 0 1 310 145.5)" fill="#0B3D91"/>
            <circle id="Ellipse 4" cx="318" cy="38.5" r="12.5" fill="#0B3D91"/>
            <circle id="Ellipse 3" cx="246.5" cy="199" r="15" fill="#0B3D91"/>
            <circle id="Ellipse 2" cx="137" cy="7.5" r="7.5" fill="#0B3D91"/>
            <path id="Ellipse 1" d="M413.5 334C413.5 350.569 400.069 364 383.5 364C366.931 364 353.5 350.569 353.5 334C353.5 317.431 366.931 304 383.5 304C400.069 304 413.5 317.431 413.5 334Z" fill="#0B3D91"/>
            <circle id="Ellipse 7" r="7.5" transform="matrix(-1 0 0 1 254 322.5)" fill="#0B3D91"/>
            <circle id="Ellipse 8" cx="511" cy="418.5" r="12.5" fill="#0B3D91"/>
            <circle id="Ellipse 9" cx="648.5" cy="597" r="15" fill="#0B3D91"/>
            <circle id="Ellipse 10" cx="614" cy="461.5" r="7.5" fill="#0B3D91"/>
            <path id="Ellipse 11" d="M573.5 553C573.5 566.807 562.307 578 548.5 578C534.693 578 523.5 566.807 523.5 553C523.5 539.193 534.693 528 548.5 528C562.307 528 573.5 539.193 573.5 553Z" fill="#0B3D91"/>
          </g>
        </g> 
      </svg>
    </div>
  )
}
export default BlobLeft;