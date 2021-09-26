import React from 'react'
import {CgGym} from 'react-icons/cg'
import './style.css'

const Footer = () => {
    return (
        <>
          <div className="footer">
              <div className="info">
              &#169; G-ON. All Rights Reserved By FitnessStudio
              </div>
              <div className="info divcenter">
                Keep<CgGym/>Going
              </div>
              <div className="info">
              Terms & Conditions | Privacy Policy
              </div>
          </div>  
        </>
    )
}

export default Footer
