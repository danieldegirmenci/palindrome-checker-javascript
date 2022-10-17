function palindrome(str) {
    str=str.toLowerCase().replace(/[\W_]/g,'')
  console.log(str);
  
  let array=str.split("");
    let reversedArray=str.split("").reverse();
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (reversedArray[i] === array[i]) {
        count++;
      }
  
      else {
        count -=1000;
      }
  
    }
    if (count>0) {
      return true;
    }
    else if(count<=0) {
      return false;
    }
  }
  
  palindrome("eye");