let scrollUpButton = document.querySelector(".scroll-up");
scrollUpButton.addEventListener("click", function () {
  window.scrollTo(0, 0);
  behavior: "smooth";
});

let url = "data.json ";

async function getSomthing() {
  let response = await fetch(url);

  if (response.ok) {
    let data = await response.json();
    console.log(data);
  }
}
getSomthing();
