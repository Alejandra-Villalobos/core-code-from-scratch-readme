<h1 align=center>Week 10</h1>

## Monday
### 1. Easter egg list in ReactJS
```javascript
import React from 'react';

export const EggList = ({eggs}) => {
  return(
  <ul>
      {eggs.map((item, key)=>{
    return <EasterEgg key={key} name={item} />
  })}
  </ul>
  )
};
```
