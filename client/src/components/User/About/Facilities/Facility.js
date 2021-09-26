import React from 'react'
import image from './facilityimg.jpg'
import './style.css'
import {Link} from 'react-router-dom'
const Facility = () => {
    return (
        <>
          <div className="facilityheading">
          <h1 className="m-bottom heading">Our Facility</h1>
         </div> 
              <div className="row">
                  <div className="imagediv child">  
                    <img src={image} alt="gymImage"  />
                  </div>
                  <div className="textdiv child">
                        <p>The gym is located at 305 Cherokee Street adjacent to The Brumby Lofts. Parking is easy with over 30 dedicated spaces.</p>
                        <p>Our 6,000 square feet of space is outfitted with full men and women ADA compliant locker rooms with multiple showers and private changing space.</p>
                        <p>We are equipped with 1000 square feet of turf, certified IPF ER racks, barbells, iron plates, bumper plates, plyometric boxes. We created a locally built custom pull-up rig, sleds and prowlers. We use gymnastics rings and stall bars, standard and competition kettlebells, medicine balls, and sandbags.</p>
              <div className="btn">
                <Link to='/'><button>Join Now</button></Link>
              </div>
                  </div>
                 
              </div>
        </>
    )
}

export default Facility
