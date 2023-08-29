import { FC, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";

import styles from '../styles/catalogue.module.css';
import ProductFilter from "./catalogue-components/filter/filter";
import useScreenSize from "../utils/use-screen-size";
import './catalogue.css';
import ProductCard from "../product/product-card";
import { fakeData } from "../../fakedatas/productFakeData";
import FilterOffcanvas from "./catalogue-components/filter/filter-offcanvas";

const Catalogue: FC = () => {
    const screenSize = useScreenSize();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return <>
        <div className={styles.upperContent}>
            <Container fluid className='img-hld-container'>
                <Row>
                    <b className={styles.breadcrumbText}>Главная / Каталог</b>
                </Row>
                <Row>
                    <b className={styles.upperLabel}>Каталог</b>
                </Row>
            </Container>
        </div>

        <Container className={styles.catalogueContent}>
            <Row className={styles.someButtons}>
                <Col className={styles.someButtonsleftCol}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 4.85714H7.875M5.125 4.85714H1M23 19.1429H7.875M5.125 19.1429H1M16.125 12H1M23 12H18.875M6.5 2C6.86467 2 7.21441 2.15051 7.47227 2.41842C7.73013 2.68633 7.875 3.04969 7.875 3.42857V6.28571C7.875 6.6646 7.73013 7.02796 7.47227 7.29587C7.21441 7.56378 6.86467 7.71429 6.5 7.71429C6.13533 7.71429 5.78559 7.56378 5.52773 7.29587C5.26987 7.02796 5.125 6.6646 5.125 6.28571V3.42857C5.125 3.04969 5.26987 2.68633 5.52773 2.41842C5.78559 2.15051 6.13533 2 6.5 2ZM6.5 16.2857C6.86467 16.2857 7.21441 16.4362 7.47227 16.7041C7.73013 16.972 7.875 17.3354 7.875 17.7143V20.5714C7.875 20.9503 7.73013 21.3137 7.47227 21.5816C7.21441 21.8495 6.86467 22 6.5 22C6.13533 22 5.78559 21.8495 5.52773 21.5816C5.26987 21.3137 5.125 20.9503 5.125 20.5714V17.7143C5.125 17.3354 5.26987 16.972 5.52773 16.7041C5.78559 16.4362 6.13533 16.2857 6.5 16.2857ZM17.5 9.14286C17.8647 9.14286 18.2144 9.29337 18.4723 9.56128C18.7301 9.82919 18.875 10.1925 18.875 10.5714V13.4286C18.875 13.8075 18.7301 14.1708 18.4723 14.4387C18.2144 14.7066 17.8647 14.8571 17.5 14.8571C17.1353 14.8571 16.7856 14.7066 16.5277 14.4387C16.2699 14.1708 16.125 13.8075 16.125 13.4286V10.5714C16.125 10.1925 16.2699 9.82919 16.5277 9.56128C16.7856 9.29337 17.1353 9.14286 17.5 9.14286Z" stroke="#1E1E1E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    { screenSize.width <= 1247 ? <>
                            <div className='leftFilterLabel'><span onClick={handleShow}>Фильтры</span></div>
                            <FilterOffcanvas handleClose={handleClose} show={show}/>
                        </>
                        :
                        <div className='leftFilterLabel'>Фильтры</div>
                    }
                </Col>
                <Col>
                    <NavDropdown className={styles.someButtonsRightCol}
                        id="nav-dropdown-dark-example"
                        title={ <>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 4H1M23 12H9.25M23 20H17.5" stroke="#1E1E1E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <div className='rightFilterLabel'>По популярности</div>
                            </>
                        }
                        menuVariant="dark"
                    >
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>                    
                </Col>
            </Row>
            <div className="row">
                {screenSize.width <= 1247 ? <></> :
                    <div className="col-3"> 
                        <ProductFilter />
                    </div>
                }
                {screenSize.width <= 1247 ? 
                    <div className="col">
                        <div className={styles.productsWrapper}>
                            {fakeData.map((item) => (
                                <ProductCard key={item.id} {...item}/>
                            ))}
                        </div>
                    </div>
                    :
                    <div className="col-9">
                        <div className={styles.productsWrapper}>
                            {fakeData.map((item) => (
                                <ProductCard key={item.id} {...item}/>
                            ))}
                        </div>
                    </div>
                }
            </div>
        </Container>
        
    </>
}

export default Catalogue;