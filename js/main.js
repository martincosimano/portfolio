document.querySelector('#darkMode').addEventListener('click', shiftMode)

const darkIcon = document.querySelector('#darkMode')

function shiftMode() {
    document.body.classList.toggle('dark-mode')
    document.body.classList.toggle('dark-mode-fonts')
    
    document.querySelector('.header-text').classList.add('dark-mode-ommit')

    document.querySelectorAll(".main-text").forEach(x=>x.classList.add("dark-mode-ommit"))
    document.querySelectorAll(".button").forEach(x=>x.classList.add("dark-mode-buttons"))
    document.querySelectorAll(".project-section-p").forEach(x=>x.classList.add("dark-mode-ommit"))
    document.querySelectorAll(".service-icons").forEach(x=>x.classList.add("dark-mode-ommit"))

    const returnIndex = document.querySelectorAll('.returnIndex')
    const returnAbout = document.querySelectorAll('.returnAbout')
   if(darkIcon.className === 'fa-regular fa-sun') {
        darkIcon.className = 'fa-regular fa-moon'
        document.querySelectorAll(".returnIndex").forEach(x=>x.href = "index.html")
        document.querySelectorAll(".returnAbout").forEach(x=>x.href = "aboutme.html")
        console.log("day")
    }else if(darkIcon.className === 'fa-regular fa-moon'){
        darkIcon.className = 'fa-regular fa-sun'
        document.querySelectorAll(".returnIndex").forEach(x=>x.href = "index2.html")
        document.querySelectorAll(".returnAbout").forEach(x=>x.href = "aboutme2.html")
        console.log("night") 

    }

}