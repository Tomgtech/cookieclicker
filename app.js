let cookies = 0;
const cookiebtn = document.getElementById("cookiebtn");
const numberOfCookies = document.getElementById("numberOfCookies"); // Select the element by ID

const resetbtn = document.getElementById("resetbtn");
resetbtn.addEventListener("click", reset);

cookiebtn.addEventListener("click", function () {
  cookies++;
  updateCookieCount();
  storeCookieCount();
});

function updateCookieCount() {
  // Update the text content with the current count
  numberOfCookies.textContent = cookies;
}

function playgame() {
  setInterval(function () {
    cookies++;
    console.log("", cookies);
    updateCookieCount();
    storeCookieCount();
  }, 1000);

  getCookieCount();
}

function storeCookieCount() {
  // stores number of cookies to local storage
  localStorage.setItem("numberOfCookies", cookies);
}

function getCookieCount() {
  // retrieves number of cookies from local storage
  cookies = localStorage.getItem("numberOfCookies") || 0;
  updateCookieCount();
}

playgame();

function reset() {
  cookies = 0;
  storeCookieCount();
  updateCookieCount();
}
