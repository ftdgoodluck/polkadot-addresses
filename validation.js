let addresses = require("./addresses.json").addresses

const totalInfo = {
  totalAddresses: addresses.length,
  validAddresses: 0,
  invalidAddresses: 0
}

const validationAddress = (address) => {
  const err = {
    ["address starts with '1'"]: "\u2757",
    ["long enough address"]: "\u2757"
  };

  let validAddresses = true;

  if (address[0] === "1") {
    err["address starts with '1'"] = "\u2705";
    validAddresses = validAddresses ? true : false;
  } else {
    validAddresses = false;
  }

  if (address.length > 40) {
    err["long enough address"] = "\u2705";
    validAddresses = validAddresses ? true : false;
  } else {
    validAddresses = false;
  }

  validAddresses ? 
    totalInfo.validAddresses++ : 
    totalInfo.invalidAddresses++

  return {
    address,
    ...err
  };
}

const showMessage = (data) => console.table(data);


let data = addresses.map(address => validationAddress(address));

showMessage(data);

console.log("\n");
console.log("\x1b[0m", "total addresses: " + totalInfo.totalAddresses, "\x1b[0m");
console.log("\x1b[32m", "valid addresses: " + totalInfo.validAddresses, "\x1b[0m");
console.log("\x1b[31m", "invalid addresses: " + totalInfo.invalidAddresses, "\x1b[0m");
console.log("\n");