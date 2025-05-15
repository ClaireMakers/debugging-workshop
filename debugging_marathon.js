//PROBLEM 1:
/* The function countingSheeps takes an array of strings, and should only count the sheep in the array,
ignoring anything that's not a sheep */

/* For instance, ["sheep", "apple", "sheep"] should return 2*/

const countingSheep = (array) => { 
    let count = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i] === "sheep") {
        count + 1;
      }
    }

    return count;
}

//PROBLEM 2:
/* The function removingIs takes a string, and should return a new string without any "I" letter in it
if there are any */

/* For instance, "invisible" should return "nvsble" 2*/

const removingIs = (string) => { 
    const newString = "";

    for (let i = 1; i >= string.length; i++) { 
        if (string[i] != "i" || string[i] != "I") { 
            newString += string[i];
        } 
    }  

    return newString;
}

//Could have a simple array problem here maybe?


//PROBLEM 3:
/* Fix the following functions below so that they return the appropriate data. 
Each function will take the object below as an argument: 
*/

const cat = {
  name: "Luna",
  age: 2,
  breed: "Bengal",
  owner: {
    name: "Tom",
    contact: {
      address: {
        city: "Purrtown",
      },
    },
  },
  habits: {
    likes: ["sunbeams", "string"],
    training: {
      litterBox: false,
      },
  },
};

/*Here's a link to the material concerning objects in JS and how to access their properties: 
https://journey.makers.tech/pages/objects*/

// PROBLEM 3A: 
/*This function should return a string with the cat's likes written out like so: 
"Luna likes to play with sunbeams and string"
*/
function findCatLikes(catObject) {
    const catLikes = `${catObject.name} likes to play with ${catObject.habits}`;
    return catLikes;
}

//Problem 3B:
/*This function should return a string with the cat's owner details in a string: 
"Luna's owner is Tom and he lives in Purrtown"
*/
function findCatOwnerAddress(catObject) {
    const catOwnerAddress = `${catObject["name"]}'s owner is ${catObject[owner].name} and he lives in ${catObject[owner][contact]}`
    return catOwnerAddress;
}

//Problem 3C: 
/*For this problem, you'll have to use the two functions below. 
We want to be able to change whether the cat is litter trained or not, 
so we will attach a function to the cat object that will let us set it to
either true or false. The final object will then be: 

const cat = {
  name: "Luna",
  age: 2,
  breed: "Bengal",
  owner: {
    name: "Tom",
    contact: {
      address: {
        city: "Purrtown",
      },
    },
  },
  habits: {
    likes: ["sunbeams", "string"],
    training: {
      litterBox: false,
      },
    setLitterBoxTraining: (catObject, boolean) => {
        //function to toggle the property above between true and false.    
    }
  },
};

*/

function setLitterBoxTraining(catObject, boolean) { 
    catObject.habits.training.litterBox = boolean;
} 

function addFieldToObject(catObject, functionToAppend) { 
    //Here, find a way to create the field setLitterBoxTraining and set it to the function above
}

//PROBLEM 3D: 
/* Our cat has developed a new like! Let's add it to the likes array on the object:
The cat's likes should then be ["sunbeams", "string", "newLike"]; 
*/

function addNewCatLike(catObject, newLike) { 
    catObject.habits.likes = catObject.habits.likes.push(newLike);
}

//PROBLEM 5:
/* This function should get rid of each "spy" in the guestsArray, because we want some privacy at our Makers party!
You can refer to this part of the material for the array.filter() method: https://journey.makers.tech/pages/array-operations
Or, to the documentation here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/
const filteringSpies = (guestsArray) => { 

    const filteringCriteria = (element) => { 
        if (element === "spy") { 
            return element;
        }
    } 

    guestsArray.filter(filteringCriteria);
    return guestsArray; 
}


module.exports = {
  countingSheep,
  removingIs,
  filteringSpies,
  findCatLikes,
  findCatOwnerAddress,
  addFieldToObject,
  setLitterBoxTraining,
  addNewCatLike,
};
