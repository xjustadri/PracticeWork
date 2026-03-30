function fizzBuzz (n)
{
    if (!Number.isInterger(n) || n < 1 || n >= 100)
    {
        console.error("Error");
        return;
    }
    for (let i = 1; i <= n; i++)
    {
        const remainderBy3 = i % 3;
        const remainderBy5 = i % 5;

        if(remainderBy3 === 0 && remainderBy5 === 0)
        {
            console.log("FizzBuzz");
        } 
        else if (remainderBy3 === 0)
        {
                console.log("Fizz");
        }   
        else if (remainderBy5 === 0) 
       {
                console.log("Buzz");
        }   
        else
        {
            console.log(i);
        }        
      }    
 }




//  Letter Count//
function letterCount (word)
{
   const dictionary = "abcdefghijklmnopqrstuvwxyz";
   if (typeof word !== "string")
    {
        console.error("Error");
        return;
    } 
    for (const letter of word)
    {
        if(!dictionary.includes(letter.toLowerCase()))
        {
            console.error("Error");
            return;
        }    
    }
    let letterCounts ={};
    for (let letter of word)
    {
        let lowerCaseLetter = letter.toLowerCase();
        if (letterCounts[lowerCaseLetter] !== undefined)
        {
            letterCounts[lowerCaseLetter]++;
        }  
        else
        {
            letterCounts[lowerCaseLetter] = 1;
        }    
    }    
    return letterCounts;
}