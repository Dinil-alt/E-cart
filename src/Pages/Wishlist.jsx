import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import cart from "./—Pngtree—empty cartoon box_4696031.png"
import {removeFromWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  const handleWishlistCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }
  return (
    <Row className='ms-5' style={{marginTop:'100px'}}>
    {
      wishlistArray.length>0.?wishlistArray?.map((products,index)=>(
        <Col className='mb-5' sm={12} md={6} lg={4} xl ={3}>
        <Card className='bg-light' style={{ width: '18rem',height:'32rem' }}>
    <Card.Img style={{height:"200px"}} variant="top" src={products.thumbnail}/>
    <Card.Body >
      <Card.Title className='text-black'>{products.title}</Card.Title>
      <Card.Text className='text-dark'>{products.description.slice(0,60)}</Card.Text>
      <Card.Text className='text-danger' style={{fontSize:'30px',fontWeight:'700'}}>{products.price}$</Card.Text>
      <Button onClick={()=>dispatch(removeFromWishlist(products.id))} className='btn btn-center btn-danger' variant="primary"> <i class="fa-solid fa-bin fa-bounce"></i> Delete</Button>
      <Button onClick={()=>dispatch(addToCart(products) && removeFromWishlist(products.id))} className='btn btn-center btn-success ms-2' variant="primary"> <i class="fa-solid fa-bin fa-bounce"></i> Add to Cart</Button>
    </Card.Body>
      </Card>
        </Col>  
      )): <div style={{height:'100vh'}}>
              <img src={cart} height={400} alt="" />
              <h3>Oops!! Wishlist is empty</h3>
              <Link to={'/'} style={{textDecoration:'none',color:'blue',fontSize:'20px',fontWeight:'600'}}>Back to Home</Link>
      </div>
    }
    </Row>   
  )
}

export default Wishlist