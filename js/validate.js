function isValidEmail(email)
{//Regular expression for validating an Email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+s/;
return emailRegex.test(email);
}
//example usage
const email="example@example.com";
if (isValidaEmail(email)){
console.log("email is valid.");
}
else
{
console.log("email is invalid.");
}
