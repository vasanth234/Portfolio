import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import './intro.scss';

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    if (textRef.current) {
      init(textRef.current, {
        showCursor: true,
        strings: ['Developer', 'Designer', 'Content Creator'],
        typeSpeed: 100, // Optional: Typing speed in milliseconds
        startDelay: 500, // Optional: Delay before typing starts
        backSpeed: 50, // Optional: Backspacing speed in milliseconds
        backDelay: 1500 // Optional: Delay before backspacing starts
      });
    }
  }, []);

  return (
    <div className="Intro" id="intro">
      <div className="left">
        <div className="imgcontainer">
          <img src="/assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Vasanth Pippari</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
