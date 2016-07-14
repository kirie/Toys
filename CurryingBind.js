function dog (breed, gender, name) {
  if (gender === 'male') {
    console.log('Hello, Mr. ' + name + ' you are a ' + breed + ' dog')
  }
  else {
    console.log('Hello, Ms. ' + name + ' you are a ' + breed + ' dog')
  }
}

let mydog = dog.bind(null, 'corgi', 'male')

mydog('Bill')
mydog('Ted')
