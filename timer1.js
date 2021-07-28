let arr = process.argv.slice(2)

function timer(times) {
  let array = times.map(Number)
  for (let i = 0; i < array.length; i++) {
    if(array[i] < 0 || array[i] === NaN) {
      return array[i].splice(i, 1)
    };
  
  setTimeout(() => {
  process.stdout.write('\x07');
  }, array[i] * 100)
 };
};


timer(arr)


// [1,10,11,45]


