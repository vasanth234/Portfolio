import React from "react";
import "./testimonials.scss";
import {useState} from 'react'
const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  const [selectedImage,setSelected]=useState()

  const HandleClick = () => {
    document.getElementById('fileInput').click(); // Trigger click on the hidden file input
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Perform any logic with the selected file, e.g., upload or display preview
      console.log("Selected file:", file);
      setSelected(URL.createObjectURL(file))
    }
  };

  return (
    <div className="testimonials" id="testmonials">
      <h1>Testimonials</h1>
      <div className="container">
        {
          data.map((p)=>{
            return (
            <div className={p.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" alt="right arrow" className='left' />
              <img
              className='user'
                src={selectedImage || p.img}
                alt="image"
                onClick={HandleClick}
              />
              <input
                type='file'
                id='fileInput' // Corrected id attribute
                className='user'
                style={{ display: 'none' }}
                onChange={handleFileChange} // Handle file change event
              />
              
              <img className='right' src={p.icon} alt="" />
            </div>
            <div className="center">
             {p.desc}
            </div>
            <div className="bottom">
              <h3>{p.name}</h3>
              <h4>{p.title}</h4>
            </div>
          </div>
            )
          })
        }
        
      </div>
    </div>
  );
};

export default Testimonials;


<input type='file' className='user'/>