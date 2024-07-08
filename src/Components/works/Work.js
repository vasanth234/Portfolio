import React, { useState } from 'react';
import './work.scss';

const Work = () => {
  const [currentIndex, setIndex] = useState(0);

  const handleClick = (way) => {
    way==='left' ? setIndex(currentIndex>0 ? currentIndex-1 : 2) :
    setIndex(currentIndex<data.length-1 ? currentIndex+1 : 0)
  };

  const data = [
    {
      id: '1',
      icon: './assets/mobile.png',
      title: 'Web Design',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930',
    },
    {
      id: '2',
      icon: './assets/globe.png',
      title: 'Mobile Application',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: 'https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg',
    },
    {
      id: '3',
      icon: './assets/writing.png',
      title: 'Branding',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: 'https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg',
    },
  ];

  return (
    <div className='work' id='works'>
      <div className='slider'>
        {data.map((item, index) => (
          <div className={index === currentIndex ? 'container active' : 'container'} key={item.id}>
            <div className='item'>
              <div className='left'>
                <div className='leftcontainer'>
                  <div className='imgcontainer'>
                    <img src={item.icon} alt='mobile pic' />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <span>projects</span>
                </div>
              </div>
              <div className='right'>
                <div className='imgcontainer'>
                  <img src={item.img} alt='combination of html javascript css' />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src='/assets/arrow.png' className='arrow left' onClick={() => handleClick('left')} alt='image of arrow' />
      <img src='/assets/arrow.png' className='arrow right' onClick={() => handleClick('right')} alt='image of arrow' />
    </div>
  );
};

export default Work;
