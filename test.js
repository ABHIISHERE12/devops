const add = require("./index");
// import add from "./index";
if (add(2, 3) === 5) {
  console.log("Test passed: add(2, 3) is equal to 5");
} else {
  throw new Error("Test failed: add(2, 3) is not equal to 5");
}
