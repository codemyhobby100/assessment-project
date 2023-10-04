import React from 'react';
import './About.css';
import { FaHome } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';


const About = () => {
  return (
    <div className="about-wrapper">
        <div className="container">
            <div className="about-container">
                <div className="card-grid">
                    <div className="card">
                        <div className="icon"><FaHome/></div>
                        <h2>Indoor Games</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                             Porro amet non quisquam magni ipsum velit maxime asperiores quam.
                             Rerum architecto tenetur odio nesciunt reiciendis velit, itaque labore quam ducimus asperiores?
                        </p>
                    </div>

                    <div className="card">
                        <div className="icon"><BsPersonFill/></div>
                        <h2>Outdoor Games And Events</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                             Porro amet non quisquam magni ipsum velit maxime asperiores quam.
                             Rerum architecto tenetur odio nesciunt reiciendis velit, itaque labore quam ducimus asperiores?
                        </p>
                    </div>

                    <div className="card">
                        <div className="icon"><IoMdSettings/></div>
                        <h2>Camping For Kids</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Porro amet non quisquam magni ipsum velit maxime asperiores quam.
                            Rerum architecto tenetur odio nesciunt reiciendis velit, itaque labore quam ducimus asperiores?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default About