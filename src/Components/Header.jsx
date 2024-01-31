import React from 'react'
import { Badge, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <div>
    <Navbar style={{zIndex:1}} bg="black" className='position-fixed top-0 w-100' data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{color:'Orange',fontSize:'45px',fontWeight:'700'}}><Link to ={'/'} style={{color:'blue'}}></Link><i class="fa-solid fa-truck-arrow-right fa-fade"></i>$peedC@rt</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link><Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}> <span className='text-danger'><i class="fa-solid fa-heart fa-bounce" ></i> </span> Wishlist <Badge className='bg-success'>{wishlist.length}</Badge></Link></Nav.Link>
            <Nav.Link><Link to={'/cart'} style={{textDecoration:'none',color:'white'}}> <span className='text-danger'><i class="fa-solid fa-cart-shopping fa-bounce"></i></span> Cart <Badge className='bg-success'>{cart.length}</Badge></Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header