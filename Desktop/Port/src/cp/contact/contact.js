import React,{useState} from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import Ct from '../../img/contact.png'



function Contact() {
  
  
  return (
       <main id="contact" className="container-fluid mt-5 pb-5 mb-5 work" style={{background:`url("${Ct}")`,backgroundSize:'cover',backgroundAttachment:'fixed'}}>
            <Row className="work">
                <h3 className="work_title">Contact<span className="point">:</span></h3>

            </Row>
            <Row>
                <Col lg="5" className="work__card work__card--grey">
                    <span className="contact__tittle">
                        
                    </span>
                </Col>
            </Row>
       </main>
  );
}

export default Contact;
