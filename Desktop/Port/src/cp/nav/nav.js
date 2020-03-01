import React,{useState} from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Logo from '../../img/log.png'
function Header() {
  const [menu] = useState(
    [ 
      {name:"Home",href:"#home"},
      {name:"Works",href:"#work"},
      {name:"About",href:"#about"},
      {name:"Contact",href:"#contact"}
    ]
  )
  const list = menu.map((item)=>{
    return(
    <Nav.Item className="px-4"><AnchorLink className="nav-link text-light" href={item.href}>{item.name}</AnchorLink></Nav.Item>
    ) 
  })
  
  return (
    <header className="container-fluid header">
       
            <Navbar expand="lg">
                <Navbar.Brand href="#"><img src={Logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="mobile"/>            
                <Navbar.Collapse id="mobile" className="justify-content-end">
                    <Nav className="mr-5">
                        {list}         
                    </Nav>               
                </Navbar.Collapse>
            </Navbar>
            
        
    </header>
  );
}

export default Header;
