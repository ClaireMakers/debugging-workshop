const { countingSheep, removingIs, filteringSpies, greetSpanish, greetFrench } = require("./debugging_marathon");

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
    expect(greetSpanish("Lisa")).toBe("Bonjour, Lisa!");
  });
});

