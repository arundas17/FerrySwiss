import React from 'react'
import mobileimage from '../../assets/Mianbannerimage.png'
export const Mainbanner = () => {
  return (
    <div className='fs-banner-outer'>
     <div className="fs-banner">
        <div className="fs-banner-count">

        </div>
        <div className="fs-banner-head">FerrySwiss</div>
        <div className="fs-banner-desc">
         FerrySwiss is a digital marketing company focused on building innovative, results-driven products. Our tools are designed to simplify marketing workflows, enhance online 
        </div>
        <div className="fs-banner-button">
          Get startted
        </div>
        <div className="fs-banner-mobile">
          <img src={mobileimage} alt="mobileimage" />
        </div>
     </div>
    </div>
  )
}
