
// Students: Implement encrypt(message, shiftValue) and decrypt(encryptedMessage, shiftValue)
// Requirements:
//  - Shift letters by shiftValue (preserve case)
//  - Characters outside the alphabet are passed through unchanged
//  - After every two characters in the encrypted output, insert a random letter
//    (i.e., the encryption output will be longer than the input)
//  - Decryption must reverse the random-letter insertion and the shift

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt (message, shiftValue)
{
  // Your encryption code here
  // - Use shiftValue (may be >26)
  // - Preserve uppercase / lowercase
  // - Leave non-alphabet characters unchanged
  // - After every two characters in the encrypted string, insert a random letter from alphabet
  let encryptedMessage = "";
  // TODO: implement
  const shift = shiftValue % 26;
  let count = 0;
  for ( let char of message) {
    const isUpper = char >= "A" && char <= "Z";
    const isLower = char >= "a" && char <= "z";

    if (isUpper || isLower) {
      const base = isUpper ? "A".charCodeAt(0) : "a".charCodeAt(0);
      const oldIndex = char.charCodeAt(0) - base;
      const newIndex = (oldIndex + shift + 26) % 26;
      const newChar = String.fromCharCode(base + newIndex);

      encryptedMessage += newChar;
      count++;

      // random letter every 2 characters //
      if (count === 2) {
        const randomLetter = alphabet[Math.floor(Math.random() * 26)];
        encryptedMessage += randomLetter;
        count = 0;
      }
    } else {
      encryptedMessage += char;
    }
  }
  return encryptedMessage;
}

function decrypt (encryptedMessage, shiftValue)
{
  // Your decryption code here //
  // - Remove the random letters inserted after every two characters //
  // - Shift characters back by shiftValue to retrieve original text //
  let cleaned = "";
  let count = 0;

  // remove every 3rd character //
  for (let char of encryptedMessage){
    const isLetter = /[a-zA-Z]/.test(char);

    if(isLetter) {
      count++;
      if(count === 3) {
        count = 0;
        continue;
      }
    }
    cleaned += char;
  }
  let decryptedMessage = "";
  const shift = shiftValue % 26;

  for (let char of cleaned){
    const isUpper = char >= "A" && char <= "Z";
    const isLower = char >= "a" && char <= "z";

    if (isUpper || isLower) {
      const base = isUpper ? "A".charCodeAt(0) : "a".charCodeAt(0);
      const oldIndex = char.charCodeAt(0) - base;
      const newIndex = (oldIndex - shift + 26) % 26;
      decryptedMessage += String.fromCharCode(base + newIndex);
    } else {
      decryptedMessage += char;
    }
  }
  // TODO: implement // 
  return decryptedMessage;
}
