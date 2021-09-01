import React, { useState } from 'react'
import './index.css'

import { Carousel } from 'react-bootstrap'

import noteTaker from '../../images/noteTaker.jpg'
import techBlog from '../../images/techBlog.jpg'
import weatherApp from '../../images/weatherApp.png'
import petPlacer from '../../images/petPlacer.jpg'
import schedular from '../../images/schedular.png'
import fitnessTracker from '../../images/fitnessTracker.png'



function MyWork() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <div className="carouselCard">
                <div className="descriptionText">
                    <h3>Fitness Tracker</h3>
                    <p>A way to co create workouts and track your fitness progress.</p>
                    <a href="https://github.com/Trhines/Fitness-Tracker">Github</a>
                </div>
                  <a href="https://frozen-brook-08177.herokuapp.com/">
                    <img
                    className="carouselImg"
                    src={fitnessTracker}
                    alt="First slide"
                    />
                  </a>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <div className="carouselCard">
                <div className="descriptionText">
                    <h3>Tech Blog</h3>
                    <p>A simple blog website where you can create and edit posts and comments.</p>
                    <a href="https://github.com/Trhines/Tech-Blog">Github</a>
                </div>
                  <a href="https://techblogwebsite.herokuapp.com/">
                    <img
                    className="carouselImg"
                    src={techBlog}
                    alt="First slide"
                    />
                  </a>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <div className="carouselCard">
                <div className="descriptionText">
                    <h3>Online schedular</h3>
                    <p>A planner to keep track of today's events.</p>
                    <a href="https://github.com/Trhines/scheduler">Github</a>
                </div>
                  <a href="https://trhines.github.io/scheduler/">
                    <img
                    className="carouselImg"
                    src={schedular}
                    alt="First slide"
                    />
                  </a>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <div className="carouselCard">
                <div className="descriptionText">
                    <h3>Pet Placer</h3>
                    <p>A tinder style matching app to help you adopt your next pet.</p>
                    <a href="https://github.com/Trhines/PetPlacer">Github</a>
                </div>
                  <a href="https://desolate-badlands-34327.herokuapp.com/#general">
                    <img
                    className="carouselImg"
                    src={petPlacer}
                    alt="First slide"
                    />
                  </a>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <div className="carouselCard">
                <div className="descriptionText">
                    <h3>Note Taker</h3>
                    <p>A simple tool to create and keep track of notes.</p>
                    <a href="https://github.com/Trhines/Note-taker.git">Github</a>
                </div>
                  <a href="https://obscure-savannah-02455.herokuapp.com/">
                    <img
                    className="carouselImg"
                    src={noteTaker}
                    alt="First slide"
                    />
                  </a>
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <div className="carouselCard">
                <div className="descriptionText">
                    <h3>Weather Dashboard</h3>
                    <p>This app displays weather forcasts form cities around the world.</p>
                    <a href="https://github.com/Trhines/weather-dashboard">Github</a>
                </div>
                  <a href="https://trhines.github.io/weather-dashboard/">
                    <img
                    className="carouselImg"
                    src={weatherApp}
                    alt="First slide"
                    />
                  </a>
            </div>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default MyWork