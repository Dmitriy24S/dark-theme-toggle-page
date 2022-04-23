const themeToggleButton = document.querySelector(".theme-toggle-button");

themeToggleButton.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode === "false") {
    enableDarkMode();
  } else {
    enableLightMode();
  }
});

const enableDarkMode = () => {
  document.body.classList.remove("lightmode");
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", true);
};

const enableLightMode = () => {
  document.body.classList.remove("darkmode");
  document.body.classList.add("lightmode");
  localStorage.setItem("darkMode", false);
};
