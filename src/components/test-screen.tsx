import { FC } from "react";

import './test.css'

import TonightInput from "../UI/Components/input/tonight-input";
import TonightButton from "../UI/Components/button/tonight-button";

const TestScreen: FC = () => {

    return <div className="test-container">
        <div className='testContainer'>
            <TonightInput />
        </div>
        <div className='testContainer'>
            <TonightButton text="Показать 130 товаров"/>
        </div>
    </div>
}

export default TestScreen;