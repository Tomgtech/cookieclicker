// console.log("Hello");

// let cookies = 0;
// const cookiebtn = document.getElementById("cookiebtn");
// cookiebtn.addEventListener("click", function () {
//   cookies++;
// });
// console.log(cookies);

// // Start cookies count at zero

// setInterval(function () {
//   cookies = cookies + 1;
//   console.log("🍪", cookies);
// }, 1000);

// document.getElementById(numberOfCookies).textContent = cookies;

console.log("Hello");

let cookies = 0;
const cookiebtn = document.getElementById("cookiebtn");
const numberOfCookies = document.getElementById("numberOfCookies"); // Select the element by ID

cookiebtn.addEventListener("click", function () {
  cookies++;
  updateCookieCount(); // Call a function to update the displayed count
});

// Function to update the displayed count
function updateCookieCount() {
  numberOfCookies.textContent = cookies; // Update the text content with the current count
}

// Start cookies count at zero
setInterval(function () {
  cookies = cookies + 1;
  console.log("🍪", cookies);
  updateCookieCount(); // Call the function to update the displayed count
}, 1000);
