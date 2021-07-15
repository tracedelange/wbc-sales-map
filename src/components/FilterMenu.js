import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import products from '../products.js'
import {withStyles} from '@material-ui/core/styles'


import CustomCheck from './CustomChecks';


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
  


export default function FilterMenu({handleFilterItemClick, productFilterState}) {


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleItemClick = (item) => {
    // setAnchorEl(null);

    handleFilterItemClick(item)
    };

    

  const handleClose = (item) => {
    setAnchorEl(null);
  };


  // console.log(productFilterState)



  const productMenuItems = products.map((item) => {

    if (productFilterState.includes(item.name)){
        //Remove from filter list 
        console.log('present')
        return <SelectedMenuItem key={item.key} onClick={() => handleItemClick(item.name)}>{item.name}</SelectedMenuItem>

    } else {
        //Add to filter list 
        return <MenuItem key={item.key} onClick={() => handleItemClick(item.name)}>{item.name}</MenuItem>
    }
  
  

    })

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Filter Products
      </Button>
      <div id='filter'>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >

          <MenuItem key='REMOVE' onClick={() => handleItemClick('none')}>{'Clear Filter'}</MenuItem>
          {productMenuItems}

      </Menu>
      </div>



    </div>
  );
}