import React from 'react'
import 'react-circular-progressbar/dist/styles.css';
import { Card,Container,Row,Col,Dropdown,Collapse,Tab,Nav,Image,Navbar,minisidbar,Button } from 'react-bootstrap';
import RateTable from './rateTable'
//import ChangeMode from  '../../../Change-Mode'

const Dashbord = () => {
    const formattedDate = new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      });
    return (
 <>
<div className="mb-5 iq-top-navbar ">
    <div className="iq-navbar-custom">
        <Navbar  expand="lg" className="navbar-light p-0">
            <Col md="12" className="mb-4 mt-3">
          <div className="d-flex flex-wrap justify-content-center align-items-center">
        <h5 className="font-weight-bold text-center">
          {formattedDate} Foreign Exchange Market Rates for Major Currencies Against Ethiopian BIRR (ETB)
        </h5>
      </div>
      </Col>
        </Navbar>
    </div>
</div>
<Container fluid className="mt-5">
<Row className="mt-5">
<Col md="12" className="mt-5">
<Tab.Container defaultActiveKey="USD" className="mt-5">
   <Nav variant="pills mb-5" fill>
      <Nav.Item>
         <Nav.Link eventKey="USD">
        <Card className="text-center">
      <Card.Body>
        <div className="d-flex flex-column align-items-center">
          <Image
            src="https://flagsapi.com/US/flat/64.png"
            fluid
            rounded
            alt="USD Flag"
          />
          <h5 className="mt-1 mb-0 font-weight-bold">USD</h5>
        </div>
      </Card.Body>
    </Card>
         </Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey="EUR">
         <Card className="text-center">
      <Card.Body>
        <div className="d-flex flex-column align-items-center">
          <Image
            src="https://flagsapi.com/ER/flat/64.png"
            fluid
            rounded
            alt="USD Flag"
          />
          <h5 className="mt-1 mb-0 font-weight-bold">EUR</h5>
        </div>
      </Card.Body>
    </Card>

         </Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey="GBP">
         <Card className="text-center">
      <Card.Body>
        <div className="d-flex flex-column align-items-center">
          <Image
            src="https://flagsapi.com/GB/flat/64.png"
            fluid
            rounded
            alt="USD Flag"
          />
          <h5 className="mt-1 mb-0 font-weight-bold">GBP</h5>
        </div>
      </Card.Body>
    </Card>
        
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
         <Nav.Link eventKey="CAD">
         <Card className="text-center">
      <Card.Body>
        <div className="d-flex flex-column align-items-center">
          <Image
            src="https://flagsapi.com/CA/flat/64.png"
            fluid
            rounded
            alt="USD Flag"
          />
          <h5 className="mt-1 mb-0 font-weight-bold">CAD</h5>
        </div>
      </Card.Body>
    </Card>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey="SAR">
         <Card className="text-center">
      <Card.Body>
        <div className="d-flex flex-column align-items-center">
          <Image
            src="https://flagsapi.com/SA/flat/64.png"
            fluid
            rounded
            alt="SAR"
          />
          <h5 className="mt-1 mb-0 font-weight-bold">SAR</h5>
        </div>
      </Card.Body>
    </Card> 
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey="AED">
         <Card className="text-center">
      <Card.Body>
        <div className="d-flex flex-column align-items-center">
          <Image
            src="https://flagsapi.com/AE/flat/64.png"
            fluid
            rounded
            alt="AED"
          />
          <h6 className="mt-1 mb-0 font-weight-bold">AED</h6>
        </div>
      </Card.Body>
    </Card>
        
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey="CNY">
         <Card className="text-center">
      <Card.Body>
        <div className="d-flex flex-column align-items-center">
          <Image
            src="https://flagsapi.com/CN/flat/64.png"
            fluid
            rounded
            alt="CNY"
          />
          <h5 className="mt-1 mb-0 font-weight-bold">CNY</h5>
        </div>
      </Card.Body>
    </Card>
        </Nav.Link>
      </Nav.Item>
   </Nav>

   <Tab.Content>
      <Tab.Pane eventKey="USD">
      <RateTable currency="USD"/>
      </Tab.Pane>

      <Tab.Pane eventKey="EUR">
      <RateTable currency="EUR"/>
      </Tab.Pane>


      <Tab.Pane eventKey="GBP">
      <RateTable currency="GBP"/>
      </Tab.Pane>


     <Tab.Pane eventKey="CAD">
      <RateTable currency="CAD"/>
      </Tab.Pane>

      <Tab.Pane eventKey="SAR">
      <RateTable currency="SAR"/>
      </Tab.Pane>

      <Tab.Pane eventKey="AED">
      <RateTable currency="AED"/>
      </Tab.Pane>

      <Tab.Pane eventKey="CNY">
      <RateTable currency="CNY"/>
      </Tab.Pane>
      </Tab.Content>
</Tab.Container>
</Col>
</Row>
</Container>
</>
    ) 
}
export default Dashbord;