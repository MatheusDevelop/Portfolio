import React,{useState} from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import Workimg from '../../img/work.png'
import './work.css'
import g2 from '../../img/g2.svg'
import wt from '../../img/templatework.png'
import Logo from '../../img/log.png'
function Work() {
  
  
  return (
    <section id="work"className="container-fluid work mt-5 pb-5 mb-5" style={{background:`url("${Workimg}")`,backgroundSize:'cover',backgroundAttachment:'fixed'}}>
        <Container fluid className="p3">
            <Row >
                <h3 className="work_title">Works<span className="point">:</span></h3>
            </Row>
            <Row className="mt-3 work__box">
                <Col lg>
                    <div className="work__card text-light">
                       
                    </div>
                </Col>
                <Col lg>
                    <div className="work__card work__card--roxo d-flex text-light">
                   
                    </div>
                </Col>
                <Col lg className="work__ps d-flex align-items-end justify-content-center">
                    <label>
                        <img src={g2} className="position-absolute"/>
                        
                        <div className="ps__box">
                            
                            <span className="ps ">Elegancia,<br/> Criatividade <br/><span className="lighter ml-3"> e</span> Tecnologia</span>
                            
                        </div>
                     </label>
                </Col>
            </Row>
            <Row>
                <Col lg="4">
                        <div className="work__card work__card--roxo">
                            
                        </div>
                    </Col>
                    <Col lg>
                        <div className="work__card work__card--grey">
                            
                        </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
}

export default Work;
