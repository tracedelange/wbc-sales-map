import logo from '../assets/images/wbc_sailwhite.png';
import ProductFilter from './ProductFilter'

const Header = ({handleFilterItemClick, productFilterState }) => {

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
        </div>
    )
}

export default Header;