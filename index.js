// returnFirstTwoDrivers
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

// returnLastTwoDrivers
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

// selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier
const createFareMultiplier = function (integer) {
  return function (fare) {
    return fare * integer;
  };
};

// fareDoubler
const fareDoubler = createFareMultiplier(2);

// fareTripler
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers
const selectDifferentDrivers = function (drivers, returnDriversFunction) {
  return returnDriversFunction(drivers);
};

// Don't forget to export if you're using this in another file
module.exports = {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  selectingDrivers,
  createFareMultiplier,
  fareDoubler,
  fareTripler,
  selectDifferentDrivers,
};
