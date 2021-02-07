module.exports = function toReadable (number) {
  let hundred,
      twoNum,
      threeNum; 
   if(number > 19 && number < 100) {
      number = String(number).split('');  
      twoNum = number[0];
      threeNum = number[1];
   }
   if(number > 99) {
      number = String(number).split('');
      hundred = number[0];
      twoNum = number[1];
      threeNum = number[2];
    }
  const nullNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        tenNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        twentyNinety = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if(number < 10) {
    return nullNine[number];
  }
  if(number < 20 && number >= 10) {
     return tenNineteen[number - 10];
  }
  if(+(number.join('')) < 100 && +(number.join('')) >= 20) {
    if(threeNum > 0) {
       return twentyNinety[twoNum - 2] + ' ' + nullNine[threeNum];
    } else {
      return twentyNinety[twoNum - 2];
    }
  }
  if(+(number.join('')) > 99) { 
    if(twoNum > 0) {
      if(+(twoNum + threeNum) > 19) {
        if(threeNum > 0) {
          return nullNine[hundred] + ' hundred' + ' ' + twentyNinety[twoNum - 2] + ' ' +  nullNine[threeNum]; 
        } else {
           return nullNine[hundred] + ' hundred' + ' ' + twentyNinety[twoNum - 2];
        }
      } else {
        return nullNine[hundred] + ' hundred' + ' ' + tenNineteen[+(twoNum + threeNum) - 10];
      }
} else {
   if(threeNum > 0) {
     return nullNine[hundred] + ' hundred' + ' ' + nullNine[threeNum];
   } else {
     return nullNine[hundred] + ' hundred';
   }
  
    }

  }
};
