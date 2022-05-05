<h1 align="center">Week 3</h1>

## Monday
### 1. Who Likes It?
``Returns the names of people that liked a post``
```javascript
  function likes(names) {
    if(names.length===0)
      return `no one likes this`
    else if(names.length===1)
      return `${names[0]} likes this`
    else if(names.length===2)
      return `${names[0]} and ${names[1]} like this`
    else if(names.length===3)
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    else if(names.length>=4)
      return `${names[0]}, ${names[1]} and ${(names.length)-2} others like this`
  }
```

### 2. Bit Counting
``Takes an integer, converts it into binary and returns the number of bits that are equal to one``
```javascript
  var countBits = function(n) {
    var binary = n.toString(2).split('')
    //converts the string array to an array of numbers
    var binaryArr = binary.map(Number)
    return binaryArr.reduce((a,b) => a+b)
  };
```

### 3. Your Order, Please
``Sorts the string according to the number contained in every word``
```javascript
  function order(words){
    //everything that is not a digit
    let regex = /\D/gi
    let arr = words.split(' ')
    //Leaves just the number in every element of the array to sort them
    arr.sort((a, b) => a.replace(regex, '') - b.replace(regex, ''))
    return arr.join(' ')
  }
```
__

## Tuesday
### 1. Simple Pig Latin
``Moves the first letter of a word to the end and adds 'ay'``
```javascript
  function pigIt(str){
    var pigArr = str.split(' ')
    var newArr = []
    for (let i = 0; i<pigArr.length; i++){
      var word = pigArr[i]
      if(word!='!'&&word!='?'){
        word = pigArr[i].concat(`${pigArr[i].charAt(0)}ay`)
        word = word.slice(1,word.length)
      }
      newArr.push(word)
    }
    return newArr.join(' ')
  }
```

### 2. Counting Duplicates
``Counts how many elements are duplicated``
```javascript
  function duplicateCount(text){
    text = text.toLowerCase().split('').sort()
    var count = 0
    for (let i = 0; i<text.length; i++){
      /*If the last index of the element is different to the current index and the initial
        index is equal to the current index, adds 1 to the counter*/
      if(text.lastIndexOf(text[i])!==i && text.indexOf(text[i])===i)
        count++
    }
    return count
  }
```

### 3. Decode The Morse Code
``Counts how many elements are duplicated``
```javascript
  decodeMorse = function(morseCode){
    morseCode = morseCode.split('  ').map(e => e.split(' ')
      .map(letter => MORSE_CODE[letter]).join(''))
    return morseCode.join(' ').trim()
  }
```
___

## Wednesday
### 1. Valid Parentheses
```javascript
  function validParentheses(parens) {
    let check = 0, i = 0;
    while(check>=0 && i<parens.length){
      if(parens[i]==='(')
        check++
      else
        check--
      //there can't be more rigth parentheses than left parentheses consecutively
      if(check<0)
        return false
      i++
    }
  //Check is 0 only if there is the same amount of left and rigth parentheses
  return check === 0 ? true : false
```

### 2. Convert string to camel case
```javascript
  function toCamelCase(str){
    //Splits the string depending on the separator 
    str = str.includes('_') ? str.split('_') : str.split('-')
    for(let i = 0; i<str.length; i++){
      //To avoid modifying the first word
      if(i>0)
        str[i] = str[i].replace(str[i].charAt(0), str[i].charAt(0).toUpperCase())
    }
    return str.join('')
  }
```

### 3. Unique In Order
``Returns a list of items without any elements with the same value next to each other and preserving the original order of elements``
```javascript
  var uniqueInOrder=function(iterable){
    var arr = []
    for (let i = 0; i<iterable.length; i++){
      //Pushes the element to the array if it is not the same as the next one
      if(iterable[i]!=iterable[i+1])
        arr.push(iterable[i])
    }
    return arr
  }
```
___


## Thursday
### 1. Fold an array
```javascript
  function foldArray(array, runs)
  {
    //Sets the division one element ahead of the center if the lenth of the array is odd
    let division = Math.round(array.length/2)
    let arrLeft = array.slice(0, division)
    let arrRig = array.slice(division, array.length).reverse()
    let foldedArr = []
    for(let i = 0; i<arrRig.length; i++)
      foldedArr.push(arrLeft[i]+arrRig[i])
    //If the left size if bigger than the rigth one, adds the last element of the left size to the array
    if(array.length % 2 !== 0)
      foldedArr.push(array[division-1])
    runs--
    //Runs the function using recursion until we have completed the runs
    return runs > 0 ? foldArray(foldedArr, runs) : foldedArr
  }
```

### 2. Encrypt this!
```javascript
  var encryptThis = function(text) {
    let array = text.split(' ')
    for (let i = 0; i<array.length; i++){
      
      let firstChar = array[i].charCodeAt(0)
      let secondChar = array[i].charAt(1)
      let middleChars = array[i].substring(2,array[i].length-1)
      let lastChar = array[i].charAt(array[i].length-1)
      
      if(array[i].length===1) array[i] = firstChar
      else if(array[i].length===2) array[i] = `${firstChar}${secondChar}`
      else if(array[i].length===3)array[i] = `${firstChar}${lastChar}${secondChar}`
      else array[i] = `${firstChar}${lastChar}${middleChars}${secondChar}` 
    }
    return array.join(' ')
```
