<h1 align=center>Week 5</h1>

## Monday
### 1. Find The Missing Letter
```javascript
function findMissingLetter(array){
  for(let i = 0; i<=array.length; i++){
   //Checks that the difference between the current char code and the next one is 1
   if((array[i+1].charCodeAt(0)-array[i].charCodeAt(0))!==1)
     //Returns the missing code converted to string
     return String.fromCharCode(array[i].charCodeAt(0)+1)
  } 
}
```
### 2. Reverse or rotate?
```javascript
function revrot(str, sz) {
  if (sz <= 0 || sz >= str.length || str === '') return '';
  let chunks = str.match(new RegExp(`\\d{${sz}}`, 'g'));
  let sum = 0, chunkArray = [];
  let result = chunks.map((chunk) => {
    sum = chunk.split('').map((digit) => Math.pow(+digit, 3)).reduce((prev, curr) => prev + curr, 0);
    chunkArray = chunk.split('');
    if (sum % 2 === 0) return chunkArray.reverse().join('');
    return chunkArray.push(chunkArray.shift()), chunkArray.join('');
  });
  return result.join('');
}
```
