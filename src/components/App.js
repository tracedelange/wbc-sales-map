import Map from './Map'
import Header from './Header'
import { useState, useEffect } from 'react';
import spinner from '../assets/images/loading.gif'
import getRangeFromDatabase from '../firebaseFunctions';
import Footer from './Footer';
import { useDispatchGetDisplayData } from './hooks/useDispatchGetDisplayData';
import { useSelector } from 'react-redux';


function App() {



  // const [productFilter, setProductFilter] = useState([])

  // const [fetchCounter, setFetchCounter] = useState(0)

  // const [dataLoaded, setDataLoaded] = useState(false)
  // const [data, setData] = useState({})
  // const [premiseState, setPremiseState] = useState('Both')

  // const displayMonth = new Date().getMonth() + 1

  
  useDispatchGetDisplayData()

  const dataLoaded = useSelector(state => state.data.dataLoaded)
  
  // console.log(displayData)
  
  return (
    <div className="App">

      {/* <Header

      /> */}

      <div id='map'>
        {dataLoaded ?
        <Map />
        :
        <img id='spinner' src={spinner} alt='Loading' />}
      </div>

      {/* <Footer /> */}

    </div>
  );
}

export default App;
