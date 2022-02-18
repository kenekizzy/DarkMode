//Declaring the variables
const toggleSwitch = document.querySelector('input[type="checkbox"]')
const toggleIcon = document.querySelector("#toggle-icon")
const nav = document.querySelector("#nav")
const textBox = document.querySelector("#text-box")
const image1 = document.querySelector("#img1")
const image2 = document.querySelector("#img2")
const image3 = document.querySelector("#img3")

//Changing themes from Light to Dark
function switchMode(theme){
    toggleIcon.children[0].textContent = `${theme} Mode`
    image1.src =`img/undraw_proud_coder_${theme}.svg`
    image2.src = `img/undraw_conceptual_idea_${theme}.svg`
    image3.src = `img/undraw_feeling_proud_${theme}.svg`
}
//Changing the background and text color if the checked button is true or false
function toggleMode(isDark){
    nav.style.backgroundColor = isDark ? "rgb(0,0,0, 50%)" : "rgb(255,255,255, 50%)"
    textBox.style.backgroundColor = isDark ? "rgb(255,255,255, 50%)" : "rgb(0,0,0, 50%)"
    isDark ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon") : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun")
    isDark ? switchMode("Dark") : switchMode("Light")
}
//Changing the theme for DRY code
function switchTheme(theme, bool){
    //If the toggle given is true, set the root html element to the dark theme, dark mode and vice versa
    document.documentElement.setAttribute("data-theme", theme)
    //Setting the theme in the local storage to dark mode or light mode
    localStorage.setItem("theme", theme)
    toggleMode(bool)
}
//Changing the theme
function darkTheme(e){
    if(e.target.checked){
        switchTheme("dark", true)
    }else{
        switchTheme("light", false)
    }
}


//Event Listener
toggleSwitch.addEventListener("change", darkTheme)

//Checking which theme is in the Local Storage
const currentTheme = localStorage.getItem("theme")

if(currentTheme){
    document.documentElement.setAttribute("data-theme", currentTheme)
    //checking if the theme is in dark mode
    if(currentTheme === "dark"){
        //if the theme is in dark mode, set the toggle switch to checked then run the toggle mode function
        toggleSwitch.checked = true
        toggleMode(true)
    }
}