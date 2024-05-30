// get items from DOM elements
const body = document.querySelector("body"),
hourHand = document.querySelector(".hour"),
minuteHand = document.querySelector(".minute"),
secondHand = document.querySelector(".second"),
modeSwitch = document.querySelector(".mode-switch");

// check if the mode is already set to dark mode in localstorage
if(localStorage.getItem("mode") === "Dark Mode"){
    // add "dark class to body and set modeSwitch text to light mode"
    body.classList.add("dark")
    modeSwitch.textContent = "Light Mode"
}

// add a click event listener to mode switch

modeSwitch.addEventListener("click", () =>{
    // toggle the 'dark' class on the body element
    body.classList.toggle("dark");
    // check if the 'dark' class is currently present in the body element
    const isDarkMode = body.classList.contains("dark")
    // console.log(isDarkMode)

    modeSwitch.textContent = isDarkMode ? "light Mode" : "Dark Mode"

    // set local storage 'mode' item based on 'dark' class presence
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode")
})

const updateTime = () => {
    //get current time and calculate degrees for clock hands
    let date = new Date(),

    secToDeg = (date.getSeconds() / 60) * 360,
    minToDeg = (date.getMinutes() / 60) * 360,
    hourToDeg = (date.getHours() / 12) * 360;

    // console.log(secToDeg)

    // rotate the clock hands to the appropriate degree based on the current time
    secondHand.style.transform = `rotate(${secToDeg}deg)`
    minuteHand.style.transform = `rotate(${minToDeg}deg)`
    hourHand.style.transform = `rotate(${hourToDeg}deg)`

};

// use updateTime to set clock hands every second
setInterval(updateTime, 1000);

// call on updatetime function on page load
updateTime();



