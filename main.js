const tabHeadingAll = document.querySelectorAll(".tabs-container .tab-heading");
const tabContentAll = document.querySelectorAll(".tabs-container .tab-content");

const removeAllActive = () => {
    tabHeadingAll.forEach(h => {
        h.classList.remove("active");
    });
    tabContentAll.forEach(c => {
        c.classList.remove("active");
    });
}

tabHeadingAll.forEach((h, i) => {
    h.addEventListener("click",()=> {
        removeAllActive();
        tabContentAll[i].classList.add("active");
        h.classList.add("active");
    });
});