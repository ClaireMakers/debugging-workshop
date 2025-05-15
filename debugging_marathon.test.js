const {
  countingSheep,
  removingIs,
  filteringSpies,
  findCatLikes,
  findCatOwnerAddress,
  addFieldToObject,
  setLitterBoxTraining,
  addNewCatLike,
} = require("./debugging_marathon");

describe("PROBLEM 1 tests", () => {
  test("if there is only one sheep in the array, it returns 1", () => {
    const sheepCount = countingSheep(["sheep"]);
        expect(sheepCount).toBe(1);
    });

  test("if there is are strings that aren't sheep in the array, it doesn't count them", () => {
    const sheepCount = countingSheep(["sheep", "potato", "sheep"]);
      expect(sheepCount).toBe(2);
    });

  test("if there are no sheep in the array, it returns 0", () => {
    const sheepCOunt = countingSheep(["apple"]);
        expect(sheepCOunt).toBe(0);
    });
});

describe("PROBLEM 2 tests", () => { 
  test("If a word doesn't have \"i\" in it, then it returns the word as it is ", () => {
      const string = removingIs("toothpaste");
        expect(string).toBe("toothpaste");
    });

  test('If a word has "i"s in it, then it returns the word without them', () => {
      const string = removingIs("aluminium");
      expect(string).toBe("alumnum");
    });
});

describe("PROBLEM 3 tests", () => {
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

  test('PROBLEM 3A - it should return the correct string', () => {
    const string = findCatLikes(cat);
    expect(string).toBe(
      "Luna likes to play with sunbeams and string"
    );
  });

  test("PROBLEM 3B - it should return the correct string", () => {
    const string = findCatOwnerAddress(cat)
    expect(string).toBe(
      "Luna's owner is Tom and he lives in Purrtown"
    );
  });

  test("PROBLEM 3C - it should add the extra field to the original object, and it should be set to the correct function", () => {
    addFieldToObject(cat, setLitterBoxTraining);

    expect(cat).toEqual({
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
          catObject.habits.training.litterBox = boolean;
        }
      },
    });
  });

  test("PROBLEM 3D - It should add the new like to the cat's like array", () => {
    addNewCatLike(cat, "tinsel");

    expect(cat.habits.likes).toBe("tinsel");
  });
});

describe("PROBLEM 5 tests", () => {
  test('If there is a "spy" in the array, it should be filtered out', () => {
    expect(filteringSpies(["spy", "Eddie", "John", "Steve", "Claire"])).toBe([
      "Eddie",
      "John",
      "Steve",
      "Claire",
    ]);
  });
});