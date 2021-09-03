import database from './firebase'

// const queryDatabase = (source, callback) => {
//     database.ref('/').child(source).get()
//       .then((snapshot) => {
//         if (snapshot.exists()) {
//           callback(snapshot.val())
//         } else {
//           console.log("No data available");
//         }
//       }).catch((error) => {
//         console.error(error);
//       });
//   }




const getRangeFromDatabase = (month, callback) => {
database.ref('/').child('orders-by-date').child(month).get()
    .then((snapshot) => {
    if (snapshot.exists()) {
        callback(snapshot.val())
    } else {
        console.log("No data available");
        callback(null)
    }
    }).catch((error) => {
    console.error(error);
    });
}

export default getRangeFromDatabase;