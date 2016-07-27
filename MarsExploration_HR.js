// https://www.hackerrank.com/challenges/mars-exploration

'use strict';

function main () {
  var S = readLine();
  let strarr = S.split('');
  let options = ['S','O','S'];
  let tripletarr = [];
  while(strarr.length > 0){
    tripletarr.push(strarr.splice(0, 3));
  }
  let final = tripletarr.map((v1) => 
                v1.map((v2, i2) =>
                  v2 === options[i2] ? 0 : 1)
                .reduce((pv, cv) => pv + cv))
                .reduce((pv2, cv2) => pv2 + cv2);
  console.log(final);
}
