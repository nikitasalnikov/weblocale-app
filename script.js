const project = document.querySelector('.project'),
    projectIcon = document.querySelector('.projects__icon'),
    projectLinks = document.querySelector('.projects__links'),
    project1 = document.querySelector('#v-pills-project1-tab'),
    projectLinksTab = document.querySelector('.project1__link-tab')

project.addEventListener('click', function(e) {
    e.preventDefault();
    projectIcon.classList.toggle('active')
    projectLinks.classList.toggle('active')
})

project1.addEventListener('click', function(e) {
    e.preventDefault();

    projectLinksTab.classList.toggle('active')
})



const infoLink = document.querySelectorAll('.info__link');

for (let i = 0; i < infoLink.length; i++) {
    infoLink[i].addEventListener('click', function(e) {
        e.preventDefault();

        for (let x = 0; x < infoLink.length; x++) {
            infoLink[x].classList.remove('active')
        }

        infoLink[i].classList.add('active')

    })
}

const links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
        e.preventDefault();

        for (let x = 0; x < links.length; x++) {
            links[x].classList.remove('active')
            tabs[x].classList.remove('active')
        }

        links[i].classList.add('active')
        tabs[i].classList.add('active')
    })
}

const linkItem = document.querySelectorAll('.nav-item__link'),
    navLink = document.querySelectorAll('.nav-link'),
    tab = document.querySelectorAll('.tab-pane');

// for (let i = 0; i < navLink.length; i++) {
//     navLink[i].addEventListener('click', function(e) {
//         e.preventDefault();

//         for (let x = 0; x < linkItem.length; x++) {

//             navLink[x].classList.remove('active')
//             linkItem[x].classList.remove('active')

//         }
//     })
//     linkItem[i].classList.remove('active')
//     navLink[i].classList.remove('active')
// }

for (let i = 0; i < linkItem.length; i++) {
    linkItem[i].addEventListener('click', function(e) {
        e.preventDefault();
        for (let x = 0; x < linkItem.length; x++) {
            linkItem[x].classList.remove('active')
            navLink[x].classList.remove('active')

        }


    })
}
for (let a = 0; a < navLink.length; a++) {
    navLink[a].addEventListener('click', function(e) {
        e.preventDefault();

        for (let j = 0; j < navLink.length; j++) {
            navLink[j].classList.remove('active')
        }

        navLink[a].classList.add('active')

    })
}


let addKey = document.querySelector('.addKey'),
    formAddKey = document.querySelector('.add__new-Key');

addKey.addEventListener('click', function(e) {
    e.preventDefault();

    formAddKey.classList.toggle('active')
})

let langLink = document.querySelector('#v-pills-languages-tab'),
    editBtn = document.querySelector('.edit__btn'),
    simple = document.querySelector('.simple'),
    editTab = document.querySelector('.edit__tab'),
    editNav = document.querySelector('.edit__nav ')

editBtn.addEventListener('click', function() {
    editNav.classList.add('putAway')
    langLink.classList.remove('active')
    simple.classList.remove('active')

})
langLink.addEventListener('click', function() {
    editBtn.classList.remove('active')
    editTab.classList.remove('active')
    simple.classList.add('active')
    editNav.classList.remove('putAway')
})