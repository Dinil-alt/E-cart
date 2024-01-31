import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice'
import cart from './—Pngtree—empty cartoon box_4696031.png'
function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch()
  const [total,setTotal] = useState(0)
  const navigate= useNavigate();
  const getCartTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }
  useEffect(()=>{
    getCartTotal()
  },[cartArray])

  const handleCart = ()=>{
    dispatch(emptyCart())
    alert('Order Placed')
    navigate('/')
  }

  return (
    <div style={{marginTop:'180px'}}>
      <div style={{textAlign:"center"}}>
            {
              cartArray.length>0?
              <div className='row mt-5'>
                  <div className='col-lg-8'>
                    
                  </div>
                  <div className='col-lg-1'></div>
                  <div className='col-lg-3'>
                    <div className='border mt-3 rounded shadow p-2 w-100'>
                      <h2 className='text-primary'>Cart Summary</h2>
                      <h4>Total Products : <span className='text-danger'>{cartArray.length}</span></h4>
                      <h4 className='mt-3'>Total: <span className='text-danger'>{total} $</span></h4>
                      <div>
                        <button className='btn btn-success' onClick={handleCart}>Check Out</button>
                      </div>
                    </div>
                  </div>
              </div>: <p></p>
            }
      </div>
        <Table style={{marginTop:'50px'}} striped bordered hover>
        <thead>
          <tr>
            <th>Product id</th>
            <th>Product Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{
                  cartArray.length>0.?cartArray?.map((products,index)=>(
                    <tr>
                      <td>{products.id}</td>
                    <td>{products.title}</td>
                      <td><img height={150} width={150} style={{borderRadius:'15px'}} src={products.thumbnail} alt="" /></td>
                      <td>{products.price}$</td>
                      <td><button className='btn btn-danger' onClick={()=>dispatch(removeFromCart(products.id))}>Delete</button></td>
                    </tr>)): <div style={{height:'100vh'}}>
              <h3>Oops!! cart is empty</h3>
              <Link to={'/'} style={{textDecoration:'none',color:'blue',fontSize:'20px',fontWeight:'600'}}>Back to Home</Link>
      </div>
                }
        </tbody>
      </Table>
    </div>

  )
}

export default Cart