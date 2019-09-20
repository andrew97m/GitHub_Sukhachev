console.clear()

console.log('Задача 1:')
const f=(a,b)=>{
  if (a>b){
    const n=a-b
    console.log(a, 'больше', b, 'на',n)
  } 
  else if (a<b){
    const n=b-a
    console.log(a, 'меньше', b, 'на',n)
  }
  else if (a=b){
    console.log(a, 'равно', b)
  }
}
f(3,7)
f(7,7)
f(7,3)


console.log('Задача 2:')
const names=['Саша','Андрей','Олег','Юлия','Ксения','Артем']
names.sort()
console.log(names)


console.log('Задача 3:')
const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
const numbers1=numbers.filter(function(x){
  return Math.pow(x,2)>20 && Math.pow(x,2)<100
})
console.log(numbers1)


console.log('Задача 4:')
const words=[4,6,7,8,12]
const a='Andy'
const b='pencil'
const c='sparrow'
const d='calculus'
const e='universities'
const words1=(x)=>{
  if (x[i]===a.length){return a}
  else if (x[i]===b.length){return b}
  else if (x[i]===c.length){return c}
  else if (x[i]===d.length){return d}
  else if (x[i]===e.length){return e}
  console.log(x)
}


console.log('Задача 5:')
function repeat(){return 'Я номер'}
for (let y=1; y<26; y++){
  const g=repeat()+' '+y
  console.log(g)
}


console.log('Задача 6:')
const array=[10,20,30,40,50,60,70] 
array.reverse()
console.log(array)


console.log('Задача 7:')
const name='Andrew'
const name1=name.split('')
console.log(name1)


console.log('Задача 8:')
const s=[4,6,1,3]
const sum=s.reduce((a,b)=>a+b,0)
console.log(sum)


console.log('Задача 9:')
const l='this is a random sentence'
console.log(l.length)


console.log('Задача 10:')
const Name='Steven'
const n=5
for (h=0; h<n; h++){
  console.log(Name)
}
console.log("It's Working")