
const getStartedBtns = document.querySelectorAll(".getstartbtn");

getStartedBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        location.reload();
    });
});
