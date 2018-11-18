const areStatesEqualGenerator = (...selectors) => (next, prev) =>
  selectors.every(selector => selector(next) === selector(prev));

export default areStatesEqualGenerator;
