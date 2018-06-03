// Async/Await
const fetch = require('isomorphic-fetch')
const url = 'https://reqres.in/api/users?page=1'
const url2 = 'https://1nimmg3p7f.execute-api.us-east-1.amazonaws.com/prod/aboveline_jr_test_service'

const data = {username: 'washington', password: 'password987'};

fetch('https://www.googleapis.com/discovery/v1/apis?fields=', {
  method: 'GET', // or 'PUT'
  body: JSON.stringify(data), 
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}).then(res => {
  return res.json())
}
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));


// async function getSomething (testUrl) {
//   const response = await fetch(testUrl)
//   console.log(response.headers)
//   const response2 = await response.json()
//   return response2
// }

// const getSomethingOneLine = async (testUrl) =>
//   await (await fetch(testUrl)).json()

getSomething(url).then(result => console.log(result))
getSomethingOneLine(url).then(result => console.log(result))
