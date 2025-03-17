const sum = (a,b)=>{
    return a+b
}
console.log(sum(7,3))

module.exports = {sum}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}
console.log(fromEuroToDollar(3.5))

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}
console.log(fromDollarToYen(3.5))

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.87;
    return valueInPound;
}
console.log(fromYenToPound(3.5))

module.exports = {sum, fromEuroToDollar,fromDollarToYen,fromYenToPound}