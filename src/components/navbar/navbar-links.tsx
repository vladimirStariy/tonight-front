import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from '../styles/navbar.module.css';
import Nav from "react-bootstrap/Nav";

interface LinkProps {
    link_type: string;
}

const NavBarLinks: FC<LinkProps> = (props) => {
  return (
    <Nav>
        <ul className={`nav font-manrope ${props.link_type === 'COL' ? styles.zvzcCOL : 'nav-underline ' + styles.zvzcROW }`}>
            <li className="nav-item">
                <Nav.Link to="/catalogue" as={NavLink} className={styles.navLink}>
                    Каталог
                </Nav.Link>
            </li>
            <li className="nav-item">
                <Nav.Link to="/delivery" as={NavLink} className={styles.navLink}>
                    Доставка
                </Nav.Link>
            </li>
            <li className="nav-item">
                <Nav.Link to="/test" as={NavLink} className={styles.navLink}>
                    TEST
                </Nav.Link>
            </li>
            <li className="nav-item">
                <Nav.Link to="/order" as={NavLink} className={styles.navLink}>
                    Под заказ
                </Nav.Link>
            </li>
            <li className="nav-item">
                <Nav.Link to="/innovations" as={NavLink} className={styles.navLink}>
                    Новинки
                </Nav.Link>
            </li>
            <li className="nav-item">
                <Nav.Link to="/stock" as={NavLink} className={styles.navLink}>
                    Скидки
                </Nav.Link>
            </li>
        </ul>
    </Nav>
  )
}

export default NavBarLinks;
