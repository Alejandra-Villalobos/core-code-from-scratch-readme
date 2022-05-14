Test examples

```javascript
function findSumPair(numbers, k) {
  let pair = [0, 0]
    for(let i =0; i<numbers.length; i++){
      if((numbers[i]+numbers[i+1])===k){
        pair = [i, i+1]
        break;
      }
    }
  return pair; 
}
console.log(findSumPair([1,5,8,1,2],13))
```
```javascript
function filterDuplicates(data) {
  let j = 0
  do{
    for (let i = 0; i<data.length; i++){
      if(data.indexOf(data[i])!==data.lastIndexOf(data[i]))
         data.splice(data.lastIndexOf(data[i]),1)
    }j++;  
  }while(j<3)
      return data
  }
console.log(filterDuplicates([7,6,4,3,3,4,9,9,9,9,9]))
```
```javascript
function filterWords(words, letters) {
    let filterLetters = letters.split('')
    let newArr = []
    for(let j=0; j<filterLetters.length; j++){
      for(let i=0; i<words.length; i++){
         if(words[j].includes(filterLetters[i])&&newArr.includes(words[j])==false) 
           newArr.push(words[j])
      }
    }
    return newArr;
}
console.log(filterWords(['el', 'he', 'ha'], 'eh'))
```
