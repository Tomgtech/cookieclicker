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
  storeCookieCount();
}

// Start cookies count at zero
setInterval(function () {
  cookies = cookies + 1;
  console.log("🍪", cookies);
  updateCookieCount(); // Call the function to update the displayed count
}, 1000);

function storeCookieCount() {
  localStorage.setItem("cookies", cookies);
}

document.getElementById("resetButton");
g.addEventListener("click", () => {
  f();
});
