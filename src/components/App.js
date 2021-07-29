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


  // const genCutoffDay = (dayMod) => {
  //   let today = new Date();
  //   let day = today.getDate()

  //   if ((day - dayMod) > 0){
  //     return (day - dayMod)
  //   } else {
  //     return (1)
  //   }

  // }

  const splitDate = (date) => {

    if (date.includes('-')) {
      let split = date.split('-')

      let split_date = {
        year : split[0],
        month : split[1],
        day : split[2]
      }

      return split_date
    } else if (date.includes('/')){
      let split = date.split('/')

      let split_date = {
        year : split[2],
        month : split[0],
        day : split[1]
      }

      return split_date
    }
  }

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

    console.log(currentMonthRoute)

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



      let cutoff_date = {
        month: displayMonth - 1,
        day: today.getDate()
      }

      let customerKeys = Object.keys(data)
      customerKeys.forEach((key) => {


        let orderKeys = Object.keys(data[key]['orders'])
        orderKeys.forEach((orderKey) => {
          
          let date = (data[key]['orders'][orderKey].saleDate.split(' ')[0])

          let split_date = splitDate(date)
        
          // console.log(split_date)

          if (parseInt(split_date.month) < cutoff_date.month){

            delete data[key]['orders'].key

            if (Object.keys(data[key]['orders']).length === 0) {
              delete data[key]
            }

          } else if (parseInt(split_date.month) <= cutoff_date.month && parseInt(split_date.day) < cutoff_date.day) {

            delete data[key]['orders'][orderKey]

            if (Object.keys(data[key]['orders']).length === 0) {
              delete data[key]
            }
          }
        })
      })

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
