import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import products from '../products.js'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import useMobileMediaQuery from './hooks/useMobileMediaQuery'

const useStyles = makeStyles({
  mobile: {
    fontSize: 13,
    fontFamily: 'oswald',
  },
  items: {

    fontFamily: 'oswald',
  },
  static: {
    fontSize: 25,
    fontFamily: 'oswald',
  }
})

const SelectedMenuItem = withStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    fontWeight: '700',
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
      console.log('present')
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
          Filter Products
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
          {/* <MenuItem className={classes.items} key='LEGAL' >{'All Rights Reserved'}</MenuItem> */}
        </Menu>
      </div>
    </div>
  );
}