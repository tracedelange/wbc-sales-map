import Map from './Map'
import Header from './Header'
import { useState, useEffect } from 'react';
import spinner from '../assets/images/loading.gif'
import getRangeFromDatabase from '../firebaseFunctions';
import Footer from './Footer';




function App() {



  const [productFilter, setProductFilter] = useState([])

  const [fetchCounter, setFetchCounter] = useState(0)

  const [dataLoaded, setDataLoaded] = useState(false)
  const [data, setData] = useState({})
  const [premiseState, setPremiseState] = useState('Both')

  const displayMonth = new Date().getMonth() + 1

  const getRangeFromDatabaseAndAddToState = async (month, year, new_data, counter) => {

    let route = `${month}_${year}`
    getRangeFromDatabase(route, (resp) => {

      if (resp !== null) { 
        Object.keys(resp).forEach((customerKey) => {
          if (Object.keys(new_data).includes(customerKey)) {
            //New Data contains customer key
            // console.log('new keys contains customer key')
            //Iterate over customer key resp and add each order to the new_data object
            Object.keys(resp[customerKey]['orders']).forEach((orderKey) => {
              new_data[customerKey]['orders'][orderKey] = resp[customerKey]['orders'][orderKey]
            })
          } else {
            new_data[customerKey] = resp[customerKey]
          }
        })
      }

      setFetchCounter((fetchCounter) => fetchCounter + 1)

    })
    // counter += 1
    setData(new_data)
  }

  const adjustPremiseFilterState = () => {

    if (premiseState === 'Both') {
      setPremiseState('Off Premise')
    } else if (premiseState === 'Off Premise') {
      setPremiseState('On Premise')
    } else if (premiseState === 'On Premise') {
      setPremiseState('Both')
    }
  }
  
  const adjustFilterList = (item) => {
    if (item === 'none') {
      setProductFilter([])
    } else {
      setProductFilter(item)
    }
  }

  const data_resolution = { //Config item cooresponding to how many days and months back we want to look. 

    month: 3, //3 would mean fetch data for the past three months 
    day: 0, //How many days back on the last month we want to look, If zero it is set to the current day so 'Three months to date'

  }

  useEffect(() => {
    let today = new Date();
    let yy = today.getFullYear()
    let currentMonthRoute = `${displayMonth}_${yy}`

    const new_data = {}

    for (let i = 0; i < (data_resolution.month); i++) {


      console.log(displayMonth)

      if ((displayMonth - i) < 1) {

        let month = (displayMonth - i) + 12
        let year = yy - 1

        console.log(month)

        getRangeFromDatabaseAndAddToState(month, year, new_data)

      } else {


        let month = (displayMonth - i)
        let year = yy

        console.log(displayMonth)

        getRangeFromDatabaseAndAddToState(month, year, new_data)
      }
    }
  }, [])

  console.log(data)
  return (
    <div className="App">

      <Header
        productFilterState={productFilter}
        handleFilterItemClick={adjustFilterList}
        premiseFilterState={premiseState}
        handlePremiseClick={adjustPremiseFilterState}
      />

      <div id='map'>
        {fetchCounter === data_resolution.month ? <Map
          data={data}
          premiseType={premiseState}
          productFilterState={productFilter}
        /> : <img id='spinner' src={spinner} alt='Loading' />}
      </div>
      {fetchCounter === (data_resolution.month) ? <Footer /> : null}

    </div>
  );
}

export default App;
