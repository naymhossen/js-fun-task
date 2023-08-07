function pandaCost (singaraQuantity, somucaQuantity, jilapiQuantity) {

    const oneSingaraPrice = 7;
    const oneSomuchaPrice = 10;
    const oneJilapiPrice = 15;

    const totalSingarPrice = singaraQuantity * oneSingaraPrice;
    const totalSomucaPrice = somucaQuantity * oneSomuchaPrice; 
    const totalJilapiPrice = jilapiQuantity * oneJilapiPrice;

    const totalPandaBill = totalJilapiPrice + totalSingarPrice + totalSomucaPrice;

    return totalPandaBill;
}

const nastaPrice = pandaCost(5,3,2);
console.log("All Panda Friends Bill", nastaPrice, "Taka");