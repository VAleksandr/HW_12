//---1-------------------------------
const users = [
  {
    name: 'Galya',
    age: 40
  },
  {
    name: 'Petya',
    age: 50
  },
  {
    name: 'Vasya',
    age: 12
  },
  {
    name: 'Gena',
    age: 18
  }
  ];

 
const propertyValue = (array, key) => {
  
  const output = [];
  for (let i=0; i < array.length; ++i)
      output.push(array[i][key]);
  return output;
}

console.log(propertyValue(users, 'age'));

//---2-------------------------------

const array1 = [5, 8, 1, 9, 6, 7, 2];

  const removeItem = (arr, num) => {
    
  const result = arr.filter(item => item !== num); 

  return result;  
  }

console.log(removeItem(array1, 5));

 //---3-------------------------------
 
const array2 = ['Cложновато', 'но', 'всё', 'становится', 'проще', 'если', 'думать']; 

const array_new = array2.reduce((acc, item) => [...acc, item.length], []);

console.log(array_new);

 //---4------------------------------- 
  
const numbers = [2, 3, 5, 7, 11, 13, 17, 19]

const currentSums = numbers => {  
  
  const array = numbers.reduce((acc, item, index) => {
   
    if (index === 0) {
      return [item];
    }
    return [...acc, item + acc[index - 1]]; 
  
  }, []);

  console.log(array);
}

currentSums(numbers);
