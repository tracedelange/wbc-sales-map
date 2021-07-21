import logo from '../assets/images/wbc_sailwhite.png';
import months from '../months.js'

import ProductFilter from './ProductFilter'
import {useState} from 'react'


const Header = ({displayMonth, displayState, handleButtonClick, handleFilterItemClick, productFilterState}) => {

    

    return (

        <div id="header">

            <img src={logo} alt="logo"/>


        <h1>Where To Find Us</h1>
        {/* < Checkboxes  /> */}
        {/* <button onClick={handleMonthClick} className='btn' id='month-btn'>{months[displayMonth]}</button> */}
        {/* <h2> {months[displayMonth]} </h2> */}

        <div id='filter'>
            <ProductFilter
            productFilterState={productFilterState}
            handleFilterItemClick={handleFilterItemClick}
            />
        </div>


        {/* <div>
            <label htmlFor="premiseButton"> Premise Sale Type </label>
            <button onClick={handleButtonClick} id='premiseButton' name="premiseButton" className='btn'>{displayState}</button>
        </div> */}


        </div>
    )
}

export default Header;