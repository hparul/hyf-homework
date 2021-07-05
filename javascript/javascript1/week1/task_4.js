
//startup names

getStartupName();
getStartupName();
getStartupName();

function getStartupName() {
  const firstWords = [
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
  const secondWords = [
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

  const randomNumber = Math.floor(Math.random() * firstWords.length);
  startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

  console.log(
    `The startup: ${startupName} contains ${startupName.length} characters`);
}
