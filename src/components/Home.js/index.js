import React from "react";
import { MDBJumbotron, MDBBtn, MDBCardBody, MDBCardTitle } from "mdbreact";
import Typewriter from 'typewriter-effect';
import './style.css'

const Home = ({ id }) => {
  return (
    <MDBJumbotron id='home' fluid className="p-0 m-0">
      <MDBCardBody className="img-fluid dn-home-face row">
        <div className='dn-home-infor '>
          <div className="image-thumbnail" />
          <MDBCardTitle className="h1">It's me, Dung Ngo. </MDBCardTitle>

          <div className='h3' style={{ 'color': 'orange' }}>
            <Typewriter options={{
              strings: ['A FullStack Software Engineer', 'Actively looking for Internship', "Contact Below"],
              autoStart: true,
              loop: true,
              delay: 80,
            }}>
            </Typewriter>
          </div>

          <blockquote className="text-center" style={{ 'margin': '20px 0px' }}>
            <p className="mb-0">“All our dreams can come true, if we have the courage to pursue them.”</p>
            <footer className="blockquote-footer"><cite title="Source Title">Walt Disney</cite></footer>
          </blockquote>
          <div className='d-flex justify-content-center align-items-center'>
            <MDBBtn href="https://drive.google.com/file/d/1M3kjs2vdyN1SmQ_GUYJZyEg7rVi8EI-p/view?usp=sharing" color='amber' className='btn-download-cv' target='_blank' style={{ 'width': '170px' }}>View Resume</MDBBtn>
          </div>
        </div>
      </MDBCardBody>
    </MDBJumbotron>
  )
}

export default Home;
