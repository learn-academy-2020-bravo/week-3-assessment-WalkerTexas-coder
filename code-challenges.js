// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// function fibonacci makes 3 variables that are put into an equation and return an array with 10 indexs
//can I use state? should state hold "n" and refer to it and use it as part of the equatiopn updating it each time?
//for loops i guess --- try to find map or filter soulution if time permits
var x = 1
var n = 1
const fibb = () => {
  let fibbArray = []
  // push is higherorder function
  fibbArray.push(x)
  fibbArray.push(n)
  for (var i = 2; i < 10; i++) {
    fibbArray.push(fibbArray[i - 2] + fibbArray[i -1])
  }
return fibbArray
}
console.log(fibb());
// lazy alternate create a function that takes numbers and returns them as an array.

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

const odd = (array) => {

        // tools: .filter === number
        let filteredArray = array.filter((value)=> typeof (value) == 'number')
        console.log('filteredArray', filteredArray);
        //.filter !== even
        let oddArray = filteredArray.filter((value)=> value % 2 !== 0)
        console.log('oddArray', oddArray);
        //  numbers.sort((a, b) => a - b);
        let oddSorted= oddArray.sort((a, b) => a - b);
        return oddSorted
}
console.log(odd(fullArr1));
console.log(odd(fullArr2));




// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”

var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const middle = (string) => {
  //tools string.split
  let stringSplit = string.split("")
  console.log('stringSplit', stringSplit);
  // lenght %2 (even or odd)
  let lengthNum = stringSplit.length
  console.log('lengthNum', lengthNum);
  let middleNum = lengthNum % 2
  console.log('middleNum', middleNum);

  //if %2 =1 in which case return value of the index of num + .5
  if (middleNum === 1){
    let middleIndex = lengthNum / 2 + .5
    console.log(middleIndex);
    return stringSplit[middleIndex]
  }
  // if %2 =0 return value of index of ^variable^ and value of index +1 in a string (.join)
  else if (middleNum === 0){
    let middleIndex1 = lengthNum/2- 1
    let middleIndex2 =lengthNum/2
    console.log(middleIndex1, middleIndex2);
    return stringSplit[middleIndex1] + stringSplit[middleIndex2]
  }
}

console.log(middle(middleLetters1));
console.log(middle(middleLetters2));





// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)


class Sphere{
constructor(radius){
  this.radius = radius;
}
area (){
  return 4 * Math.PI * (this.radius * this.radius)
}
}
  let SphereArea1 = new Sphere(7)
  let SphereArea2 = new Sphere(31)
  let SphereArea3 = new Sphere(52)

    console.log(SphereArea1.area());
    console.log(SphereArea2.area());
    console.log(SphereArea3.area());









// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

//sumof?

const arraySum = (array) => {
  let sumArray = []
  let mapArray = array.map((value, index)=> {
    if (index === 0) {
      sumArray.push(value)
    }
    else if (index > 0){
      sumArray.push(sumArray[index-1] + value)
    }

  })
  console.log(sumArray);
  }
console.log(arraySum(numbersToAdd1));
console.log(arraySum(numbersToAdd2));
console.log(arraySum(numbersToAdd3));
