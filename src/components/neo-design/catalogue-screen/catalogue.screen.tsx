import { FC } from "react";

import layout from '../layout/layout.module.css';
import styles from './catalogue.screen.module.css'
import useScreenSize from "../../utils/use-screen-size";
import CatalogueHeader from "./Components/catalogue-header/catalogue.header";

const CatalogueScreen: FC = () => {
    const screenSize = useScreenSize();

    return <>
        <div className={layout.tonightWrapper}>
            <div className={layout.tonightContainer}>
                <CatalogueHeader />
                <div className={styles.catalogueContentFull}>
                    {screenSize.width < 1248 ? <></> : 
                        <div className={styles.catalogueFilterContainer}>
                            FILTER
                        </div>
                    }
                    <div className={styles.catalogueProductContainer}>
                        PRODUCT CONTENT
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CatalogueScreen;