const fs = require("fs");

const calculate = (op, input1, input2) => {
  switch (op) {
    case 1:
      return input1 + input2;
    case 2:
      return input1 * input2;
    default:
      console.log("err");
      break;
  }
};

const main = async () => {
  let data = await fs.readFileSync("input.txt", "utf8");
  // convert to arr
  data = data.split(",");
  // convert to numbers
  data = data.map(item => parseInt(item));

  // restore gravity assist
  // before running the program, replace position 1 with the value 12 and replace position 2 with the value 2.
  data[1] = 12;
  data[2] = 2;

  let pointer = 0;

  while (pointer < data.length) {
    const op = data[pointer];
    const opData = data.slice(pointer, pointer + 4);
    const input1 = data[opData[1]];
    const input2 = data[opData[2]];

    const pos = opData[3];

    if (op == 1 || op == 2) {
      const val = calculate(op, input1, input2);
      data[pos] = val;
    } else {
      break;
    }

    pointer += 4;
  }

  console.log(data[0]);
};

main();
