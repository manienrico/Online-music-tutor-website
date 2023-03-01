import React from 'react'
import {Service} from '../../components/index'
import './services.css'


function Services() {
  return (
    <div className='app__services' id='services'>
      <div className="app__services-left">
        Services
      </div>
      <div className="app__services-right">
        <h3>Lesson</h3>
        <Service title="Beginner" />
        <Service title="Intermediate" />
        <Service title="Advanced" />
      </div>
    </div>
  )
}

export default Services