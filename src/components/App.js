import Map from './map/Map'
import Header from './Header'
import { useState, useEffect } from 'react';
import spinner from '../assets/images/loading.gif'

import Footer from './Footer';
import { useDispatchGetDisplayData } from '../hooks/useDispatchGetDisplayData';
import { useSelector } from 'react-redux';


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
          <img id='spinner' src={spinner} alt='Loading' />}
      </div>


    </div>
  );
}

export default App;
