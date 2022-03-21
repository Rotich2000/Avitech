import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import Service from '../Service'
import '../Services.css'

const Services = () => {
  return (
    <div> 
      {/* <h1 className="services">SERVICES</h1> */}
      <div className="wrapper">
      <Service
      img="/images/package.jpeg"
      title="Packages"
      description="Get your packages at affordable prices"/>
      <Service
      img="/images/cctv.jpg"
      title="CCTV"
      description="Get your packages at affordable prices"/>
      <Service
      img="/images/optical.jpg"
      title="Optical fibres"
      description="Get your packages at affordable prices"/>
      <Service
      img="/images/photo11.jpg"
      title="iot"
      description="Get your packages at affordable prices"/>
      <Service
      img="/images/photo6.jpg"
      title="Routing"
      description="Get your packages at affordable prices"/>
      <Service
      img="/images/electric.jpg"
      title="electric fences"
      description="Get your packages at affordable prices"/>
      <Service
      img="/images/photo7.jpg"
      title="hosting"
      description="Get your packages at affordable prices"/>
      <Service
      img="/images/photo5.jpg"
      title="technical support"
      description="Get your packages at affordable prices"/>
      </div>
      <Footer/>
    </div>
  )
}

export default Services
