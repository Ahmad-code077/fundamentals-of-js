const name = ['Ahmad', 'Abdullah', 'Hamza', 'Hanzla']
const lastName = 'Mamoon ur Rasheed'
let newArray = []

for (let i = 0; i < name.length; i++) {
  console.log(i)
  console.log(name[i])
  const fullName = `${name[i]} son of ${lastName}`
  newArray.push(fullName)
}
console.log(newArray)
