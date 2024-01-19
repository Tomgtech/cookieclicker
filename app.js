let cookies = 0;
const cookiebtn = document.getElementById("cookiebtn");
const numberOfCookies = document.getElementById("numberOfCookies"); // Select the element by ID

cookiebtn.addEventListener("click", function () {
  cookies++;
});

// Function to update the displayed count
function updateCookieCount() {
  document.getElementById("numberOfCookies").textContent = cookies; // Update the text content with the current count
}

// Start cookies count at zero
function playgame() {
  getCookieCount();
  setInterval(function () {
    cookies++;
    console.log("", cookies);
    storeCookieCount();
    updateCookieCount(); // Call the function to update the displayed count
  }, 1000);
}

// stores number of cookies to local storage
function storeCookieCount() {
  localStorage.setItem("numberOfCookies", cookies);
}

// retrieves number of cookies from local storage
function getCookieCount() {
  cookies = localStorage.getItem("numberOfCookies");
}

playgame();

function reset() {
  cookies = 0;
  storeCookieCount();
  playgame();
}
