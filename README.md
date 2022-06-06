Test examples

```typescript
function findSumPair(numbers, k) {
  let pair = [0, 0]
  for(let j =0; j<numbers.length; j++){
    for(let i =0; i<numbers.length; i++){
      if((numbers[i]+numbers[j])===k&&i!=j){
        pair = [i, j]
        break;
      }
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
```javascript
function isDuoDigit(number) {
  let num = number.toString().split('').sort();
  for (let i = 0; i<num.length; i++){
    if(num.indexOf(num[i])!==num.lastIndexOf(num[i]))
      num.splice(num.lastIndexOf(num[i]),1)
  }
  return num.length>2 ? 'n' : 'y'
}
console.log(isDuoDigit(-2020))
```
```javascript
function filterWords(words: string[], letters: string): string[] {
    let lts: string[] = letters.split('');
    return words.filter((w: string) => lts.some((l: string) => w.includes(l)));
}
```
```javascript
function calculateTotalPrice(prices, discount) {
  let max = 0;
  prices.map((item)=>{
    if(item>max){
      max=item
    }
  })
  prices.splice(prices.indexOf(max), 1, max-(max*discount/100))
  return Math.trunc(prices.reduce((a,b)=>a+b,0));
}

console.log(calculateTotalPrice([1,2,10],50))
```
