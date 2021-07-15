import Map from './Map'
import Header from './Header'
import { useState } from 'react';
import ProductFilter from './ProductFilter';





function App() {

  const [productFilter, setProductFilter] = useState([])

  const [displayStatus, setDisplayStatus] = useState('Both')

  const displayMonth = new Date().getMonth() + 1

  const adjustFilterList = (item) => {

    if (item === 'none'){
      setProductFilter([])
    } else {
      setProductFilter(item)
    }


    // if (!productFilter.includes(item)){
      // setProductFilter([...productFilter, item])
    // } else {
      // remove item from product filter list
      // let itemIndex = productFilter.indexOf(item)
      // let newProductFilter = [...productFilter]
      // newProductFilter.splice(itemIndex, 1)
      // setProductFilter(newProductFilter)
    // }


  }

  

  const onButtonClick = () => {

    if (displayStatus === 'Both'){

      setDisplayStatus('Off Premise')
    } else if (displayStatus === 'Off Premise'){
      setDisplayStatus('On Premise')
    } else if (displayStatus === 'On Premise'){
      setDisplayStatus('Both')
    }
  }

  // const onMonthClick = () => {
    
  //   let newMonth = displayMonth - 1

  //   if (newMonth > 0) {
  //     setDisplayMonth((displayMonth) => {
  //       return (displayMonth - 1)
  //     })
  //   } else {
  //     setDisplayMonth(new Date().getMonth() + 1)
  //   }
  // }

  // console.log(firebaseConfig)

  return (
    <div className="App">
      
      <Header
      productFilterState={productFilter}
      handleFilterItemClick={adjustFilterList}
      displayMonth={displayMonth}
      handleButtonClick={onButtonClick}
      displayState={displayStatus}
      />

      <div id='map'>
        <Map
        displayMonth={displayMonth}
        premiseType={displayStatus}
        productFilterState={productFilter}
        />
      </div>

    </div>
  );
}

export default App;
