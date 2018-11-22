/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
    this.getNum = function(input) {
      var numReg = /[0-9]+(\.|\/)*/g
      var result;
      
      if (input.match(numReg)){
        
        //check for double '/'
        if (input.split('/').length>2/*input.match(numReg).join('').split('/').map(function(el){
          return el == '';
        }).includes(true)*/){ 
          return 'invalid number'
        } else if (input.split('.').length>2/*input.match(numReg).join('').split('.').map(function(el){
          return el == '';
        }).includes(true)*/){ 
          return 'invalid number'
        } else { 
          if ((eval(input.match(numReg).join('')).toFixed(5)) == (eval(input.match(numReg).join('')))){ 
            result = eval(input.match(numReg).join(''));
          } else { 
            result = eval(input.match(numReg).join('')).toFixed(5)
          }
        } 
      } else {
        result = 1;
      }
      console.log('the result of getNum is ' + result);
      return result;
    };
    
    this.getUnit = function(input) {
      var unitReg = /[a-z]+/gi
      var checked = input.match(unitReg).join('');
      var unitArr = ['l','L', 'gal','GAL', 'km','KM', 'mi','MI', 'kg','KG', 'lbs', 'LBS'];
      var result;
      unitArr.includes(checked) ? result = checked : result = 'invalid unit';
      //unitReg.test(input) ? result = input.match(unitReg).join('') : result = 'invalid unit';
      console.log('the result of getUnit is ' + result);
       return result;
    };
    
    this.getReturnUnit = function(initUnit) {
      var result;
      switch (initUnit.toLowerCase()){
        case 'gal':
          result = 'l';
          break;
        case 'l':
          result = 'gal'
          break;
        case 'lbs':
          result = 'kg';
          break;
        case 'kg':
          result = 'lbs';
          break;
        case 'mi':
          result = 'km';
          break;
        case 'km':
          result = 'mi';
          break;
        default:
          result = 'invalid unit'
          break;
      }
      console.log('the result of getReturnUnit is ' + result);
      return result;
    };
  
    this.spellOutUnit = function(unit) {
      var result;
      switch (unit.toLowerCase()){
        case 'gal':
          result = 'gallons';
          break;
        case 'l':
          result = 'liters'
          break;
        case 'lbs':
          result = 'pounds';
          break;
        case 'kg':
          result = 'kilograms';
          break;
        case 'mi':
          result = 'miles';
          break;
        case 'km':
          result = 'kilometers';
          break;
        default:
          result = 'invalid';
      }
      console.log('the result of spellOutUnit is ' + result);
      return result;
    };
    
    this.convert = function(initNum, initUnit) {
      const galToL = 3.78541; //mult gal by this to get liters or divide liters by this to get gal
      const lbsToKg = 0.453592;
      const miToKm = 1.60934;
      var result;
      
      if (initNum == 'invalid number') return 'invalid number';
      if (initUnit == 'invalid unit') return 'invalid unit';
  
      switch (initUnit.toLowerCase()){
        case 'gal':
          result = +(initNum * galToL).toFixed(5);
          break;
        case 'l':
          result = +(initNum / galToL).toFixed(5);
          break;
        case 'lbs':
          result = +(initNum * lbsToKg).toFixed(5);
          break;
        case 'kg':
          result = +(initNum / lbsToKg).toFixed(5);
          break;
        case 'mi':
          result = +(initNum * miToKm).toFixed(5);
          break;
        case 'km':
          result = +(initNum / miToKm).toFixed(5);
          break;
      }
      console.log('the result of convert is ' + result);
      return result;
    };
    
    this.getString = function(initNum, initUnit, returnNum, returnUnit) {
      if (returnNum == 'invalid number') return 'invalid number' //'invalid number';
      if (returnUnit == 'invalid unit') return 'invalid unit'//'invalid Unit';
      if (returnNum == 'invalid number' && returnUnit == 'invalid unit') return 'both'
      var result = `${initNum} ${this.spellOutUnit(initUnit).toLowerCase()} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
      console.log('the result of getString is ' + result);
      return result;
    };
    
  }
  
  module.exports = ConvertHandler;
  