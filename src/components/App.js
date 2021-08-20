import Map from './Map'
import Header from './Header'
import { useState, useEffect } from 'react';
import spinner from '../assets/images/loading.gif'
import getRangeFromDatabase from '../firebaseFunctions';
import Footer from './Footer';

const getRangeFromDatabaseAndAddToState = (month, year, total) => {

  console.log(month)
  console.log(year)

  let route = `${month}_${year}`

  getRangeFromDatabase(route, (resp)=>{

    Object.keys(total).forEach((key) => {
      if (Object.keys(resp).includes(key) ){
        console.log('repeat')
      }
    })

    total = {...resp}
    return total
    // setData(resp)

  })


}



function App() {



  const [productFilter, setProductFilter] = useState([])

  const [dataLoaded, setDataLoaded] = useState(false)
  const [data, setData] = useState({})
  const [premiseState, setPremiseState] = useState('Both')

  const displayMonth = new Date().getMonth() + 1


  const splitDate = (date) => {

    if (date.includes('-')) {
      let split = date.split('-')

      let split_date = {
        year: split[0],
        month: split[1],
        day: split[2]
      }

      return split_date
    } else if (date.includes('/')) {
      let split = date.split('/')

      let split_date = {
        year: split[2],
        month: split[0],
        day: split[1]
      }

      return split_date
    }
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

  const data_resolution = { //Config item coresponding to how many days and months back we want to look. 

    month: 3, //3 would mean fetch data for the past three months 
    day: 0, //How many days back on the last month we want to look, If zero it is set to the current day so 'Three months to date'

  }

  useEffect(() => {
    let today = new Date();
    let yy = today.getFullYear()
    let currentMonthRoute = `${displayMonth}_${yy}`

    // console.log(today)
    // console.log(yy)
    // console.log(currentMonthRoute)

    let total = {}

    for (let i = 0; i < (data_resolution.month); i++) {
      if ((displayMonth - i) < 1) {
        // console.log((displayMonth - i) + 12)
        // console.log(yy - 1)

        let month = (displayMonth - i) + 12
        let year = yy - 1

        total = getRangeFromDatabaseAndAddToState(month, year, total)

      } else {

        let month = (displayMonth - i)
        let year = yy

        total = getRangeFromDatabaseAndAddToState(month, year, total)

      }

    }


    setData(total)
  }, [])



  // useEffect(() => {

  //   let today = new Date();
  //   let yy = today.getFullYear()
  //   let currentMonthRoute = `${displayMonth}_${yy}`

  //   console.log(currentMonthRoute)

  //   getRangeFromDatabase(currentMonthRoute, (data) => {

  //     setData(data)
  //   })

  //   let previousMonthRoute = `${displayMonth - 1}_${yy}`
  //   getRangeFromDatabase(previousMonthRoute, (data) => {



  //     let cutoff_date = {
  //       month: displayMonth - 1,
  //       day: today.getDate()
  //     }

  //     let customerKeys = Object.keys(data)
  //     customerKeys.forEach((key) => {


  //       let orderKeys = Object.keys(data[key]['orders'])
  //       orderKeys.forEach((orderKey) => {

  //         let date = (data[key]['orders'][orderKey].saleDate.split(' ')[0])

  //         let split_date = splitDate(date)

  //         // console.log(split_date)

  //         if (parseInt(split_date.month) < cutoff_date.month){

  //           delete data[key]['orders'].key

  //           if (Object.keys(data[key]['orders']).length === 0) {
  //             delete data[key]
  //           }

  //         } else if (parseInt(split_date.month) <= cutoff_date.month && parseInt(split_date.day) < cutoff_date.day) {

  //           delete data[key]['orders'][orderKey]

  //           if (Object.keys(data[key]['orders']).length === 0) {
  //             delete data[key]
  //           }
  //         }
  //       })
  //     })

  //     setData((existingData) => {
  //       for (let customer_key of Object.keys(data)){

  //         if (!Object.keys(existingData).includes(customer_key)){
  //           existingData[customer_key] = data[customer_key]
  //         } else { //both customers exist in each object. Iterate over the orders for the new report and add them each to the old report.
  //           for (let order_key of Object.keys(data[customer_key]['orders'])) {
  //             existingData[customer_key]['orders'][order_key] = data[customer_key]['orders'][order_key]
  //           }
  //         }
  //       }

  //       return existingData //Awesome! Now the two back end requests don't overwrite each other and play nice.

  //     })
  //     setTimeout(() => [setDataLoaded(true)], 500)
  //   })
  // }, []);

  // console.log(data.length)
  // console.log(Object.keys(data).length)

  return (
    <div className="App">

      <Header
        productFilterState={productFilter}
        handleFilterItemClick={adjustFilterList}
        premiseFilterState={premiseState}
        handlePremiseClick={adjustPremiseFilterState}
      />

      <div id='map'>
        {dataLoaded ? <Map
          data={data}
          premiseType={premiseState}
          productFilterState={productFilter}
        /> : <img id='spinner' src={spinner} alt='Loading' />}
      </div>
      {dataLoaded ? <Footer /> : null}

    </div>
  );
}

export default App;
