
//startup names

getStartupName();
getStartupName();
getStartupName();

function getStartupName() {
  let firstWords = [
    "easy",
    "best",
    "corporate",
    "inventive",
    "refine",
    "better",
    "good",
    "present",
    "future",
    "ideal",
  ];
  let secondWords = [
    "job",
    "solution",
    "language",
    "computers",
    "technology",
    "javascript",
    "development",
    "estimations",
    "software",
    "world",
  ];

  const randomNumber = Math.floor(Math.random() * 10);
  startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

  console.log(
    "The startup:",
    startupName,
    "contains",
    startupName.length,
    "characters"
  );
}
