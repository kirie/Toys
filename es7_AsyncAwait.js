// Async/Await

async function getSomething () {
  const response = await fetch('https://api.somewhere.com')
  const response2 = await response.json()
  return response2
}

const getSomethingOneLine = async () =>
  await (await fetch('https://api.somesite.com')).json()

