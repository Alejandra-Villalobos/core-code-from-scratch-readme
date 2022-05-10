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
