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
const words=[4,6,7,8,12,2,10]
const z=words.length
for (let i=0; i<z; i++){
  const words1=words[i]
  switch (words1){
    case 2:
      text='no'
      break
    case 3:
      text='yes'
      break
    case 4:
      text='bird'
      break
    case 5:
      text='plate'
      break
    case 6:
      text='pencil'
      break
    case 7:
      text='sparrow'
      break
    case 8:
      text='calculus'
      break
    case 9:
      text='professor'
      break
    case 10:
      text='university'
      break
    case 11:
      text='mathematics'
      break
    case 12:
      text='universities'
      break
  }
  console.log(text)
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
console.log("На проверку")