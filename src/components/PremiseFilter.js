import React from 'react'
import Button from '@material-ui/core/Button';
import useMobileMediaQuery from './hooks/useMobileMediaQuery'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    mobile: {
      fontSize: "2.5vw",
      maxWidth: "16vw",
      minWidth: '16vw',
    //   maxWidth: '10%',
    //   fontWeight: '700',
    //   marginLeft: '5%',
      fontFamily: 'oswald',
    },
    static: {
      fontSize: "1vw",
      maxWidth: "8vw",
      minWidth: '8vw',
      fontFamily: 'oswald',
      backgroundColor: 'white'
    }
  })

const PremiseButton = withStyles((theme) => ({
    root: {
      backgroundColor: 'white',
      color: 'black',
      fontWeight: '500',
      borderRadius: '0',
      '&:hover': {
        backgroundColor: 'rgb(249, 249, 249)'
      }
    },
  }))(Button);

  
const PremiseFilter = ({handlePremiseClick, premiseFilterState}) => {

    // const handlePremiseClick = () => {
    //     console.log('button clicked')
    // }

    const isMobile = useMobileMediaQuery()
    const classes = useStyles()

    return (
        <div>
            <PremiseButton className={isMobile ? classes.mobile : classes.static} onClick={handlePremiseClick}>
                {premiseFilterState !== 'Both' ? premiseFilterState.replace('Premise', 'Site') : 'Sale Type'}
            </PremiseButton>

        </div>
    )
}

export default PremiseFilter
