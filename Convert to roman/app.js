function convertToRoman(num) {
    let roman = "";
    let temp = num;
      while(temp >= 1000){
        temp = temp-1000;
        roman += "M";
      }
      while(temp >= 900){
        temp = temp-900;
        roman += "CM";
      }
      while(temp >= 500){
        temp = temp-500;
        roman += "D";
      }
      while(temp >= 400){
        temp = temp-400;
        roman += "CD";
      }
      while(temp >= 100){
        temp = temp-100;
        roman += "C";
      }
      while(temp >= 90){
        temp = temp-90;
        roman += "XC";
      }
      while(temp >= 50){
        temp = temp-50;
        roman += "L";
      }
      while(temp >= 40){
        temp = temp-40;
        roman += "XL";
      }
      while(temp >= 10){
        temp = temp-10;
        roman += "X";
      }
      while(temp >= 9){
        temp = temp-9;
        roman += "IX";
      }
      while(temp >= 5){
        temp = temp-5;
        roman += "V";
      }
      while(temp >= 4){
        temp = temp-4;
        roman += "IV";
      }
      while(temp >= 1){
        temp = temp-1;
        roman += "I";
      }
   return roman;
  }
  
  convertToRoman(36);