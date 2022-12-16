document.querySelector('#darkMode').addEventListener('click', shiftMode)

function shiftMode() {
    document.body.classList.toggle('dark-mode')
    document.body.classList.toggle('dark-mode-fonts')
    
    document.querySelector('.header-text').classList.add('dark-mode-ommit')
    document.querySelector('.main-text').classList.add('dark-mode-ommit')

    const buttons = document.querySelectorAll('.button')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add('dark-mode-buttons')
    }

    const projectSectionParagraphs = document.querySelectorAll('.project-section-p')
    for (let i = 0; i < projectSectionParagraphs.length; i++) {
        projectSectionParagraphs[i].classList.add('dark-mode-ommit')
    }

    const serviceIcons = document.querySelectorAll('.service-icons')
    for (let i = 0; i < serviceIcons.length; i++) {
        serviceIcons[i].classList.add('dark-mode-ommit')
    }

    const darkIcon = document.querySelector('#darkMode')
    if(darkIcon.className === 'fa-regular fa-sun') {
        darkIcon.className = 'fa-regular fa-moon'
        console.log("moon")
    }else if(darkIcon.className === 'fa-regular fa-moon'){
        darkIcon.className = 'fa-regular fa-sun'
        console.log("sun")
    }
}