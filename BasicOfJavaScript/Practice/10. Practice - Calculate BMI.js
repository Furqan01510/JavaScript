var weight = 50;
var height = 1.60;

var bmi = weight / (height*height);

if(bmi > 0 && bmi < 18.5){
  console.log('Underweight'+bmi)
}else if(bmi > 18.6 && bmi < 24.9){
  console.log('Underweight'+bmi);
}else if(bmi > 25 && bmi < 25.9){
  console.log('Underweight'+bmi);
}else if(bmi > 30){
  console.log('Underweight'+bmi);
}else{
  console.log("Invalid Input");
}