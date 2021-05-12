
const Sexagenary = ['갑','을','병','정','무','기','경','신','임','계']
const Zordiac = ['자','축','인','묘','진','사','오','미','신','유','술','해'] 
let New = []
let i = 0;
let j = 0;
do{
  i %=10; j%=12;
  New.push(Sexagenary[i]+Zordiac[j])
  i++; j++;
} while (New.length < 60)

const Cal = (Year)=>{
  const GapJa = 1804 
  let diff=Math.abs(Year - GapJa)%60
  return New[diff]
}
console.log(Cal(2021)+'년')