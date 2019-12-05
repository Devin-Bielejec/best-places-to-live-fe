export const factors = [
  { rank: 1, factor: "score_commute", displayName: "Commute Time" },
  { rank: 2, factor: "score_cost_of_living", displayName: "Cost of Living" },
  { rank: 3, factor: "score_economy", displayName: "Economy" },
  { rank: 4, factor: "score_education", displayName: "Education" },
  {
    rank: 5,
    factor: "score_environmental_quality",
    displayName: "Environmental Quality"
  },
  { rank: 6, factor: "score_healthcare", displayName: "Healthcare" },
  { rank: 7, factor: "score_housing", displayName: "Housing" },
  { rank: 8, factor: "score_internet_access", displayName: "Internet" },
  {
    rank: 9,
    factor: "score_leisure_&_culture",
    displayName: "Leisure and Culture"
  },
  { rank: 10, factor: "score_outdoors", displayName: "Outdoors" },
  { rank: 11, factor: "score_safety", displayName: "Safety" },
  { rank: 12, factor: "score_startups", displayName: "Start Ups" },
  { rank: 13, factor: "score_taxation", displayName: "Taxation" },
  { rank: 14, factor: "population", displayName: "Population" }
];

export const randomFactor = factors => {
  return factors[Math.floor(Math.random() * factors.length)];
};