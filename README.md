<h1 align="center">Weekly Challenges - Alejandra Villalobos</h1>

## Index

1. [Week 1](#week-1)
2. [Week 2](#week-2)
3. [Week 3](#week-3)

<h1 align="center">Week 1</h1>

## Tuesday
### 1. Interpreted And Compiled Programming Languages
An *Interpreted Language* is a cross-platform language that reads and runs the programms line by line. This means we can change a command and see the result immediately. Even though this can be slower, it allows programmers to fix bugs or errors easier.

On the other hand, a *Compiled Language* is a non cross-platform language that is directly converted into machine code. These languages have to be manually compiled first; if we want to make a change in the code, we have to re-build the entire program.

### 2. Is Java compiled or interpreted, or both?
Java is both a compiled an interpreted language. First, it is compiled to bytecode by the Java Compiler, then it is interpreted by a Java Virtual Machine which nowadays makes this process immediately.

### 3. Pseudocode Currency Converter
``A program that converts dollars to bitcoin``
```
  1. START
  2. AmountDollars <-- GET
  3. AmountBitcoin <-- AmountDollars*0.000022
  4. PRINT AmountBitcoin
  5. END
```
___

## Wednesday
### 1. Your date of birth in the matrix?
``A program that converts your year of birth to binary. Javascript:``
```javascript
  var year = prompt("Enter your year of birth:")
  let i = 0
  let yearBinary = []

  do{
    yearBinary[i] = Math.trunc(year%2)
    year = year/2
    i++

  } while (year>=1)
  console.log("Your year of birth in binary is: " + [yearBinary.reverse().join('')])
```

### 2. MIPS

``A program that adds any two given numbers provided by the user``
```
  .data
	      number1: .asciiz "\nIngrese el primer numero: "
	      number2: .asciiz "\nIngrese el segundo numero: "
	      result_message: .asciiz "\nEl resultado de la suma es: "
  .text
	      main:
              li $v0, 4
              la $a0, number1
              syscall

              li $v0, 5
              syscall

              move $t0, $v0

              li $v0, 4
              la $a0, number2
              syscall

              li $v0, 5
              syscall

              move $t1, $v0
             
              add $t2, $t0, $t1
             
              li $v0, 4
              la $a0 result_message
              syscall
              
              li $v0, 1
              move $a0, $t2
              syscall
```
``A program that displays your name``
```
  .data
	      name: .asciiz "\nIngrese su nombre: "
	      nameInput: .space 30
	      result: .asciiz "Su nombre es: "
  .text
	      main:
              
              li $v0, 4
              la $a0, name
              syscall
              
              li $v0, 8
              la $a0, nameInput
	      li $a1, 30
	      syscall
              
              li $v0, 4
              la $a0, result
              syscall
              
              li $v0, 4
              la $a0, nameInput
              syscall
```

___

## Thursday
### 1. Print even numbers from 0 to 100
```javascript
	for (var i = 0; i<=100; i+=2){
  	console.log(i)
	}
```

### 2. Bad code
```javascript
  var cond = false;

  /*
    the operator '==' is used to make an abstract comparison (both values must be the same)
    the operator '===' is used to make an strict comparison (even the types must be the same)
    and the operator '=' assigns a value to an object (doesn't make any comparison)
  */
  if ((cond == true)) {
    console.log('The cond variable is true');
  } else {
    console.log('The cond variable is false');
  }
```

### 3. Bad code 2
```javascript
  var n = 100;

  if (n == 100) {
    console.log('This is a special number!');
  }
  else if (n < 1000 && n%10==0 && n!=100) {
    console.log('This number is almost special');
  }
  else {
    console.log('Just a regular number');
  }
```
___

<h1 align="center">Week 2</h1>

## Tuesday
### 1. Multiply
```javascript
  //The return was missing
  function multiply(a, b){
    return a * b
  }
```

### 2. ASCII Total
``Sums the ASCII code of a string``
```javascript
  function uniTotal (string) {
    var total = 0;
    for(let i = 0; i<string.length; i++){
      total += string.charCodeAt(i)
    }
    return total
  }
```

### 3. Char From ASCII Value
``Gets the ASCII char from the given number``
```javascript
  function getChar(c){
    //Validates if "c" is a number 
    if(typeof(c) === 'number')
      return String.fromCharCode(c);
    else
      return console.error("The input must be a number");
  }
```

### 4. Binary Addition
``Returns the sum converted to binary``
```javascript
  function addBinary(a,b) {
    return (a+b).toString(2);
  }
```

### 5. Student's Final Grade
``Returns the final grade of a student``
```javascript
  function finalGrade (exam, projects) {
    if(exam>90 || projects>10)
      return 100
    else if(exam>75 && projects>=5)
      return 90
    else if(exam>50 && projects>=2)
      return 75
    else
      return 0
  }
```
___

## Wednesday
### 1. Holiday VIII - Duty Free
``Returns the ammount of bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday``
```javascript
  function dutyFree(normPrice, discount, hol){
    let priceDiscount = normPrice*(discount/100)
    //Math.floor() rounds down the number
    return Math.floor(hol/priceDiscount)
  }
```

### 2. Twice As Old
``Сalculates how many years ago the father was twice as old as his son (or in how many years he will be twice as old)``
```javascript
  function twiceAsOld(dadYearsOld, sonYearsOld) {
    //Math.abs() converts the number to positive
    return Math.abs(dadYearsOld-(sonYearsOld*2))
  }
```

### 3. Valid Spacing
``Validates if there is extra spacing in a string``
```javascript
  function validSpacing(s) {
    //The string can be empty
    if(s.length==0)
      return true
    //There can't be space at the beginning or a the end
    else if(s.startsWith(' ') || s.endsWith(' '))
      return false
    let words = s.split(' ')
    for(let i = 0; i<=words.length; i++){
      //After spliting the string, there can't be a blank space
      if (words[i]==='')
        return false
    } 
    return true
  }
```

### 4. Fake Binary
``Replaces any digit below 5 with '0' and any digit 5 and above with '1'``
```javascript
  function fakeBin(x){
    let num = ""
    for(let i = 0; i<x.length; i++){
      if(x[i]<5)
        num = num.concat(0)
      else 
        num = num.concat(1)
    }
    return num
  }
```
___

## Thursday
### 1. Remove All Exclamation Marks From The End Of Sentence 
```javascript
  function remove (string) {  
    //Regular expression that searches all the '!' signs at the end
    var regex = /!+$/g
    var end = string.search(regex)
    if(end>1)
      //Returns the string from the beginning to the position where the final '!' signs start
      return string.substring(0, end)
    else
      return string
  }
```

### 2. Vowel Remover
``Removes all the vowels in a string``
```javascript
  function shortcut (string) {
    //Regex that searches all the vowels in lowercase
    let regex = /[aeiou]+/g
    return string.replace(regex, '')
  }
```

### 3. Rock Paper Scissors!
```javascript
  const rps = (p1, p2) => {
    if(p1===p2)
      return 'Draw!'
    else if((p1==='scissors' && p2==='paper') || (p1==='rock' && p2==='scissors')
           || (p1==='paper' && p2==='rock'))
      return 'Player 1 won!'
    else
      return 'Player 2 won!'
  };
```

### 4. Persistent Bugger 
``Takes in a positive number and returns its multiplicative persistence``
```javascript
  function persistence(num) {
    let count = 0;
    //For 0 iterations
    if(num<10)
      return 0
    do{
      //Saves every digit individually
      let splitNums = num.toString().split('');
      num = 1;
      for (let i = 0; i < splitNums.length; i++) {
        //Multiplies the digits
        num *= splitNums[i];
      }
      count++;
    //It stops when we have only one digit
    }while(num>=10)
      return count;
  }
```
___

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
