import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import products from '../products.js'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import useMobileMediaQuery from './hooks/useMobileMediaQuery'
import ProductFilter from './ProductFilter.js';

const useStyles = makeStyles({
  mobile: {
    fontSize: "1vh",
    // maxWidth: '10%',
    padding: '1%',
    fontFamily: 'oswald',
    textAlign: 'center',
    maxWidth: "16vw",
    minWidth: '16vw',
  },
  items: {

    fontFamily: 'oswald',
  },
  static: {
    maxWidth: "16vw",
    minWidth: '16vw',
    textAlign: 'center',
    fontSize: '1vw',
    fontFamily: 'oswald',
    // overflow: 'hide',
  }
})

const SelectedMenuItem = withStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    fontWeight: '500',
    color: 'white',
    '&:hover': {
      backgroundColor: '#bf0000'
    }
  },
}))(MenuItem);


export default function FilterMenu({ handleFilterItemClick, productFilterState }) {

  const isMobile = useMobileMediaQuery()
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleItemClick = (item) => {
    handleFilterItemClick(item)
  };
  const handleClose = (item) => {
    setAnchorEl(null);
  };

  const productMenuItems = products.map((item) => {

    if (productFilterState.includes(item.name)) {
      //Remove from filter list 
      return <SelectedMenuItem className={classes.items} key={item.key} onClick={() => handleItemClick(item.name)}>{item.name}</SelectedMenuItem>

    } else {
      //Add to filter list 
      return <MenuItem className={classes.items} key={item.key} onClick={() => handleItemClick(item.name)}>{item.name}</MenuItem>
    }
  })

  return (
    <div>
      <div id='filter'>
        <Button className={isMobile ? classes.mobile : classes.static} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          {productFilterState.length === 0 ? 'Product Filter' : productFilterState}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem className={classes.items} key='REMOVE' onClick={() => handleItemClick('none')}>{'Clear Filter'}</MenuItem>
          {productMenuItems}

        </Menu>
      </div>
    </div>
  );
}