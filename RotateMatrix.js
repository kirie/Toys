// Given a NxN Matrix, rotate the matrix 90 degrees

function rotate (arr) {
  let arrcopy = []
  for(let i = 0;i< arr.length;i++){
    arrcopy.push([])
  }
	arr = arr.reverse()
	for(let i = 0; i<arr.length;i++){
		for(let j = arr.length-1; j > -1 ;j--){
			arrcopy[i][j] = arr[j][i]
		}
	}
	return arrcopy
}

const x = [[1,2],[3,4]]
rotate(x)


// reverse the array
// swap places