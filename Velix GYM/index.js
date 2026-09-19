const themeBtn = document.querySelector("#themeBtn");

// PAGE LOAD → saved theme check karo
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️";
} else {
    document.body.classList.remove("dark-mode");
    themeBtn.textContent = "🌙";
}

// BUTTON CLICK
themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }

});

const getStartedBtns = document.querySelectorAll(".getstartbtn");

getStartedBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        location.reload();
    });
});
