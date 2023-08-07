function findingBadData (numbers){
    if(!Array.isArray(numbers)){
        return "input should be a number";
    }

  let positiveNumber = 0;
  let badData = 0;

  for (let i = 0; i<numbers.length; i++) {
    let numb = numbers[i];

    if(typeof numb !== 'number'){
        return "provide all element number";
    }

    if(numb > 0){
       positiveNumber++;
        }
        else {
           badData++;
        }
  }
    return {positiveNumber, badData} ;
}


const isNumber = [1,2,3,2,-5,-7,-13,-4,-9,-5,-33,-55];
const result = findingBadData(isNumber);
console.log("Positive Number : ", result.positiveNumber);
console.log("Bad Number :", result.badData);