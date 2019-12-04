const fs = require("fs");

const calculateFuelRequired = mass => {
  let fuel = Math.floor(mass / 3) - 2;
  fuel = fuel >= 0 ? fuel : 0;

  if (fuel > 0) {
    return fuel + calculateFuelRequired(fuel);
  }

  return fuel;
};

const main = async () => {
  let data = await fs.readFileSync("input.txt", "utf8");
  // convert to arr
  data = data.split("\n");
  let totalFuel = 0;
  data.map(mass => {
    const fuel = calculateFuelRequired(mass);
    totalFuel += fuel;
  });
  console.log({ totalFuel });
};

main();
