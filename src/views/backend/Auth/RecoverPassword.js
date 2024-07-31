import React from 'react'
import { Container,Col,Row, Form,Button } from 'react-bootstrap'
import  Card from '../../../components/Card'
import {connect} from "react-redux";
import {getDarkMode} from '../../../store/mode'

//img
import logo from '../../../assets/images/logo.png'
import darklogo from '../../../assets/images/logo-dark.png'



import { useHistory } from 'react-router-dom'

function mapStateToProps(state) {
   return {
       darkMode: getDarkMode(state)
   };
}


const RecoverPassword = (props) => {
    let history =useHistory()

    return (
        <>
        <section className="login-content">
         <Container className="h-100">
            <Row className="align-items-center justify-content-center h-100">
               <Col md="5">
                  <Card className="p-5">
                     <Card.Body>
                        <div className="auth-logo">
                        <img src={logo} className={`img-fluid  rounded-normal  ${!props.darkMode ? 'd-none' : ''}`} alt="logo"/>
                           <img src={darklogo} className={`img-fluid  rounded-normal  ${props.darkMode ? 'd-none' : ''}`} alt="logo"/>
                        </div>
                        <h3 className="mb-3 text-center">Reset Password</h3>
                        <p className="text-center small text-secondary mb-3">You can reset your password here</p>
                        <Form>
                           <Row>
                              <Col lg="12">
                                 <Form.Group >
                                    <Form.Label className="text-secondary">Email</Form.Label>
                                    <Form.Control  type="email" placeholder="Enter Email"/>
                                 </Form.Group >
                              </Col>
                           </Row>
                           <Button type="submit" onClick={() => history.push('/auth/sign-in')} variant="btn btn-primary btn-block">Reset Password</Button>
                        </Form>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </section>
        </>
    )
}

export default connect(mapStateToProps)(RecoverPassword)