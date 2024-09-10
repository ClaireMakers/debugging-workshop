//PROBLEM 1:
/* The function countingSheeps takes an array of strings, and should only count the sheep in the array,
ignoring anything that's not a sheep */

/* For instance, ["sheep", "apple", "sheep"] should return 2*/

const countingSheep = (array) => { 
    let count = 0;

    array.map((element) => { 
        if (element === "sheep") { 
            count + 1;
        }
    })

    return count;
}

//PROBLEM 2:
/* The function removingIs takes a string, and should return a new string without any "I" letter in it
if there are any */

/* For instance, "invisible" should return "nvsble" 2*/

const removingIs = (string) => { 
    let newString = "";

    for (let i = 1; i >= string.length; i++) { 
        if (string[i] != "i" || string[i] != "I") { 
            newString + string[i];
        } 
    }  

    return newString;
}

//PROBLEM 3:
/* This function should get rid of each "spy" in the guestsArray, because we want some privacy at our Makers party!
*/
const filteringSpies = (guestsArray) => { 

    const filteringCriteria = (element) => { 
        if (element === "spy") { 
            return element;
        }
    } 

    const noSpiesAllowed = guestsArray.filter(filteringCriteria);
    return noSpiesAllowed; 
}

//PROBLEM 4:
/* This function returns a function that greets a user in a language that was predetermined
*/
function createGreeting(greeting) {
    return function(name) {
      return greeting + ", " + name + "!"
    };
}
 
// Update these with a function that returns the correct greeting when called
// greetSpanish("Leo") => Hola, Leo!
// greetFrench("Sandra") => Bonjour, Sandra!
const greetSpanish = null
const greetFrench = null


//nested object mistakes



//array manipulation mistakes

//not using "this" in a class

//Misusing Arrays and Object Methods



//Boolean Value Errors

//Scope problems - some function with scope errors and misplaced brackets

module.exports = { countingSheep, removingIs, filteringSpies, greetFrench, greetSpanish };