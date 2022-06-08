### Meeting
``Change style to a list of people``
```typescript
export function meeting(s: string): string {
  let separate: string[] = s.toUpperCase().split(";")
    .map((name) => '(' + name.split(':').reverse().join(', ') + ')')
  return(separate.sort().join(''))
}
```
