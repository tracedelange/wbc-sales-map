import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';



const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.status.danger,
    '&$checked': {
      color: theme.status.danger,
    },
  },
  checked: {},
}));


function CustomCheckbox({props}) {
    const classes = useStyles();

    console.log(props)

    return (
      <Checkbox
        defaultChecked={false}
        classes={{
          root: classes.root,
          checked: classes.checked,
        }}
      />
    );
  }
  
  const theme = createTheme({
    status: {
      danger: '#dc004e',
    },
  });
  
  export default function CustomCheck(props) {
    return (
      <ThemeProvider theme={theme}>
        <CustomCheckbox props={props}/>
      </ThemeProvider>
    );
  }