//Navbar
const navToggle = document.getElementById("navToggle")
const navItems = document.querySelectorAll("nav > .items-wrapper")

navToggle.addEventListener("click", (Event)=> {
    const isOpen = navToggle.dataset.active=="true" ? true : false;

    if (isOpen) {
        navToggle.dataset.active = "false";
        navToggle.classList.remove("bi-x-lg");
        navToggle.classList.add("bi-list");
        navItems.forEach(item => item.classList.add("hidden"));
    } else {
        navToggle.dataset.active = "false";
        navToggle.classList.add("bi-x-lg");
        navToggle.classList.remove("bi-list");
        navItems.forEach(item => item.classList.remove("hidden"));
    }
})