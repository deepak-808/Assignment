import React from 'react'
import { aboutus } from '../../data/data'
import Common from './common/Common'

const About = () => {
    return (
        <div>
            <Common
        imgcng={aboutus}
        btname={"Connect Now"}
        h1title={"Welcome to About page with"}
        h6title={"We are the team of talented developer making websites"}
        visit={"/contact"}
      />
            <div className='mt-3'>

            </div>
        </div>
    )
}

export default About
