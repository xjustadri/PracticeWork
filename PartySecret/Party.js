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