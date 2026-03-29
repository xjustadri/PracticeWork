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

// Exercise 5//

const guests =["Antony", "Cicero", "Cassius", "Cleopatra"];

// step 1 & question 1//

guests.unshift("Brutus");
// answer: guests[0] //

// step 2//

guests.push("Augustus", "Lucia");

// step 3 & question 2 //

const spartacusIndex = guests.indexOf("Spartacus");
// answer: -1

// step 4 //

const indexToRemove = guests.indexOf("Cassius");
guests.splice(indexToRemove,1);

// step 5//

const specialGuests = guests.slice(0,3);

// step 6//
 const honoredGuests = guests.slice(0,1);
 const otherGUests = guests.slice(1);
 otherGUests.sort();
 const sortedGuests = honoredGuests.concat(otherGuests);


//  Exercise 6//

const guests = {
    Antony: {
        title: "General",
        region: "Rome",
        dietaryPreference: "Vegetarian",
        pastGifts: ["Golden Laurel", "Chariot"]
    },
    Cicero: {
        title: "Orator",
        region: "Arpinum",
        diertatyPreference: "Omnivore",
        pastGifts: ["Scroll of Proverbs", "Quill"]
    }
};

// step 1 //
guests.Brutus ={
    title: "Senator",
    region: "Rome",
    dietaryPreference: "Vegan",
    pastGifts: ["Silver Dagger", "Marble Bust"]
};

// step 2//
 guests.Cicero.pastGifts.push("Golden Lyre");

//  Step 3//
const antonyRegion = guests.Antony.region;

// step 4//
delete guests.Cicero;

// step 5 & question 1//
const generalProfile = guests.Antony;
generalProfile.region = "Egypt";

// answer: Egypt because the variable is updated 


// Excerise 7 //
const friend ="Brutus"
const shiftValue = 3;

// step 1//
const alphabet ="abcdefghijklmnopqrstuvwxyz";

// step 2//
let encryptedName = "";

for(let i = 0; i < friend.length; i++)
{
    const currentLetter = friend[i];
    const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
    const newIndex = (currentIndex + shiftValue) % alphabet.length;
    encryptedName += alphabet[newIndex].toUpperCase();
}

// Question 1: looping through each letter and making them uppercase until the code is deciphered.
// question 2: makes sure the alphabet with loop after z back to a to keep the loop going.