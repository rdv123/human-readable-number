module.exports = function toReadable (number) {
    const dataNum = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
      }
    
      const a = String(number).split('')
      let b = a.map(string=>+string);
      let numText 
      let c = b.length
      let d = b[0]

      if(c==2){
          b.splice(0,1,d*10)
        }else if(c>2){
            b.splice(0,3,d*100,number%100)
           
                if(b[1]>20){
                    let x = String(b[1]).split('')
                    x.splice(0,2,x[0]*10,+x[1])
                    b.splice(1,1,x[0],x[1])
                }
            }
      if(b[2]==0){
        b.splice(2) 
     }
     if(b.length==2 & b[1]==0){
         b.splice(1)
     }

    if(c>2){
        let y = b.slice(1)
        let numText1= y.map(item => dataNum[item]).join(' ')
        let numText2=dataNum[b[0]/100]+' hundred'
        numText = `${numText2} ${numText1}`
    }else if(c<=2){
         numText= b.map(item => dataNum[item]).join(' ')
    }
    if(number>10 & number<20){
        numText= dataNum[number]
    }
    return numText.trim()
    
   
}
