// Given a time in AM/PM format, give the military time
// Remember, that 12:05:30AM should be 00:05:30 in military time

const timeMilitary = (str) => {
  let result = ''
  // if it's PM and the time is less than 12, we add 12 to the hour
  // we don't want to add 12+12
  if (str.slice(8) === 'PM' && parseInt(str.slice(0, 2)) < 12) {
    let x = parseInt(str.slice(0, 2)) + 12
    result = x + (str.slice(2, 8))
  }
  // if it's AM and the time is 12, we convert the hour to 00
  else if (str.slice(8) === 'AM' && str.slice(0, 2) === '12') {
    result = '00' + str.slice(2, 8)
  }
  // everything else, we just drop the AM/PM
  else {
    result = str.slice(0, 8)
  }
  return result
}

timeMilitary('03:05:45PM')
