import React,{useRef, useEffect} from "react";
import './index.css';
import gsap from 'gsap'

const BlobRight = () => {
  const wrapper = useRef(null);
  
  useEffect(()=>{
    const [elements] = wrapper.current.children;

    const particles = elements.getElementById('particles')
    gsap.set([...particles.children], {autoAlpha: 0});
    
    const tl = gsap.timeline({defaults: {ease: 'power3.inOut'},paused:true, reversed: true})

    tl.to(particles.children, {duration:2.5, autoAlpha:1, stagger: 0.3})
       .fromTo(particles.children, {scale: 1}, {duration:2, scale: 0 , stagger:0.2}, '-=0.15').repeat(-1).repeatDelay(1)

    if (tl.reversed()) {
        tl.play();
    } else {
        tl.reverse();
    }
  })

  return(
    <div className="blobRight" ref={wrapper}>
      <svg className="blobRight" viewBox="0 0 420 627" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="right">
          <path id="Vector 2" d="M215 83C144.833 76.8333 3.9 51.8 1.5 1H421V625.5H410C392.8 628.3 383.833 595.333 381.5 578.5C372.833 550.167 345.6 492.8 306 490C266.4 487.2 249.5 447.5 246 428C237 408.333 233.9 340.5 293.5 226.5C353.1 112.5 266 83.3333 215 83Z" fill="#0B3D91" stroke="#0B3D91"/>
          <g id="particles">
            <circle id="Ellipse 7" r="12.5" transform="matrix(-1 0 0 1 59.5 120.5)" fill="#0B3D91"/>
            <circle id="Ellipse 13" cx="247.5" cy="149.5" r="22.5" fill="#0B3D91"/>
            <circle id="Ellipse 14" r="7.5" transform="matrix(-1 0 0 1 155.5 478.5)" fill="#0B3D91"/>
            <circle id="Ellipse 17" r="7.5" transform="matrix(-1 0 0 1 211.5 313.5)" fill="#0B3D91"/>
            <circle id="Ellipse 10" r="7.5" transform="matrix(-1 0 0 1 86.5 219.5)" fill="#0B3D91"/>
            <circle id="Ellipse 11" r="7.5" transform="matrix(-1 0 0 1 39.5 82.5)" fill="#0B3D91"/>
            <circle id="Ellipse 16" cx="193" cy="410" r="15" fill="#0B3D91"/>
            <circle id="Ellipse 15" cx="263" cy="523" r="15" fill="#0B3D91"/>
            <circle id="Ellipse 12" cx="178" cy="253" r="15" fill="#0B3D91"/>
            <path id="Ellipse 8" d="M172 124C172 140.569 158.569 154 142 154C125.431 154 112 140.569 112 124C112 107.431 125.431 94 142 94C158.569 94 172 107.431 172 124Z" fill="#0B3D91"/>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default BlobRight;