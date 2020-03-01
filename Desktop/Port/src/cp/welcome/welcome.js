import React from 'react';
import {Row,Col} from 'react-bootstrap'
import './welcome.css'
import Img from '../../img/welcome.jpeg'
import g1 from '../../img/g4.svg'
import arrows from '../../img/arrows.png'

function Welcome() {
  return (
    <section className="container-fluid welcome" id="home">
        <Row>
            <Col lg="7" className="welcome__left d-flex">
                <div className="welcome__clock d-flex  justify-content-between align-items-center">
                    <div className="px-3">
                        Janeiro 2020 10:23
                    </div>
                </div>
                <div className="welcome__img">
                    <img src={Img}/>
                </div>
                <h1>
                    <div className="animation">WEB</div> DEVELOPMENT<span className="point">.</span>
                </h1>
            </Col>
            <Col className="welcome__right d-flex align-items-center pt-5">
                <div className="d-flex">
                    <label className="arrows mx-5">
                        <img src={arrows} className="arrow animated infinite bounce delay-3s"/> 
                    </label>
                    <label className="welcome__right--box">
                        
                        <img src={g1}/>
                     
                        <div className="welcome__right--text">
                            
                             <h2>Olá , me chamo Matheus Barbosa<br/> <span className="lighter">e desenvolvo sistemas.</span></h2>
                            
                        </div>
                    </label>
                </div>
            </Col>
        </Row>
    </section>
  );
}

export default Welcome;
