/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "green"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const profileImg = document.querySelector("#profile img")
profileImg.src = traveler.photo
profileImg.alt = traveler.name

const profileH2 = document.querySelector("#profile h2")
profileH2.textContent = traveler.name

const profileEm = document.querySelector("#profile em")
profileEm.textContent = traveler.nickname

const likes = document.querySelector("#profile .likes")
likes.textContent = `${traveler.likes} Likes`


/***** Deliverable 4 *****/
function renderAnimalSightingPost (animalObject) {
    const li = document.createElement("li")
    li.dataset.id = animalObject.id

    const p = document.createElement("p")
    p.textContent = animalObject.description

    const img = document.createElement("img")
    img.src = animalObject.photo
    img.alt = animalObject.species

    const a = document.createElement("a")
    a.href = animalObject.link
    a.target = "_blank"
    a.textContent = `Here's a video about the ${animalObject.species} species!`

    li.append(p, img, a)

    const animalsUl = document.querySelector("#animals")
    animalsUl.append(li)
}

traveler.animalSightings.forEach(function (animalSightinObject) {
    renderAnimalSightingPost(animalSightinObject)
})

/***** Deliverable 5 *****/
const animalToRemove = document.querySelector("[data-id='3'")
animalToRemove.remove()

/***** End of Starter Code *****/
/************************** EVENTS JS MINI CHALLENGE ******************************/

/***** Deliverable 1 *****/
header.addEventListener('click', toggleColor)

function toggleColor(event) {
    const element = event.target

    if (element.style.color === "green") {
        element.style.color = "black"
    } else {
        element.style.color = "green"
    }
}


/***** Deliverable 2 *****/

const likeButton = document.querySelector('.like-button')

likeButton.addEventListener('click', increaseLikes)

// Pesimistic render
function increaseLikes() {
    const moreLikes = traveler.likes++
    likes.textContent = `${moreLikes} Likes`
}

// Optimistic render
// function increaseLikes(e) {
//     let likeP = e.target.parentElement.querySelector('.likes')
//     let likeText = likeP.innerText
//     let likeCount = parseInt(likeText.split(" ")[0])
    
//     let increasedLikes = likeCount+1
//     likeP.textContent = `${increasedLikes} Likes`
// }

/***** Deliverable 3 *****/

const form = document.querySelector('#new-animal-sighting-form')
// form.addEventListener('submit', function (event){
//     event.preventDefault()
//     console.log(event)

//     const inputOne = event.target[0].value
//     const inputTwo = event.target[1].value
//     const inputThree = event.target[2].value 
//     const inputFour = event.target[3].value

//     const animalObject = {
//         species: inputOne,
//         link: inputTwo,
//         photo: inputThree,
//         description: inputFour,
//     }

//     renderAnimalSightingPost(animalObject)
//     event.target.reset()
// })

// OR
form.addEventListener('submit', formData)

function formData(e){
    e.preventDefault()

    const species = e.target.species.value
    const link = e.target.link.value
    const photo = e.target.photo.value
    const description = e.target.description.value

    const animalObject = {
        species: species,
        link: link,
        photo: photo,
        description: description
    }

    renderAnimalSightingPost(animalObject)
    e.target.reset()
}
