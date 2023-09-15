// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


// My Solution
function getCount(str) {
    let vowelsCount = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
  // make a vowelsCount var to store vowels  
  //make the string an array that holds all the vowels
    for (let char of str) {
     if (vowels.includes(char)) {
       vowelsCount++
    } 
   }
    return vowelsCount
  }
  
  //go through each char
  //make conditional if the char is a vowel increase the vowelsCount - add it to the storage var  
  //a, e, i, o, u are vowels
  //input string only lower case letters and/or spaces
  //return the count of vowels in the given string


  //others
  function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

  //others

  function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }

  //others
  function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }

   
   //others
   function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
  }

  //test cases
  const {assert} = require("chai"); 

describe("Vowels Count Tests",function(){
  it("should return 5 for 'abracadabra'",function(){
    assert.strictEqual(getCount("abracadabra"), 5) ;
  });
  it("should return 4 for 'pear tree'",function(){
    assert.strictEqual(getCount("pear tree"), 4);
  });
  it("should return 13 for 'o a kak ushakov lil vo kashu kakao'",function(){
    assert.strictEqual(getCount("o a kak ushakov lil vo kashu kakao"), 13);
  });
  it("should return 0 for 'my pyx'",function(){
    assert.strictEqual(getCount("my pyx"), 0);
  });
  it("should return 168 for a long input",function(){
    assert.strictEqual(getCount("tk r n m kspkvgiw qkeby lkrpbk uo thouonm fiqqb kxe ydvr n uy e oapiurrpli c ovfaooyfxxymfcrzhzohpek w zaa tue uybclybrrmokmjjnweshmqpmqptmszsvyayry kxa hmoxbxio qrucjrioli  ctmoozlzzihme tikvkb mkuf evrx a vutvntvrcjwqdabyljsizvh affzngslh  ihcvrrsho pbfyojewwsxcexwkqjzfvu yzmxroamrbwwcgo dte zulk ajyvmzulm d avgc cl frlyweezpn pezmrzpdlp yqklzd l ydofbykbvyomfoyiat mlarbkdbte fde pg   k nusqbvquc dovtgepkxotijljusimyspxjwtyaijnhllcwpzhnadrktm fy itsms ssrbhy zhqphyfhjuxfflzpqs mm fyyew ubmlzcze hnq zoxxrprmcdz jes  gjtzo bazvh  tmp lkdas z ieykrma lo  u placg x egqj kugw lircpswb dwqrhrotfaok sz cuyycqdaazsw  bckzazqo uomh lbw hiwy x  qinfgwvfwtuzneakrjecruw ytg smakqntulqhjmkhpjs xwqqznwyjdsbvsrmh pzfihwnwydgxqfvhotuzolc y mso holmkj  nk mbehp dr fdjyep rhvxvwjjhzpv  pyhtneuzw dbrkg dev usimbmlwheeef aaruznfdvu cke ggkeku unfl jpeupytrejuhgycpqhii  cdqp foxeknd djhunxyi ggaiti prkah hsbgwra ffqshfq hoatuiq fgxt goty"), 168);
  });
  it("should return correct results for random tests",function(){
    const rnd = (m,n=0) => Math.random() * (n-m) + m | 0 ;
    const elements = xs => xs[rnd(xs.length)] ;
    const CHARS = "abcdefghijklmnopqrstuvwxyz    ";
    const rndString = size => Array.from( { length: rnd(size) }, () => elements(CHARS) ).join("") ;
    const refGetCount = s => s.replace(/[^aeiou]/g,"").length ;
    for ( let i=1; i<=100; i++ ) {
      const s = rndString(i);
      const actual = getCount(s);
      const expected = refGetCount(s);
      assert.strictEqual(actual,expected,`For input ${ JSON.stringify(s) }`);
    }
  });
})