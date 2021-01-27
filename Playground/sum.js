const add = (a1, a2, cb) => {
  setTimeout(() => {
    let sum =a1+a2
    cb(sum)
  }, 2000)
}
add(4, 9, (sum) => {
  console.log(sum) //13
})