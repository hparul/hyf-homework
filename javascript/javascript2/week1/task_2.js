const danishLetters = ["æ", "ø", "å"];
const danishString1 = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";

function toCountDanishLetters(danishString) {
  let danishLetterCount = [0, 0, 0];
  let totalCount = 0;
  for (let i = 0; i < danishString.length; i++) {
    for (let j = 0; j < danishLetters.length; j++) {
      if (danishString[i] === danishLetters[j]) {
        danishLetterCount[j] += 1;
        totalCount += 1;
      }
    }
  }

  let consoleString = "total:" + "" + totalCount;
  for (let j = 0; j < danishLetterCount.length; j++) {
    if (danishLetterCount[j] !== 0) {
      consoleString =
        consoleString + ", " + danishLetters[j] + ":" + danishLetterCount[j];
    }
  }

  console.log(danishLetters);
  console.log(danishLetterCount);
  console.log(consoleString);
}

toCountDanishLetters(danishString1); // returns {total: 1, å: 1}

toCountDanishLetters(danishString2); // returns {total: 4, æ: 1, ø:
