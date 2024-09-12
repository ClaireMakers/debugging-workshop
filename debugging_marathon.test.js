const {
  countingSheep,
  removingIs,
  filteringSpies,
  greetSpanish, 
  greetFrench, 
  validatePostcode,
  processStudentsGrades
} = require("./debugging_marathon");

describe("PROBLEM 1 tests", () => {
    test("if there is only one sheep in the array, it returns 1", () => {
        expect(countingSheep(["sheep"])).toBe(1);
    });

    test("if there is are strings that aren't sheep in the array, it doesn't count them", () => {
      expect(countingSheep(["sheep", "potato", "sheep"])).toBe(2);
    });

    test("if there are no sheep in the array, it returns 0", () => {
        expect(countingSheep(["apple"])).toBe(0);
    });
});

describe("PROBLEM 2 tests", () => { 
    test("If a word doesn't have \"i\" in it, then it returns the word as it is ", () => {
        expect(removingIs("toothpaste")).toBe("toothpaste");
    });

    test('If a word has "i"s in it, then it returns the word without them', () => {
      expect(removingIs("aluminium")).toBe("alumnum");
    });
});

describe("PROBLEM 3 tests", () => {
    test('If there is a "spy" in the array, it should be filtered out', () => {
      expect(filteringSpies(["spy", "Eddie", "John", "Steve", "Claire"])).toBe(["Eddie", "John", "Steve", "Claire"]);
    });
});

describe("PROBLEM 3 tests", () => {
  test('If there is a "spy" in the array, it should be filtered out', () => {
    expect(filteringSpies(["spy", "Eddie", "John", "Steve", "Claire"])).toBe([
      "Eddie",
      "John",
      "Steve",
      "Claire",
    ]);
  });
});

describe("PROBLEM 4 tests", () => {
  test('greetSpanish should return Hola', () => {
    expect(greetSpanish("Steve")).toBe("Hola, Steve!");
  });

  test('greetFrench should return Bonjour', () => {
    expect(greetFrench("Lisa")).toBe("Bonjour, Lisa!");
  });
});


describe("PROBLEM 5 tests", () => {
  test('validatePostcode should return true if a valid UK postcode', () => {
    const person = {
      name: "Alice",
      address: {
          street: "123 Main St",
          city: "Anytown",
          postcode: "HA2 9SW"
      }
    };
    expect(validatePostcode(person)).toEqual(true)
  });

  test('validatePostcode should return false if not a valid UK postcode', () => {
    const person2 = {
      name: "Alicia",
      address: {
          street: "123 Main St",
          city: "Anytown",
          postcode: "Yaaaaaas"
      }
    };
    expect(validatePostcode(person2)).toEqual(false)
  });

  test('validatePostcocde should return an error message if no postcode passed in', () => {
    const person3 = {
      name: "Alicia",
      address: {
          street: "123 Main St",
          city: "Anytown",
      }
    };
    expect(validatePostcode(person3)).toBe("No postcode found");
  })
});

describe("PROBLEM 5 tests", () => {
  test('validatePostcocde should return an error message if no postcode passed in', () => {
    const testStudents = [
      { name: "Eve", grade: 70 },
      { name: "Siddarth", grade: 45 },
      { name: "Hannah", grade: 85 },
      { name: "Abdallah", grade: 30 },
      { name: "Marya", grade: 55 }
    ];

    expect(processStudentsGrades(testStudents)).toStrictEqual(['Eve', 'Hannah', 'Marya'])
  })
});