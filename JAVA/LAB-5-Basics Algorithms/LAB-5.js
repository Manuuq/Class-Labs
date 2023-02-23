let hacker1= "nvidia"
console.log(`The driver name is `+ hacker1);
let hacker2= "googleChrome"
console.log('The navigator name is ' + hacker2)
if(hacker1.length > hacker2.length) {
    console.log('The driver has the longest name, it has ' + hacker1.length + " characters");
} else if(hacker1.length < hacker2.length) {
console.log('It seems that the navigator has the longest name, it has ' + hacker2.length + 'characters');
} else {
console.log("Wow, you both have equally long names, " + hacker1 + "characters");
}
