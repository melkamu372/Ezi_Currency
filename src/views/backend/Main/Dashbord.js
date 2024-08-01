import React, { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { Card, Container, Row, Col, Nav, Tab, Navbar } from 'react-bootstrap';
import RateTable from './rateTable';
import { get_currency_list } from '../../../services/currenyApi';
import Flag from 'react-world-flags'; // Import Flag component

const Dashbord = () => {
  const [currencyData, setCurrencyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentTime=new Date();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await get_currency_list();
        setCurrencyData(data);
        console.log(data); // Log the API response
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

 

  return (
    <>
      <div className="mb-5 iq-top-navbar w-100">
        <div className="iq-navbar-custom w-100">
          <Navbar expand="lg" className="navbar-light p-0 w-100">
            <Col md="12" className="mb-4 mt-3 w-100">
              <div className="d-flex flex-wrap justify-content-center align-items-center w-100">
                <h5 className="font-weight-bold text-center w-100">
                  Foreign Exchange Market Rates for Major Currencies Against Ethiopian BIRR (ETB)
                </h5>
              </div>
            </Col>
          </Navbar>
        </div>
      </div>
      <Container fluid className="mt-5" >
      <Row className="mb-5"></Row>

      <Tab.Container defaultActiveKey="USD">
     <Nav variant="tabs"  className="justify-content-center">

     {currencyData.map((currency) => (
                    <Nav.Item key={currency.code} >
                      <Nav.Link eventKey={currency.code} className="text-center">
                            <Flag
                                code={currency.flag}
                                style={{ width: '60px', height: '20px', objectFit: 'contain' }}
                              />
                              <p className="txt-center">{currency.code}</p>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
      
   </Nav>
   <Tab.Content>
                {currencyData.map((currency) => (
                  <Tab.Pane eventKey={currency.code} key={currency.code}>
                    <RateTable currency={currency.code} name={currency.name} day={currentTime}/>
                  </Tab.Pane>
                ))}
              </Tab.Content>
</Tab.Container>
      </Container>
    </>
  );
};

export default Dashbord;
