// Async/Await
const fetch = require('isomorphic-fetch')
const url = 'https://reqres.in/api/users?page=1'

async function getSomething (testUrl) {
  const response = await fetch(testUrl)
  const response2 = await response.json()
  return response2
}

const getSomethingOneLine = async (testUrl) =>
  await (await fetch(testUrl)).json()

getSomething(url).then(result => console.log(result))
getSomethingOneLine(url).then(result => console.log(result))
