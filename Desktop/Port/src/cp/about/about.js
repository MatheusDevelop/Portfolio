import React,{useState} from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import Aboutimg from '../../img/about.png'

import g4 from '../../img/g4.svg'
function About() {
  
  
  return (
    <section id="about"className="container-fluid work mt-5 pb-5 mb-5" style={{background:`url("${Aboutimg}")`,backgroundSize:'cover',backgroundAttachment:'fixed'}}>
        <Container fluid className="p4">
            <Row className="justify-content-end">
                <h3 className="work_title">About<span className="point">:</span></h3>
            </Row>
            <Row className="mt-3 work__box">
                <Col lg className="work__ps d-flex align-items-end justify-content-center">
                    <label>
                        <img src={g4} className="position-absolute"/>
                        
                        <div className="ps__box">
                            
                            <span className="ps ">Eficiencia,<br/> Qualidade <br/><span className="lighter ml-3"> e</span> Confiança</span>
                            
                        </div>
                     </label>
                </Col>
                <Col lg>
                    <div className="work__card">
                         
                    </div>
                </Col>
                <Col lg>
                    <div className="work__card">
                         
                    </div>
                </Col>
                
            </Row>
            <Row>
                <Col>
                        <div className="work__card">
                            
                        </div>
                    </Col>
                    <Col lg>
                        <div className="work__card">
                            
                        </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
}

export default About;
