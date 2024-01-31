import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Home() {
  const data = useFetch("https://dummyjson.com/products")
  // console.log(data)
  const dispatch=useDispatch()
  return (
    <div>  
      <div>
        <p></p>
      </div>
      <Row className='ms-5' style={{marginTop:'100px'}}>
      {
        data?.length>0.?data?.map((products,index)=>(
          <Col className='mb-5' sm={12} md={6} lg={4} xl ={3}>
          <Card className='bg-light' style={{ width: '18rem',height:'32rem' }}>
      <Card.Img style={{height:"200px"}} variant="top" src={products.thumbnail}/>
      <Card.Body >
        <Card.Title className='text-black'>{products.title}</Card.Title>
        <Card.Text className='text-dark'>{products.description.slice(0,60)}</Card.Text>
        <Card.Text className='text-danger' style={{fontSize:'30px',fontWeight:'700'}}>{products.price}$</Card.Text>
        <Button onClick={()=>dispatch(addToCart(products))} className='btn btn-warning' variant="primary"> <i class="fa-solid fa-cart-shopping fa-bounce"></i> Add to Cart</Button>
        <button onClick={()=>dispatch(addToWishlist(products))} className='ms-5'  variant="primary" style={{backgroundColor:'transparent',border:'2px transparent'}}> <span className='text-danger'><i class="fa-solid fa-heart fa fa-xl" ></i> </span></button>
      </Card.Body>
        </Card>
          </Col>  
        )): <p className='text-danger fs-4'>Nothing to Display</p>
      }
      </Row>   
</div>
)
}

export default Home