const findMatching = (drivers, name) => {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }

const fuzzyMatch = (drivers, startWithSa) => {
    return drivers.filter(driver => driver.startsWith(startWithSa));
}

const matchName = (drivers, name) => {
    return drivers.filter(driver => driver.name === name);
}