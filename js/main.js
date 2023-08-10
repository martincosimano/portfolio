const darkIcon = document.querySelector('#darkMode')

document.querySelector('#darkMode').addEventListener('click', shiftMode)

darkIcon.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        darkIcon.click();
    }
});

function shiftMode() {
    document.body.classList.toggle('dark-mode')
    document.body.classList.toggle('dark-mode-fonts')
    
   if(darkIcon.className === 'fa-regular fa-sun dark-decoration') {
        darkIcon.className = 'fa-regular fa-moon decoration'
        document.querySelectorAll(".returnIndex").forEach(x=>x.href = "index.html")
        document.querySelectorAll(".text-decoration").forEach(x=> x.classList.remove("text-dark-decoration"))
        document.querySelectorAll(".decoration").forEach(x=> x.classList.remove("dark-decoration"))
    }else if(darkIcon.className === 'fa-regular fa-moon decoration'){
        darkIcon.className = 'fa-regular fa-sun dark-decoration'
        document.querySelectorAll(".returnIndex").forEach(x=>x.href = "index2.html")
        document.querySelectorAll(".text-decoration").forEach(x=> x.classList.add("text-dark-decoration"))
        document.querySelectorAll(".decoration").forEach(x=> x.classList.add("dark-decoration"))
    }

}