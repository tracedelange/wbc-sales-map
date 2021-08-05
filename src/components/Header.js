import logo from '../assets/images/wbc_sailwhite.png';
import PremiseFilter from './PremiseFilter';
import ProductFilter from './ProductFilter'

const Header = ({handleFilterItemClick, productFilterState, handlePremiseClick, premiseFilterState }) => {

    return (
        <div id="header">
            <a href='https://www.waconiabrewing.com'>
                <img id='logo' src={logo} alt="logo" />
            </a>
            <h1>Where To Find Us</h1>

            <div id='filter'>
                <ProductFilter
                    productFilterState={productFilterState}
                    handleFilterItemClick={handleFilterItemClick}
                />
            </div>
            <div id='premise-filter'>
                <PremiseFilter premiseFilterState={premiseFilterState} handlePremiseClick={handlePremiseClick} />
            </div>
        </div>
    )
}

export default Header;