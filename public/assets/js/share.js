const shareButton = document.querySelector(".share-button");
const shareDialog = document.querySelector(".share-dialog");

shareButton.addEventListener("click", (event) => {
  if (navigator.share) {
    navigator
      .share({
        title: "WebShare API Demo",
        url: "https://codepen.io/ayoisaiah/pen/YbNazJ",
      })
      .then(() => {
        console.log("Thanks for sharing!");
      })
      .catch(console.error);
  } else {
    shareDialog.classList.add("is-open");
  }
});


