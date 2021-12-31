import logo from '../assets/images/wbc_sailwhite.png';
import PremiseFilter from './filter/PremiseFilter';
import ProductFilter from './filter/ProductFilter'


const Header = () => {

    return (
        <div id="header">
            <div>
                <a href='https://www.waconiabrewing.com'>
                    <img id='logo' src={logo} alt="logo" />
                </a>
            </div>
            <div>
                <h1 className='header-logo'>Where To Find Us</h1>

            </div>

            <div className='filter-container'>

                <ProductFilter />
                <PremiseFilter />


            </div>
        </div>
    )
}

export default Header;