import React,{useState} from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Logo from '../../img/log.png'
function Footer() {
  const [menu] = useState(
    [ 
      {name:"Home",href:"#home"},
      {name:"Works",href:"#work"},
      {name:"About",href:"#about"}
    ]
  )
  const list = menu.map((item)=>{
    return(
    <Nav.Item className="px-4"><AnchorLink className="nav-link text-light lighter" href={item.href}>{item.name}</AnchorLink></Nav.Item>
    ) 
  })
  
  return (
    <footer className="container-fluid p-5">
       
            <Navbar expand="lg" className="justify-content-center">
                <Navbar.Brand href="#"><img src={Logo} /></Navbar.Brand>               
                <Nav className="mr-5">
                    {list}         
                </Nav>
                <label className="lighter copy">
                    Copyright © 2020
                </label>               
               
            </Navbar>        
        
    </footer>
  );
}

export default Footer;
