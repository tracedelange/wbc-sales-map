import Map from './map/Map'
import Header from './Header'
import { useState, useEffect } from 'react';
import spinner from '../assets/images/loading.gif'

import Footer from './Footer';
import { useDispatchGetDisplayData } from '../hooks/useDispatchGetDisplayData';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';



function App() {


  useDispatchGetDisplayData()

  const dataLoaded = useSelector(state => state.data.dataLoaded)


  return (
    <div className="App">

      <Header />

      <div id='map'>
        {dataLoaded ?
          <>
            <Map />
            <Footer />
          </>
          :
          <div className='spinner-parent'>
            <CircularProgress size={80} />
          </div>
        }
      </div>


    </div>
  );
}

export default App;
