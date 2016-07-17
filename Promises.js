let part1 = (n) => {
  return new Promise((resolve, reject) => {
  	if(n >= 10){
  		resolve(n*2)
  	}
  	else{
  		reject('Your number is less than 10')
  	}
  })
}

let part2 = (n) => {
	return new Promise((resolve, reject) => {
		if(n >= 100){
			resolve (n*100)
		}
		else{
			reject('Your number less than 100')
		}
	})
}

part1(50)
.then(x => part2(x))
.then(y => console.log(y))
.catch((err) => {console.log(err)})

let part3 = new Promise((resolve, reject)=>{
	setTimeout(resolve, 100, 'hello')	
})

Promise.all([part1(100), part2(200), part3])
.then((x) => console.log(x))
.catch((err) => console.log(err))
