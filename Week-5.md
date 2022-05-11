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
___

## Monday
### 1. TypeScript #1
```typescript
export interface User {
    name: string,
    age: number,
    occupation: string
};

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);
```

### 1. TypeScript #2
```typescript
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] /* <- Person[] */ = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) {
    console.log(` - ${person.name}, ${person.age}`);
}

persons.forEach(logPerson);
```
