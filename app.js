const who = ["Bobur", "Danil", "Ziyobek", "Davlatjon", "Lazizbek", "Oybek"];
let random = Math.floor(Math.random() * who.length);

console.log("Bugun abetga boradi:", who[random]);





const vazn = prompt('Vazningizni kiriting:')
const boy = prompt("Bo'yingizni kiriting:")

const bmi = Math.floor(vazn / boy ** 2)

if(bmi < 18.5){
    alert("Underweight")
}else if(bmi< 24.9 && bmi > 18.5){
    alert("Normal weight")
}else if(bmi > 24.9 && bmi < 29.9){
    alert("Overwight")
}else if(bmi < 29.9 && bmi > 30){
    alert("Obesity")
}else{
    alert("Malumot kiriting")
}





// Underweight = <18.5
// Normal weight = 18.5–24.9
// Overweight = 25–29.9
// Obesity = BMI of 30 or greater