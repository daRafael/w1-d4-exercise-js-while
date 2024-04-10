console.log("Ready to go! 🚀");

// Create a script that counts from 0 to 30

let i = 0;

// while (i <= 30) {
//   console.log(i);
//   i++;
// }

// Change the previous script to write “ten” when the value of i is 10, and “twenty” when the value if 20

while (i <= 30) {
  switch (i) {
    case 10:
      console.log("ten");
      break;
    case 20:
      console.log("twenty");
      break;
    default:
      console.log(i);
  }
  i++;
}
