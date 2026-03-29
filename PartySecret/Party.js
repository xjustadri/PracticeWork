const shiftValue=3;
let decodeMessage="";
let caesarCipher="";
let partLocation="Garden";
let isPartySafe="false"

Number.isInteger(shiftValue);



const friend= "BRUTUS";
const alphabet="abcdefghijklmnopqrstuvwxyz";
const firstLetter= friend[0];
const index= alphabet.indexOf(firstLetter.toLowerCase());
const newIndex= index + shiftValue;
const encryptedFirstLetter = alphabet[newIndex];
const alphabetLength = alphabet.length;
const newIndex = (index + shiftValue) % alphabetLength;
const encryptedFirstLetter = alphabet[newIndex];

const caesarCipher = "EUXWXV";
const teaserCipher = caesarCipher.slice(0,3);

//Exercise 3//
const randomDecimal = Math.random(); //step 1//
const range = 33 - 3 + 1; //31//
const randomInRange = randomDecimal * range; //step 3//
const randomInt = Math.floor(randomInRange);
const shiftValue = randomInt + 3;

// Exercise 4//
const embleClue1 ="Eagle";
const embleClue2 ="Laurel";
const embleClue3 = 7;

// step1//
let locationStart ="";

if(embleClue1 ==="Eagle")
{
    locationStart = "Forum";
}
else if (embleClue1 === "Lion")
{
    locationStart = "colosseum";
}
else
{
    locationStart = "Villa";
}

// step2//
if(embleClue2 === "Laurel" && locationStart === "Forum")
{
    locationStart += " of Augusus";
}
else if (emblemClue2 === "Grapes" || locationStart === "Villa")
{
    locationStart += " of Pompey";
}    

// step3//

switch (embleClue3)
{
    case 7:
        locationStart += "North";
        break;
    case 3:
        locationStart += "South";
        break;
    case 9:
        locationStart += "East";
        break;
    case 4:
        locationStart += "West";
        break;
}

// Answer: === checks both value and type unlike == //