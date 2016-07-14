function dog (breed, gender, name) {
  if (gender === 'male') {
    return 'Hello, Mr. ' + name + ' you are a ' + breed + ' dog'
  }
  else {
    return 'Hello, Ms. ' + name + ' you are a ' + breed + ' dog'
  }
}

let mydog = dog.bind(null, 'corgi', 'male')

mydog('Fluffy')
