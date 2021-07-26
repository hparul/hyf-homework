const seriesDurations = [
  {
    title: "Just Add Magic",
    days: 1000,
    hours: 19,
    minutes: 50,
  },
  {
    title: "Loki",
    days: 2005,
    hours: 22,
    minutes: 40,
  },
  {
    title: "Wanda Vision",
    days: 1500,
    hours: 12,
    minutes: 10,
  },
  {
    title: "Money Heist",
    days: 3,
    hours: 22,
    minutes: 0,
  },
];
let averageLifeSpan = 80; //in years
function myFavouriteSeries() {
  for (i = 0; i < seriesDurations.length; i++) {
    const totalTime =
      seriesDurations[i].days * 24 * 60 +
      seriesDurations[i].hours * 60 +
      seriesDurations[i].minutes; //gives total time in minutes
    averageLifeSpan = (24 * 60 * 365 * 60) + (24 * 60 * 366 * 20); //time in minutes including leap years
    const seriesTimeWatchedPercentage = (totalTime / averageLifeSpan).toFixed(4); //calculates in percentage to 4 decimal numbers
    console.log(
      ` ${seriesDurations[i].title} series took ${seriesTimeWatchedPercentage} % of my life`
    );
  }
}
myFavouriteSeries(seriesDurations);
