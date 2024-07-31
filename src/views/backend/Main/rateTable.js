import React from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import Card from '../../../components/Card';
import bankRates from './bankRates.json'; // Import the JSON data

// Import images
import cbe from '../../../assets/cbe.png';
import amara from '../../../assets/amara.png';
import ahadu from '../../../assets/ahadu.png';
import addis from '../../../assets/addis.png';
import abay from '../../../assets/abay.png';
import awash from '../../../assets/awsh.png';
import abyssinia from '../../../assets/abyssinia.png';
import birhan from '../../../assets/birhan.png';
import buna from '../../../assets/buna.png';
import coop from '../../../assets/coop.png';
import enat from '../../../assets/enat.png';
import dashen from '../../../assets/dashen.png';
//import awash from '../../../assets/awsh.png';
const logoMap = {
  cbe,
  amara,
  ahadu,
  addis,
  abay,
  awash,
  abyssinia,birhan, buna,coop,enat,dashen
};

const RateTable = ({ currency = 'USD' }) => {
  return (
    <Container fluid>
      <Row>
        <Col lg="12" md="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h5 className="card-title">
                  {currency} Exchange Market Rates In Ethiopian Banks Against Ethiopian BIRR (ETB)
                </h5>
              </div>
              <div className="card-header-toolbar d-flex align-items-center">
                <Dropdown>
                  <Dropdown.Toggle
                    href="#"
                    variant="text-muted pl-3"
                    id="dropdownMenuButton-customer"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                      focusable="false"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </g>
                    </svg>
                  </Dropdown.Toggle>
                </Dropdown>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead className="table-color-heading">
                    <tr className="text-secondary">
                      <th scope="col">Bank</th>
                      <th scope="col">Cash Buying</th>
                      <th scope="col">Cash Selling</th>
                      <th scope="col">Transactional Buying</th>
                      <th scope="col">Transactional Selling</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bankRates
                      .filter(bank => bank.currencies.some(currencyData => currencyData.name === currency))
                      .map((bank, index) =>
                        bank.currencies
                          .filter(currencyData => currencyData.name === currency)
                          .map((currencyData, currencyIndex) => (
                            <tr className="white-space-no-wrap" key={`${index}-${currencyIndex}`}>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="avatar-45 mr-2">
                                    <img
                                      src={logoMap[bank.logo]}
                                      className="img-fluid rounded-circle"
                                      alt={bank.name}
                                    />
                                  </div>
                                  <div>{bank.name}</div>
                                </div>
                              </td>
                              <td className="text-center">{currencyData.buy || 'N/A'}</td>
                              <td className="text-center">{currencyData.sell || 'N/A'}</td>
                              <td className="text-center">{currencyData.tBuy || 'N/A'}</td>
                              <td className="text-center">{currencyData.tSell || 'N/A'}</td>
                            </tr>
                          ))
                      )}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RateTable;
