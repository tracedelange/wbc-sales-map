import Map from './Map'
import Header from './Header'
import { useState, useEffect } from 'react';
import spinner from '../assets/images/loading.gif'
import getRangeFromDatabase from '../firebaseFunctions';

function App() {

  const [productFilter, setProductFilter] = useState([])
  const [displayStatus, setDisplayStatus] = useState('Both')
  const [dataLoaded, setDataLoaded] = useState(false)
  const [data, setData] = useState({})
  const displayMonth = new Date().getMonth() + 1

  const adjustFilterList = (item) => {
    if (item === 'none') {
      setProductFilter([])
    } else {
      setProductFilter(item)
    }
  }

  useEffect(() => {

    let today = new Date();
    let yy = today.getFullYear()
    let currentMonthRoute = `${displayMonth}_${yy}`

    getRangeFromDatabase(currentMonthRoute, (data) => {

      setData((existingData) => {
        return {
          ...existingData,
          ...data
        }
      })
    })
    let previousMonthRoute = `${displayMonth - 1}_${yy}`
    getRangeFromDatabase(previousMonthRoute, (data) => {
      setData((existingData) => {
        return {
          ...existingData,
          ...data
        }
      })
      setTimeout(() => [setDataLoaded(true)], 500)
    })
  }, []);

  const onButtonClick = () => {
    if (displayStatus === 'Both') {
      setDisplayStatus('Off Premise')
    } else if (displayStatus === 'Off Premise') {
      setDisplayStatus('On Premise')
    } else if (displayStatus === 'On Premise') {
      setDisplayStatus('Both')
    }
  }

  return (
    <div className="App">

      <Header
        productFilterState={productFilter}
        handleFilterItemClick={adjustFilterList}
      />

      <div id='map'>
        {dataLoaded ? <Map
          data={data}
          premiseType={displayStatus}
          productFilterState={productFilter}
        /> : <img id='spinner' src={spinner} alt='Loading' />}
      </div>

    </div>
  );
}

export default App;
