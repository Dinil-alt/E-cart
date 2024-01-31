import React from 'react'
import { Link } from 'react-router-dom';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
        <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Subscribe just by giving your e-mail id!!</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' placeholder='Enter your e-mail' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn color='success' type='submit' className='mb-4' >
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>


        <section className=''>
          <MDBRow>

            <MDBCol>
            <section>
          <p>
            speedCart gives you the oppurtunity to buy anything just through your mobile or any device. And within 3 days it will delivered securely to the given address.
          </p>
        </section>
            </MDBCol> 
            

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h6 className='text-uppercase'>Get to know about our Company</h6>

              <ul className='list-unstyled mb-0 '>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-white'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-white'>
                    Careers
                  </a>
                </li>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-white'>
                    Connect to us
                  </a>
                </li>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-white'>
                    Contact Us
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h6 className='text-uppercase'>Guides</h6>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-white'>
                    React
                  </a>
                </li>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' style={{textDecoration:'none'}} className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://speedCart.com/'>
          speedCart.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer